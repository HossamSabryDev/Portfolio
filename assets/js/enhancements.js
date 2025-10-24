/* ========================================
   NEXT-LEVEL PORTFOLIO ENHANCEMENTS
   Advanced JavaScript Features
   ======================================== */

// ========== LIGHTBOX IMAGE GALLERY ==========
class Lightbox {
  constructor() {
    this.images = [];
    this.currentIndex = 0;
    this.init();
  }

  init() {
    // Create lightbox HTML
    const lightboxHTML = `
      <div id="lightbox" class="lightbox">
        <div class="lightbox-content">
          <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
          <button class="lightbox-nav lightbox-prev" aria-label="Previous image">&#10094;</button>
          <img class="lightbox-image" src="" alt="Lightbox image">
          <button class="lightbox-nav lightbox-next" aria-label="Next image">&#10095;</button>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);

    this.lightboxEl = document.getElementById('lightbox');
    this.imageEl = this.lightboxEl.querySelector('.lightbox-image');
    
    // Event listeners
    this.lightboxEl.querySelector('.lightbox-close').addEventListener('click', () => this.close());
    this.lightboxEl.querySelector('.lightbox-prev').addEventListener('click', () => this.prev());
    this.lightboxEl.querySelector('.lightbox-next').addEventListener('click', () => this.next());
    this.lightboxEl.addEventListener('click', (e) => {
      if (e.target === this.lightboxEl) this.close();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!this.lightboxEl.classList.contains('active')) return;
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });
  }

  open(images, index = 0) {
    this.images = images;
    this.currentIndex = index;
    this.show();
  }

  show() {
    this.imageEl.src = this.images[this.currentIndex];
    this.lightboxEl.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.lightboxEl.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.show();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.show();
  }
}

// Initialize lightbox
const lightbox = new Lightbox();

// ========== CONTACT FORM VALIDATION & SUBMISSION ==========
class ContactForm {
  constructor(formId) {
    this.form = document.getElementById(formId);
    if (!this.form) return;
    
    this.init();
  }

  init() {
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    
    // Real-time validation
    this.form.querySelectorAll('input, textarea').forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('error')) {
          this.validateField(input);
        }
      });
    });
  }

  validateField(field) {
    const formGroup = field.parentElement;
    const errorEl = formGroup.querySelector('.form-error');
    let isValid = true;
    let errorMessage = '';

    // Required validation
    if (field.hasAttribute('required') && !field.value.trim()) {
      isValid = false;
      errorMessage = 'This field is required';
    }

    // Email validation
    if (field.type === 'email' && field.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(field.value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address';
      }
    }

    // Update UI
    if (isValid) {
      formGroup.classList.remove('error');
    } else {
      formGroup.classList.add('error');
      if (errorEl) errorEl.textContent = errorMessage;
    }

    return isValid;
  }

  validateForm() {
    let isValid = true;
    this.form.querySelectorAll('input, textarea').forEach(input => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });
    return isValid;
  }

  async handleSubmit(e) {
    e.preventDefault();

    if (!this.validateForm()) {
      showToast('Please fix the errors in the form', 'error');
      return;
    }

    const submitBtn = this.form.querySelector('.submit-btn');
    const successMsg = this.form.querySelector('.form-success');
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    // Get form data
    const formData = {
      name: this.form.querySelector('[name="name"]').value,
      email: this.form.querySelector('[name="email"]').value,
      subject: this.form.querySelector('[name="subject"]')?.value || 'Contact Form Submission',
      message: this.form.querySelector('[name="message"]').value
    };

    try {
      // Simulate API call (replace with actual EmailJS or backend API)
      await this.sendEmail(formData);
      
      // Show success message
      successMsg.classList.add('show');
      showToast('Message sent successfully!', 'success');
      this.form.reset();
      
      // Track with GA
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
          event_category: 'Contact',
          event_label: 'Contact Form Submission'
        });
      }

      setTimeout(() => {
        successMsg.classList.remove('show');
      }, 5000);
    } catch (error) {
      showToast('Failed to send message. Please try again.', 'error');
      console.error('Form submission error:', error);
    } finally {
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
    }
  }

  async sendEmail(data) {
    // Simulate API delay
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Email data:', data);
        resolve();
      }, 1500);
    });
    
    /* 
    // EmailJS Integration Example:
    return emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data)
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        return response;
      })
      .catch(error => {
        console.error('FAILED...', error);
        throw error;
      });
    */
  }
}

// ========== TOAST NOTIFICATIONS ==========
function showToast(message, type = 'success') {
  // Remove existing toast
  const existingToast = document.querySelector('.toast');
  if (existingToast) {
    existingToast.remove();
  }

  // Create new toast
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  // Show toast
  setTimeout(() => toast.classList.add('show'), 100);

  // Hide and remove toast
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ========== SCROLL REVEAL ANIMATIONS ==========
class ScrollReveal {
  constructor() {
    this.elements = document.querySelectorAll('.scroll-reveal');
    this.init();
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    this.elements.forEach(el => observer.observe(el));
  }
}

// ========== MAGNETIC BUTTON EFFECT ==========
function addMagneticEffect(elements) {
  elements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const moveX = x * 0.3;
      const moveY = y * 0.3;
      
      el.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0, 0)';
    });
  });
}

// ========== SKILLS CHART VISUALIZATION ==========
function initSkillsChart() {
  const chartContainer = document.getElementById('skillsChart');
  if (!chartContainer) return;

  // Check if Chart.js is loaded
  if (typeof Chart === 'undefined') {
    console.warn('Chart.js not loaded. Skipping chart initialization.');
    return;
  }

  const ctx = chartContainer.getContext('2d');
  
  const skillsData = {
    labels: ['Revit API', 'Dynamo', 'C#', 'Python', 'Navisworks', 'AutoCAD'],
    datasets: [{
      label: 'Proficiency Level',
      data: [90, 85, 80, 75, 70, 85],
      backgroundColor: [
        'rgba(255, 107, 107, 0.2)',
        'rgba(78, 205, 196, 0.2)',
        'rgba(255, 230, 109, 0.2)',
        'rgba(168, 230, 207, 0.2)',
        'rgba(255, 167, 38, 0.2)',
        'rgba(156, 39, 176, 0.2)'
      ],
      borderColor: [
        'rgba(255, 107, 107, 1)',
        'rgba(78, 205, 196, 1)',
        'rgba(255, 230, 109, 1)',
        'rgba(168, 230, 207, 1)',
        'rgba(255, 167, 38, 1)',
        'rgba(156, 39, 176, 1)'
      ],
      borderWidth: 2
    }]
  };

  new Chart(ctx, {
    type: 'radar',
    data: skillsData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 20,
            color: getComputedStyle(document.documentElement)
              .getPropertyValue('--text-secondary')
          },
          grid: {
            color: getComputedStyle(document.documentElement)
              .getPropertyValue('--border')
          },
          pointLabels: {
            color: getComputedStyle(document.documentElement)
              .getPropertyValue('--text-primary'),
            font: {
              size: 12,
              weight: '500'
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

// ========== LAZY LOADING IMAGES ==========
function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

// ========== TYPING EFFECT ==========
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.textContent = '';
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// ========== SMOOTH SCROLL WITH OFFSET ==========
function smoothScrollTo(target, offset = 80) {
  const element = document.querySelector(target);
  if (!element) return;
  
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

// ========== COPY TO CLIPBOARD ==========
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast('Copied to clipboard!', 'success');
    return true;
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
      document.execCommand('copy');
      showToast('Copied to clipboard!', 'success');
      return true;
    } catch (err) {
      showToast('Failed to copy', 'error');
      return false;
    } finally {
      document.body.removeChild(textArea);
    }
  }
}

// ========== ICON ANIMATION ENHANCEMENTS ==========
function initIconAnimations() {
  // Add 3D tilt effect to skill cards
  const skillCards = document.querySelectorAll('.skill');
  
  skillCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.03)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
  
  // Add floating animation to icons on hover
  const skillIcons = document.querySelectorAll('.skill-icon');
  skillIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      icon.style.animation = 'iconFloat 0.6s ease-in-out';
    });
    
    icon.addEventListener('animationend', () => {
      icon.style.animation = '';
    });
  });
}

// Add icon float animation
const iconFloatStyle = document.createElement('style');
iconFloatStyle.textContent = `
  @keyframes iconFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`;
document.head.appendChild(iconFloatStyle);

// ========== PARALLAX SCROLL EFFECT ==========
function initParallaxEffect() {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.skill-icon, .cert-icon, .tech-item-icon');
    
    parallaxElements.forEach((el, index) => {
      const speed = 0.05 + (index % 3) * 0.02;
      const yPos = -(scrolled * speed);
      el.style.transform = `translateY(${yPos}px)`;
    });
  });
}

// ========== GRADIENT ANIMATION FOR CARDS ==========
function initGradientAnimations() {
  const cards = document.querySelectorAll('.skill, .project, .cert-card, .tech-item');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
  });
}

// ========== INITIALIZE ALL ENHANCEMENTS ==========
document.addEventListener('DOMContentLoaded', () => {
  // Initialize scroll reveal
  new ScrollReveal();
  
  // Initialize contact form
  new ContactForm('contactForm');
  
  // Initialize icon animations
  initIconAnimations();
  
  // Initialize gradient animations
  initGradientAnimations();
  
  // Add magnetic effect to buttons
  const magneticButtons = document.querySelectorAll('.magnetic-btn, .btn, .filter-btn');
  if (magneticButtons.length > 0) {
    addMagneticEffect(magneticButtons);
  }
  
  // Initialize lazy loading
  initLazyLoading();
  
  // Initialize skills chart (if Chart.js is loaded)
  setTimeout(() => {
    initSkillsChart();
  }, 500);
  
  // Add ripple effect to buttons
  document.querySelectorAll('.ripple, .btn, .filter-btn').forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.background = 'rgba(255, 255, 255, 0.5)';
      ripple.style.pointerEvents = 'none';
      ripple.style.animation = 'rippleEffect 0.6s ease-out';
      ripple.classList.add('ripple-effect');
      
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });
  
  // Add smooth hover effects to all interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .skill, .project, .cert-card, .tech-item');
  interactiveElements.forEach(el => {
    el.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
  });
  
  console.log('✨ Portfolio enhancements loaded successfully!');
  console.log('🎨 Modern icon system activated!');
  console.log('🚀 All animations initialized!');
});

// Add ripple effect animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
  @keyframes rippleEffect {
    from {
      transform: scale(0);
      opacity: 1;
    }
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(rippleStyle);

// ========== PERFORMANCE MONITORING ==========
window.addEventListener('load', () => {
  if ('performance' in window) {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    
    console.log(`⚡ Page load time: ${pageLoadTime}ms`);
    
    // Track with GA if available
    if (typeof gtag !== 'undefined') {
      gtag('event', 'timing_complete', {
        name: 'page_load',
        value: pageLoadTime,
        event_category: 'Performance'
      });
    }
  }
});

// Export functions for global use
window.portfolioEnhancements = {
  lightbox,
  showToast,
  copyToClipboard,
  smoothScrollTo,
  typeWriter
};
