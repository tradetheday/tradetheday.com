// FAQ Toggle functionality
window.toggleFaq = function(index) {
  const faqItem = document.getElementById(`faq-${index}`);
  if (faqItem) {
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
    });
    
    // Toggle the clicked one
    if (!isActive) {
      faqItem.classList.add('active');
    }
  }
};