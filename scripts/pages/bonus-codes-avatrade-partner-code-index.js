// AvaTrade Partner Code Page Functionality

// Copy code functionality
function copyCode() {
  const code = document.getElementById('partnerCode').textContent;
  const copyText = document.getElementById('copyText');
  
  if (navigator.clipboard) {
    navigator.clipboard.writeText(code).then(() => {
      copyText.textContent = '✅ Code Copied!';
      setTimeout(() => {
        copyText.textContent = '📋 Click to Copy Code';
      }, 2000);
    }).catch(() => {
      fallbackCopyCode(code, copyText);
    });
  } else {
    fallbackCopyCode(code, copyText);
  }
}

// Copy code functionality for second button
function copyCode2() {
  const copyText = document.getElementById('copyText2');
  
  if (navigator.clipboard) {
    navigator.clipboard.writeText('128979').then(() => {
      copyText.textContent = '✅ Copied!';
      setTimeout(() => {
        copyText.textContent = '📋 Copy Code';
      }, 2000);
    }).catch(() => {
      fallbackCopyCode('128979', copyText);
    });
  } else {
    fallbackCopyCode('128979', copyText);
  }
}

// Fallback copy method for older browsers
function fallbackCopyCode(text, element) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    document.execCommand('copy');
    element.textContent = '✅ Code Copied!';
    setTimeout(() => {
      element.textContent = '📋 Click to Copy Code';
    }, 2000);
  } catch (err) {
    console.error('Failed to copy code:', err);
    element.textContent = 'Copy failed - try manually';
    setTimeout(() => {
      element.textContent = '📋 Click to Copy Code';
    }, 3000);
  }
  
  document.body.removeChild(textArea);
}

// FAQ functionality
document.addEventListener('DOMContentLoaded', function() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const isActive = this.classList.contains('active');
      
      // Close all other FAQ items
      faqQuestions.forEach(otherQuestion => {
        if (otherQuestion !== this) {
          otherQuestion.classList.remove('active');
          otherQuestion.nextElementSibling.classList.remove('active');
        }
      });
      
      // Toggle current FAQ item
      if (isActive) {
        this.classList.remove('active');
        answer.classList.remove('active');
      } else {
        this.classList.add('active');
        answer.classList.add('active');
      }
    });
  });
});

// Make functions globally available
window.copyCode = copyCode;
window.copyCode2 = copyCode2;