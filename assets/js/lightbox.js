/**
 * Lightbox functionality for platform images
 * Trade the Day - Platform Screenshot Viewer
 */

// Create lightbox elements
function initLightbox() {
    // Check if lightbox already exists
    if (document.getElementById('platformLightbox')) return;
    
    // Create lightbox container
    const lightbox = document.createElement('div');
    lightbox.id = 'platformLightbox';
    lightbox.className = 'lightbox';
    
    // Create inner content wrapper
    const lightboxContent = document.createElement('div');
    lightboxContent.className = 'lightbox-content';
    
    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'lightbox-close';
    closeBtn.innerHTML = '×';
    closeBtn.onclick = closeLightbox;
    
    // Create image element
    const img = document.createElement('img');
    img.className = 'lightbox-image';
    img.id = 'lightboxImage';
    
    // Create caption
    const caption = document.createElement('div');
    caption.className = 'lightbox-caption';
    caption.id = 'lightboxCaption';
    
    // Assemble lightbox
    lightboxContent.appendChild(closeBtn);
    lightboxContent.appendChild(img);
    lightboxContent.appendChild(caption);
    lightbox.appendChild(lightboxContent);
    
    // Add to body
    document.body.appendChild(lightbox);
    
    // Close on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
}

// Open lightbox with specific image
function openLightbox(imageSrc, caption) {
    const lightbox = document.getElementById('platformLightbox');
    const img = document.getElementById('lightboxImage');
    const captionElement = document.getElementById('lightboxCaption');
    
    if (!lightbox) {
        initLightbox();
        // Call again after init
        openLightbox(imageSrc, caption);
        return;
    }
    
    // Set image and caption
    img.src = imageSrc;
    captionElement.textContent = caption || '';
    
    // Show lightbox
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    
    // Add animation class
    setTimeout(() => {
        lightbox.classList.add('lightbox-active');
    }, 10);
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('platformLightbox');
    if (!lightbox) return;
    
    lightbox.classList.remove('lightbox-active');
    
    setTimeout(() => {
        lightbox.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    }, 300);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initLightbox();
    
    // Add click handlers to all platform images
    const platformImages = document.querySelectorAll('.platform-image');
    platformImages.forEach(img => {
        // Make images clickable
        img.style.cursor = 'pointer';
        
        // Get platform name from alt text
        const platformName = img.alt || 'Platform Screenshot';
        
        // Add click handler
        img.addEventListener('click', function() {
            openLightbox(img.src, platformName);
        });
    });
});