// Update date to current month
document.addEventListener('DOMContentLoaded', function() {
  const dateElements = document.querySelectorAll('.dynamic-date');
  const currentDate = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  const currentMonth = monthNames[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();
  
  dateElements.forEach(element => {
    element.textContent = `Live & Active for ${currentMonth} ${currentYear}`;
  });
});

// Enhanced navigation highlighting for this page
function updateNavigationHighlight() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  let maxVisibleArea = 0;
  
  // If we're at the top of the page, don't highlight anything
  if (window.scrollY < 200) {
    navLinks.forEach(link => link.classList.remove('active'));
    return;
  }
  
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const sectionId = section.getAttribute('id');
    
    // Calculate visible area of the section
    const visibleTop = Math.max(0, rect.top);
    const visibleBottom = Math.min(window.innerHeight, rect.bottom);
    const visibleHeight = Math.max(0, visibleBottom - visibleTop);
    
    // Only consider sections that have their top visible or are well into view
    const sectionTop = rect.top;
    const isInView = sectionTop < window.innerHeight * 0.6 && rect.bottom > window.innerHeight * 0.4;
    
    // If this section has more visible area and is properly in view
    if (visibleHeight > maxVisibleArea && visibleHeight > 150 && isInView) {
      maxVisibleArea = visibleHeight;
      current = sectionId;
    }
  });
  
  // Update navigation
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// Run on scroll with throttling
let scrollTimeout;
window.addEventListener('scroll', function() {
  if (scrollTimeout) clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(updateNavigationHighlight, 10);
});

// Run on load
updateNavigationHighlight();

// FAQ functionality - using universal class names
const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach(button => {
  button.addEventListener('click', function() {
    const faqItem = this.parentElement;
    const answer = this.nextElementSibling;
    const isOpen = faqItem.classList.contains('active');
    
    if (isOpen) {
      faqItem.classList.remove('active');
    } else {
      faqItem.classList.add('active');
    }
  });
});

// Make functions globally available
window.copyCode = function() {
  const codeElement = document.getElementById('partnerCode');
  if (!codeElement || !codeElement.textContent) return;
  
  navigator.clipboard.writeText(codeElement.textContent).then(function() {
    const btn = document.getElementById('copyBtn');
    const text = document.getElementById('copyText');
    if (btn && text) {
      btn.classList.add('copied');
      text.textContent = '✅ Code Copied!';
      
      setTimeout(function() {
        btn.classList.remove('copied');
        text.textContent = '📋 Click to Copy Code';
      }, 2000);
    }
  });
};

window.copyCode2 = function() {
  navigator.clipboard.writeText('128979').then(function() {
    const text = document.getElementById('copyText2');
    if (text) {
      text.textContent = '✅ Copied!';
      
      setTimeout(function() {
        text.textContent = '📋 Copy Code';
      }, 2000);
    }
  });
};