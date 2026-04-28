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

// Unique Canvas Ribbon Cursor
const cursorDot = document.querySelector('.cursor-dot');
const canvas = document.getElementById('cursor-canvas');
const ctx = canvas.getContext('2d');

let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

window.addEventListener('resize', () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
});

let mouseX = width / 2;
let mouseY = height / 2;
const history = [];
const maxHistory = 30; // Length of the ribbon

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  
  // Instant dot movement
  cursorDot.style.left = `${mouseX}px`;
  cursorDot.style.top = `${mouseY}px`;
});

function animateCanvas() {
  ctx.clearRect(0, 0, width, height);
  
  history.push({ x: mouseX, y: mouseY });
  if (history.length > maxHistory) {
    history.shift();
  }
  
  if (history.length > 1) {
    ctx.beginPath();
    ctx.moveTo(history[0].x, history[0].y);
    
    for (let i = 1; i < history.length - 1; i++) {
      const xc = (history[i].x + history[i + 1].x) / 2;
      const yc = (history[i].y + history[i + 1].y) / 2;
      ctx.quadraticCurveTo(history[i].x, history[i].y, xc, yc);
    }
    
    ctx.lineTo(history[history.length - 1].x, history[history.length - 1].y);
    
    const rootStyles = getComputedStyle(document.documentElement);
    const accentColor = rootStyles.getPropertyValue('--accent-color').trim() || '#8b5cf6';
    
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.shadowBlur = 10;
    ctx.shadowColor = accentColor;
    ctx.stroke();
  }
  
  requestAnimationFrame(animateCanvas);
}
animateCanvas();

// Hover effect for interactive elements
const interactiveElements = document.querySelectorAll('a, button');
interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    document.body.classList.add('cursor-hover');
  });
  el.addEventListener('mouseleave', () => {
    document.body.classList.remove('cursor-hover');
  });
});
