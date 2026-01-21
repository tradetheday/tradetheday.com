/**
 * Universal Date Updater for Trade the Day
 * Automatically updates date references throughout the site
 */

(function() {
  'use strict';

  // Create date formatters
  const now = new Date();
  
  const formatters = {
    month: new Intl.DateTimeFormat('en-US', { month: 'long' }),
    year: new Intl.DateTimeFormat('en-US', { year: 'numeric' }),
    shortYear: new Intl.DateTimeFormat('en-US', { year: '2-digit' }),
    monthYear: new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }),
    fullDate: new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  };

  // Get formatted date strings
  const dates = {
    currentMonth: formatters.month.format(now),
    currentYear: formatters.year.format(now),
    currentShortYear: formatters.shortYear.format(now),
    currentMonthYear: formatters.monthYear.format(now),
    currentFullDate: formatters.fullDate.format(now)
  };

  // Update elements when DOM is ready
  function updateDates() {
    // Update by ID selectors
    const idSelectors = {
      'currentMonth': dates.currentMonth,
      'currentYear': dates.currentYear,
      'currentShortYear': dates.currentShortYear,
      'currentMonthYear': dates.currentMonthYear,
      'currentFullDate': dates.currentFullDate
    };

    Object.entries(idSelectors).forEach(([id, value]) => {
      const element = document.getElementById(id);
      if (element) {
        element.textContent = value;
      }
    });

    // Update by class selectors
    const classSelectors = {
      'js-current-month': dates.currentMonth,
      'js-current-year': dates.currentYear,
      'js-current-short-year': dates.currentShortYear,
      'js-current-month-year': dates.currentMonthYear,
      'js-current-full-date': dates.currentFullDate
    };

    Object.entries(classSelectors).forEach(([className, value]) => {
      const elements = document.querySelectorAll('.' + className);
      elements.forEach(element => {
        element.textContent = value;
      });
    });

    // Update by data attributes
    const dataSelectors = document.querySelectorAll('[data-date-format]');
    dataSelectors.forEach(element => {
      const format = element.getAttribute('data-date-format');
      
      switch(format) {
        case 'month':
          element.textContent = dates.currentMonth;
          break;
        case 'year':
          element.textContent = dates.currentYear;
          break;
        case 'short-year':
          element.textContent = dates.currentShortYear;
          break;
        case 'month-year':
          element.textContent = dates.currentMonthYear;
          break;
        case 'full-date':
          element.textContent = dates.currentFullDate;
          break;
      }
    });

    // Custom replacements for specific text patterns
    const textReplacements = [
      {
        selector: 'h2, h3, h4, p, span',
        pattern: /MONTH YEAR/g,
        replacement: dates.currentMonthYear
      },
      {
        selector: 'h2, h3, h4, p, span',
        pattern: /CURRENT_YEAR/g,
        replacement: dates.currentYear
      },
      {
        selector: 'h2, h3, h4, p, span',
        pattern: /CURRENT_MONTH/g,
        replacement: dates.currentMonth
      }
    ];

    textReplacements.forEach(({ selector, pattern, replacement }) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        if (element.textContent.match(pattern)) {
          element.textContent = element.textContent.replace(pattern, replacement);
        }
      });
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateDates);
  } else {
    updateDates();
  }

  // Expose dates object globally for other scripts
  window.TradeDayDates = dates;

})();