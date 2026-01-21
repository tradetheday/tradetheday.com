#!/usr/bin/env python3
import io, os, posixpath, re, urllib.parse
from http.server import SimpleHTTPRequestHandler, HTTPServer

DOCROOT = os.path.abspath(os.getcwd())

INCLUDE_RE = re.compile(r'<!--#include\s+(file|virtual)\s*=\s*"([^"]+)"\s*-->')

def safe_join(base, *paths):
    # Prevents `..` escaping outside the docroot
    final = os.path.abspath(os.path.join(base, *paths))
    if os.path.commonpath([final, DOCROOT]) != DOCROOT:
        raise PermissionError("Path escapes document root")
    return final

class SSIHandler(SimpleHTTPRequestHandler):
    # Map extensionless URLs to .html and directory indexes
    def translate_path(self, path):
        # Normalise URL path to local filesystem path under DOCROOT
        path = path.split('?',1)[0].split('#',1)[0]
        path = posixpath.normpath(urllib.parse.unquote(path))
        if path.startswith('/'):
            path = path[1:]
        fs_path = safe_join(DOCROOT, path)

        # If exact file exists, serve it
        if os.path.isfile(fs_path):
            return fs_path

        # If a directory, serve index.html if present
        if os.path.isdir(fs_path):
            index = os.path.join(fs_path, 'index.html')
            if os.path.isfile(index):
                return index

        # If no extension, try adding .html
        if not os.path.splitext(fs_path)[1]:
            html_try = fs_path + '.html'
            if os.path.isfile(html_try):
                return html_try

        return fs_path  # may 404 later

    def do_GET(self):
        path = self.translate_path(self.path)
        # Process only .html/.shtml through the SSI preprocessor
        if os.path.isfile(path) and os.path.splitext(path)[1].lower() in ('.html', '.shtml'):
            try:
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                content = self.process_includes(content, os.path.dirname(path))
                data = content.encode('utf-8')
                self.send_response(200)
                self.send_header("Content-Type", "text/html; charset=utf-8")
                self.send_header("Content-Length", str(len(data)))
                self.send_header("Cache-Control", "no-store")
                self.end_headers()
                self.wfile.write(data)
                return
            except FileNotFoundError:
                self.send_error(404, "File not found")
                return
            except PermissionError:
                self.send_error(403, "Forbidden")
                return
            except Exception as e:
                self.send_error(500, f"Server error: {e}")
                return

        # Fallback to normal static serving for everything else
        return super().do_GET()

    def process_includes(self, html, current_dir, depth=0):
        if depth > 10:
            return html  # avoid infinite recursion
        def repl(m):
            mode, target = m.group(1), m.group(2)
            try:
                if mode == 'file':
                    include_path = safe_join(current_dir, target)
                else:  # virtual = root-relative from DOCROOT
                    include_path = safe_join(DOCROOT, target.lstrip('/'))
                with open(include_path, 'r', encoding='utf-8') as inc:
                    included = inc.read()
                # Recursively process includes inside included content
                return self.process_includes(included, os.path.dirname(include_path), depth+1)
            except FileNotFoundError:
                return f'<!-- include not found: {target} -->'
            except PermissionError:
                return f'<!-- include forbidden: {target} -->'
            except Exception as e:
                return f'<!-- include error: {target}: {e} -->'
        return INCLUDE_RE.sub(repl, html)

def run(port=8000):
    server_address = ('', port)
    httpd = HTTPServer(server_address, SSIHandler)
    print(f"Serving {DOCROOT} with SSI on http://localhost:{port}")
    httpd.serve_forever()

if __name__ == '__main__':
    import argparse
    ap = argparse.ArgumentParser(description="Simple SSI-aware dev server")
    ap.add_argument('--port', '-p', type=int, default=8000)
    args = ap.parse_args()
    run(args.port)