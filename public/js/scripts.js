/**
 * Trade the Day - Universal JavaScript
 * Handles all interactive functionality across the site
 */

// Dynamic date functionality - Updates any element with data-dynamic-date attribute
document.addEventListener('DOMContentLoaded', function() {
    const now = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const currentMonth = monthNames[now.getMonth()];
    const currentYear = now.getFullYear();
    const monthYear = currentMonth + " " + currentYear;
    
    // Legacy support for currentMonthYear ID
    const element = document.getElementById('currentMonthYear');
    if (element) {
        element.textContent = monthYear;
    }
    
    // Update coupon dates specifically
    const couponDate = document.getElementById('couponDate');
    if (couponDate) {
        // Preserve the status indicator and update only the text
        const statusIndicator = couponDate.querySelector('.status-indicator');
        if (statusIndicator) {
            couponDate.innerHTML = '';
            couponDate.appendChild(statusIndicator);
            couponDate.appendChild(document.createTextNode(`Live & Active for ${monthYear}`));
        } else {
            couponDate.textContent = `Live & Active for ${monthYear}`;
        }
    }
    
    // Universal dynamic date elements - can be used anywhere
    document.querySelectorAll('[data-dynamic-date]').forEach(element => {
        const format = element.getAttribute('data-dynamic-date');
        let dateText = '';
        
        switch(format) {
            case 'month-year':
                dateText = monthYear;
                break;
            case 'month':
                dateText = currentMonth;
                break;
            case 'year':
                dateText = currentYear.toString();
                break;
            case 'full':
                dateText = now.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                });
                break;
            default:
                dateText = monthYear;
        }
        
        element.textContent = dateText;
    });
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
backToTopButton.className = 'back-to-top';

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