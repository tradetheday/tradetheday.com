/**
 * Trade the Day Design System JavaScript
 * Interactive components and utilities
 * Based on AvaTrade Review Page patterns
 */

class TradeTheDayDesignSystem {
    constructor() {
        this.init();
    }

    init() {
        this.initAnalystNotes();
        this.initFAQs();
        this.initNavigation();
        this.initBackToTop();
        this.initCurrentDate();
        this.initAnimations();
    }

    /**
     * Analyst Notes Component
     */
    initAnalystNotes() {
        const buttons = document.querySelectorAll('.analyst-notes-button');
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const buttonId = button.getAttribute('onclick');
                if (buttonId) {
                    const match = buttonId.match(/toggleAnalystNotes\('([^']+)'\)/);
                    if (match) {
                        this.toggleAnalystNotes(match[1]);
                    }
                }
            });
        });
    }

    toggleAnalystNotes(id) {
        const content = document.getElementById(id);
        const icon = document.getElementById(id.replace('-notes', '-icon'));
        
        if (!content) return;
        
        if (content.style.display === 'none' || !content.style.display) {
            content.style.display = 'block';
            content.classList.add('active');
            if (icon) icon.textContent = '▲';
        } else {
            content.style.display = 'none';
            content.classList.remove('active');
            if (icon) icon.textContent = '▼';
        }
    }

    /**
     * FAQ Component
     */
    initFAQs() {
        const faqQuestions = document.querySelectorAll('.faq-question');
        faqQuestions.forEach(question => {
            question.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleFAQ(question);
            });
        });
    }

    toggleFAQ(element) {
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

    /**
     * Navigation Component
     */
    initNavigation() {
        this.initSmoothScroll();
        this.initActiveNavHighlighting();
    }

    initSmoothScroll() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Get the navigation height to offset the scroll
                    const nav = document.querySelector('.nav');
                    const navHeight = nav ? nav.offsetHeight : 0;
                    const extraOffset = 20; // Additional padding
                    
                    // Calculate the position to scroll to
                    const elementPosition = targetElement.offsetTop;
                    const offsetPosition = elementPosition - navHeight - extraOffset;
                    
                    // Smooth scroll to the calculated position
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    initActiveNavHighlighting() {
        window.addEventListener('scroll', () => {
            this.updateActiveNavLink();
        });
        
        window.addEventListener('load', () => {
            this.updateActiveNavLink();
        });
    }

    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        const scrollPosition = window.pageYOffset + 150;
        
        // Check if we're near the bottom of the page
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 100) {
            // If near bottom, highlight the last section
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

    /**
     * Back to Top Button
     */
    initBackToTop() {
        const backToTopButton = document.createElement('button');
        backToTopButton.innerHTML = '↑';
        backToTopButton.className = 'back-to-top';
        backToTopButton.setAttribute('aria-label', 'Back to top');
        
        // Apply styles programmatically for better maintainability
        Object.assign(backToTopButton.style, {
            position: 'fixed',
            bottom: '32px',
            right: '32px',
            width: '56px',
            height: '56px',
            background: 'var(--gradient-primary)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            fontSize: '24px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-lg)',
            zIndex: 'var(--z-overlay)',
            transition: 'all 0.3s ease',
            display: 'none'
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Show/hide back to top button based on scroll
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        document.body.appendChild(backToTopButton);
    }

    /**
     * Current Date Display
     */
    initCurrentDate() {
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        
        const now = new Date();
        const monthYear = `${monthNames[now.getMonth()]} ${now.getFullYear()}`;
        
        // Update any elements with currentMonthYear ID
        const dateElements = document.querySelectorAll('#currentMonthYear, .current-month-year');
        dateElements.forEach(element => {
            element.textContent = monthYear;
        });
    }

    /**
     * Animation utilities
     */
    initAnimations() {
        this.initScrollAnimations();
        this.initHoverEffects();
    }

    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe cards and other animated elements
        document.querySelectorAll('.card, .scorecard-item, .faq-item').forEach(el => {
            observer.observe(el);
        });
    }

    initHoverEffects() {
        // Enhanced card hover effects
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-2px)';
                card.style.boxShadow = 'var(--shadow-lg)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = 'var(--shadow-md)';
            });
        });
    }

    /**
     * Utility Methods
     */
    
    // Add utility method for showing notifications
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '12px 16px',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: type === 'success' ? 'var(--success)' : 
                           type === 'error' ? 'var(--error)' : 'var(--info)',
            color: 'white',
            fontWeight: '600',
            zIndex: 'var(--z-modal)',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease'
        });

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 10);

        // Auto remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // Modal utility
    createModal(content, options = {}) {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
        
        if (typeof content === 'string') {
            modalContent.innerHTML = content;
        } else {
            modalContent.appendChild(content);
        }

        // Add close button
        const closeButton = document.createElement('button');
        closeButton.innerHTML = '×';
        closeButton.className = 'modal-close';
        closeButton.addEventListener('click', () => this.closeModal(modal));

        modalContent.appendChild(closeButton);
        modal.appendChild(modalContent);

        // Apply styles
        Object.assign(modal.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 'var(--z-modal)',
            opacity: '0',
            transition: 'opacity 0.3s ease'
        });

        Object.assign(modalContent.style, {
            backgroundColor: 'var(--white)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-xl)',
            maxWidth: '90vw',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative',
            transform: 'scale(0.9)',
            transition: 'transform 0.3s ease'
        });

        Object.assign(closeButton.style, {
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '4px 8px',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--gray-500)'
        });

        document.body.appendChild(modal);

        // Animate in
        setTimeout(() => {
            modal.style.opacity = '1';
            modalContent.style.transform = 'scale(1)';
        }, 10);

        // Close on backdrop click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal(modal);
            }
        });

        // Close on ESC key
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                this.closeModal(modal);
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);

        return modal;
    }

    closeModal(modal) {
        modal.style.opacity = '0';
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.style.transform = 'scale(0.9)';
        }

        setTimeout(() => {
            if (modal.parentNode) {
                modal.parentNode.removeChild(modal);
            }
        }, 300);
    }

    // License viewing functionality (placeholder for actual implementation)
    viewLicense(country) {
        const licenseInfo = {
            ireland: {
                name: 'Central Bank of Ireland',
                license: 'C53877',
                compensation: '€20,000',
                url: '#'
            },
            asic: {
                name: 'ASIC Australia',
                license: '406684', 
                compensation: 'AU$500,000',
                url: '#'
            },
            japan: {
                name: 'Japan FSA',
                license: '1662',
                type: 'Tier-1 Regulation',
                url: '#'
            }
        };

        const info = licenseInfo[country];
        if (info) {
            const content = `
                <h3>${info.name}</h3>
                <p><strong>License:</strong> ${info.license}</p>
                ${info.compensation ? `<p><strong>Compensation:</strong> ${info.compensation}</p>` : ''}
                ${info.type ? `<p><strong>Type:</strong> ${info.type}</p>` : ''}
                <p><em>In a real implementation, this would display the actual license document.</em></p>
            `;
            this.createModal(content);
        }
    }
}

/**
 * Additional Animation Classes (to be added to CSS)
 */
const animationStyles = `
    .animate-in {
        animation: slideInUp 0.6s ease forwards;
    }

    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .card {
        transition: var(--transition-base);
    }

    .card:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-lg);
    }

    .back-to-top:hover {
        transform: translateY(-3px) scale(1.02);
        box-shadow: 0 8px 24px rgba(255, 72, 0, 0.35);
    }

    /* Modal styles */
    .modal-overlay {
        backdrop-filter: blur(5px);
    }

    .modal-close:hover {
        background: var(--gray-100);
        color: var(--gray-700);
    }

    /* Notification styles */
    .notification {
        box-shadow: var(--shadow-lg);
        font-size: var(--font-size-sm);
    }
`;

// Initialize the design system when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Add animation styles to head
    const styleElement = document.createElement('style');
    styleElement.textContent = animationStyles;
    document.head.appendChild(styleElement);

    // Initialize the design system
    window.tradeTheDayDS = new TradeTheDayDesignSystem();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TradeTheDayDesignSystem;
}

// Global utility functions for backward compatibility
window.toggleAnalystNotes = function(id) {
    if (window.tradeTheDayDS) {
        window.tradeTheDayDS.toggleAnalystNotes(id);
    }
};

window.toggleFAQ = function(element) {
    if (window.tradeTheDayDS) {
        window.tradeTheDayDS.toggleFAQ(element);
    }
};

window.viewLicense = function(country) {
    if (window.tradeTheDayDS) {
        window.tradeTheDayDS.viewLicense(country);
    }
};