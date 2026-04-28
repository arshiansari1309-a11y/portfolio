// Theme Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;
const themeIcon = themeToggleBtn.querySelector('i');

// Check for saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
htmlEl.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = htmlEl.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  htmlEl.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
  if (theme === 'dark') {
    themeIcon.classList.remove('ph-moon');
    themeIcon.classList.add('ph-sun');
  } else {
    themeIcon.classList.remove('ph-sun');
    themeIcon.classList.add('ph-moon');
  }
}

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Scroll Reveal Animations
const sections = document.querySelectorAll('.section-hidden');

const observerOptions = {
  root: null,
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section-visible');
      entry.target.classList.remove('section-hidden');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

sections.forEach(section => {
  sectionObserver.observe(section);
});
