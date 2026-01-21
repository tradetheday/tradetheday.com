/**
 * AvaTrade Review Page JavaScript
 * Handles all interactive functionality for the AvaTrade review page
 */

// Current month/year display
document.addEventListener('DOMContentLoaded', function() {
    const now = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const monthYear = monthNames[now.getMonth()] + " " + now.getFullYear();
    const element = document.getElementById('currentMonthYear');
    if (element) {
        element.textContent = monthYear;
    }
});

// Analyst Notes Toggle
function toggleAnalystNotes(id) {
    const content = document.getElementById(id);
    const icon = document.getElementById(id.replace('-notes', '-icon'));
    
    if (content.style.display === 'none') {
        content.style.display = 'block';
        icon.textContent = '▲';
    } else {
        content.style.display = 'none';
        icon.textContent = '▼';
    }
}

// FAQ Toggle
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// License viewing functionality
function viewLicense(country) {
    alert(`License verification for ${country} - This would open a modal with the actual license document in a real implementation.`);
}

// Smooth scroll for navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation highlighting on scroll
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    const scrollPosition = window.pageYOffset + 150;
    
    // Check if we're near the bottom of the page
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 100) {
        // If near bottom, highlight the last section (verdict)
        const lastSection = Array.from(sections).pop();
        if (lastSection) {
            current = lastSection.getAttribute('id');
        }
    } else {
        // Normal scroll detection
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                current = section.getAttribute('id');
            }
        });
    }
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', updateActiveNavLink);
window.addEventListener('load', updateActiveNavLink);

// Back to top functionality
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '↑';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 32px;
    right: 32px;
    width: 56px;
    height: 56px;
    background: var(--gradient-primary);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 24px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: var(--shadow-lg);
    z-index: 1000;
    transition: all 0.3s ease;
    display: none;
`;

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.body.appendChild(backToTopButton);

// Show/hide back to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});