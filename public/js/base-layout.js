/**
 * Base Layout Scripts
 * Global functionality for all pages
 */

document.addEventListener('DOMContentLoaded', function() {
  // Search overlay functionality
  const searchTrigger = document.getElementById('searchTrigger');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchClose = document.getElementById('searchClose');
  const searchInput = document.getElementById('searchOverlayInput');

  // Store the element that opened the search for focus return
  let previouslyFocusedElement = null;

  // Get all focusable elements within the search overlay
  // Note: Removed offsetParent check to avoid forced reflow
  function getFocusableElements() {
    if (!searchOverlay) return [];
    return Array.from(searchOverlay.querySelectorAll(
      'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ));
  }

  function openSearch() {
    if (!searchOverlay) return;

    // Store the currently focused element
    previouslyFocusedElement = document.activeElement;

    // Update ARIA states
    searchOverlay.classList.add('is-active');
    searchOverlay.setAttribute('aria-hidden', 'false');
    if (searchTrigger) {
      searchTrigger.setAttribute('aria-expanded', 'true');
    }

    // Focus the search input
    setTimeout(() => {
      if (searchInput) searchInput.focus();
    }, 100);
  }

  function closeSearch() {
    if (!searchOverlay) return;

    // Update ARIA states
    searchOverlay.classList.remove('is-active');
    searchOverlay.setAttribute('aria-hidden', 'true');
    if (searchTrigger) {
      searchTrigger.setAttribute('aria-expanded', 'false');
    }

    // Return focus to the element that opened the search
    if (previouslyFocusedElement && typeof previouslyFocusedElement.focus === 'function') {
      previouslyFocusedElement.focus();
    }
    previouslyFocusedElement = null;
  }

  // Keyboard trap for modal - keep focus within overlay when open
  function handleKeyboardTrap(e) {
    if (!searchOverlay || !searchOverlay.classList.contains('is-active')) return;

    if (e.key === 'Tab') {
      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        // Shift + Tab: going backwards
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab: going forwards
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  }

  if (searchTrigger && searchOverlay) {
    // Open search on trigger click
    searchTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      if (searchOverlay.classList.contains('is-active')) {
        closeSearch();
      } else {
        openSearch();
      }
    });

    // Close on X button
    if (searchClose) {
      searchClose.addEventListener('click', closeSearch);
    }

    // Close when clicking outside the search inner area
    searchOverlay.addEventListener('click', (e) => {
      if (e.target === searchOverlay) {
        closeSearch();
      }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && searchOverlay.classList.contains('is-active')) {
        closeSearch();
      }
    });

    // Keyboard trap handler
    document.addEventListener('keydown', handleKeyboardTrap);

    // Keyboard shortcut: Cmd/Ctrl + K to open search
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (searchOverlay.classList.contains('is-active')) {
          closeSearch();
        } else {
          openSearch();
        }
      }
    });
  }

  // Back to top button functionality
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    let ticking = false;

    // Show/hide based on scroll position (throttled with rAF)
    function toggleBackToTop() {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
      ticking = false;
    }

    // Initial check (deferred to avoid blocking)
    requestAnimationFrame(toggleBackToTop);

    // Listen for scroll events with rAF throttling
    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(toggleBackToTop);
        ticking = true;
      }
    }, { passive: true });

    // Smooth scroll to top
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
