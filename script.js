
// DOM Elements
const header = document.querySelector('.header');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const yearEl = document.getElementById('current-year');
const videoCards = document.querySelectorAll('.video-card');
const articleCards = document.querySelectorAll('.article-card');

// Set current year in footer
yearEl.textContent = new Date().getFullYear();

// Header scroll effect
function handleScroll() {
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleScroll);

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
  const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
  
  if (mobileMenu.classList.contains('open')) {
    mobileMenu.classList.remove('open');
    menuIcon.textContent = '≡';
  } else {
    mobileMenu.classList.add('open');
    menuIcon.textContent = '×';
  }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    mobileMenuBtn.querySelector('.menu-icon').textContent = '≡';
  });
});

// Scroll animations
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
});

// Observe cards for animation
function setupCardAnimations() {
  const allCards = [...videoCards, ...articleCards];
  
  allCards.forEach((card, index) => {
    // Add staggered delay
    card.style.animationDelay = `${index * 150}ms`;
    observer.observe(card);
  });
}

// Setup animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  setupCardAnimations();
  
  // Fake video play button functionality
  document.querySelectorAll('.play-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Video playback would start here in a real implementation');
    });
  });
});
