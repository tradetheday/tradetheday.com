/**
 * Enhanced Lazy Loading Script for Trade the Day
 * Provides intersection observer fallback and loading states
 */

(function() {
  'use strict';

  // Check for native lazy loading support
  const supportsNativeLazyLoading = 'loading' in HTMLImageElement.prototype;
  
  if (supportsNativeLazyLoading) {
    // Native lazy loading is supported, add loading states
    document.addEventListener('DOMContentLoaded', function() {
      const lazyImages = document.querySelectorAll('img[loading="lazy"]');
      
      lazyImages.forEach(img => {
        // Add loading state
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        // Show image when loaded
        const showImage = () => {
          img.style.opacity = '1';
        };
        
        if (img.complete && img.naturalHeight !== 0) {
          showImage();
        } else {
          img.addEventListener('load', showImage, { once: true });
        }
      });
    });
    return;
  }

  // Fallback for browsers without native lazy loading support
  let lazyImageObserver;

  document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if (!lazyImages.length) return;

    // Use Intersection Observer if available
    if ('IntersectionObserver' in window) {
      lazyImageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            loadImage(img);
            observer.unobserve(img);
          }
        });
      }, {
        // Load images 100px before they come into view
        rootMargin: '100px 0px'
      });

      lazyImages.forEach(img => {
        lazyImageObserver.observe(img);
      });
    } else {
      // Fallback: load all images immediately for older browsers
      lazyImages.forEach(loadImage);
    }
  });

  function loadImage(img) {
    // Add loading state
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
    
    const tempImg = new Image();
    tempImg.onload = function() {
      // Image loaded successfully
      img.src = tempImg.src;
      img.style.opacity = '1';
    };
    
    tempImg.onerror = function() {
      // Image failed to load, show placeholder or error state
      img.style.opacity = '1';
      img.alt = 'Image failed to load';
    };
    
    // Start loading
    tempImg.src = img.src;
  }

  // Cleanup observer on page unload
  window.addEventListener('beforeunload', function() {
    if (lazyImageObserver) {
      lazyImageObserver.disconnect();
    }
  });

})();