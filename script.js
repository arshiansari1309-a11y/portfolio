// Project Database for Dynamic Fullscreen Modal
const projectData = {
  "everglow-branding": {
    title: "EverGlow Jewels — Luxury Brand Identity & Digital Marketing Campaign",
    tag: "Branding",
    client: "EverGlow Jewels",
    tools: "Photoshop, Illustrator, Figma, Canva",
    role: "Lead Brand Identity Designer",
    results: "+40% Conversion Spike",
    metricNum: "+40%",
    metricLabel: "Conversion Increase",
    desc: "Designed a complete luxury jewellery branding system for a handcrafted jewellery startup — including logo suite, luxury brand identity design guidelines, social media creatives, and a Meta Ads campaign containing Instagram ads for jewellery that achieved a 40% spike in conversions and elevated perceived brand value.",
    images: ["eg_branding_mockup.png", "instagram_mockup.png", "packaging_mockup.png"],
    deliverables: ["Brand Identity Guidelines", "Logo Suite & Typography Styling", "Social Media Launch Creatives", "Premium Print Specifications"]
  },
  "instagram-campaign": {
    title: "Instagram Growth Campaign — Jewellery Brand Social Media Strategy",
    tag: "Social Media",
    client: "EverGlow Jewels",
    tools: "Illustrator, Canva, CapCut",
    role: "Digital Marketing Strategist",
    results: "+65% Engagement Rate",
    metricNum: "+65%",
    metricLabel: "Engagement Rate",
    desc: "As an Instagram marketing expert, I planned and executed an Instagram marketing campaign for a luxury handmade jewellery brand — including feed grid design, Reels content strategy, and advanced Meta audience targeting, resulting in 65% higher engagement and 5,000+ organic reach.",
    images: ["instagram_mockup.png", "eg_branding_mockup.png"],
    deliverables: ["Curated 15-Post Instagram Grid Layout", "Custom Reel Cover Templates", "Meta Ad Creative Set", "Targeting & Optimization Report"]
  },
  "luxury-packaging": {
    title: "Premium Unboxing Experience — Luxury Packaging Design",
    tag: "Packaging",
    client: "EverGlow Jewels",
    tools: "Illustrator, Figma, Print Tech",
    role: "Packaging Designer",
    results: "98% Positive Feedback",
    metricNum: "98%",
    metricLabel: "Positive Feedback",
    desc: "Designed a high-end product packaging system using ivory textured boxes, satin gold ribbons, and hot-stamp metallic foil typography — achieving 98% positive customer feedback and significantly enhancing brand unboxing perception.",
    images: ["packaging_mockup.png", "eg_branding_mockup.png"],
    deliverables: ["Matte Ivory Jewellery Gift Box Spec", "Gold Foil Logo Stamp Layout", "Editorial Thank-You & Care Card Design", "Eco-friendly Material Sourcing Outline"]
  },
  "typography-poster": {
    title: "Modern Typography Poster",
    tag: "Posters",
    client: "Creative Studio",
    tools: "Illustrator, InDesign",
    role: "Graphic Designer",
    results: "Premium Art Edition",
    metricNum: "Limited",
    metricLabel: "Print Run Edition",
    desc: "Created a minimalist typography poster series utilizing Poppins and Cormorant Garamond font styles. Built structural geometry layouts exploring black, white, and warm gold gradient accents, leaning against stucco textures. The posters serve as branding prints for design studios looking to communicate structured, minimal creative messages.",
    images: ["poster_mockup.png", "instagram_mockup.png"],
    deliverables: ["3 High-Resolution Typography Poster Formats", "Vector Outlines & Bleed Specs", "Matte Paper Print Selection Guide", "Custom Framed Mockup Renders"]
  },
  "seo-infographic": {
    title: "Beginner's SEO Checklist",
    tag: "Social Media",
    client: "Digital Marketing Lab",
    tools: "Figma, Illustrator",
    role: "Content Creator",
    results: "+4.5k Social Saves",
    metricNum: "+4.5k",
    metricLabel: "Saves & Shares",
    desc: "Designed and researched a step-by-step SEO infographic checklist. Focused on structured readability and simple information hierarchy to explain complex concepts (keyword research, on-page optimization, content quality, page speed) in a clear visual format. Distributed as a slide-carousel on LinkedIn and Instagram, driving high share rates and professional inquiries.",
    images: ["494378cb-29d3-4a42-ad8d-0f2aba293e79.png", "9d9f4e69-139a-4f79-ad3d-b1f0358bd7d0.png"],
    deliverables: ["6-Slide Carousel Visual Deck", "Vector Icons Package", "Downloadable Checklist PDF Layout", "Distribution & SEO Placement Advice"]
  },
  "creative-branding": {
    title: "Business Growth Carousel",
    tag: "Branding",
    client: "Local Agencies",
    tools: "Canva, Figma",
    role: "Social Media Designer",
    results: "Improved Brand Reach",
    metricNum: "+120%",
    metricLabel: "Reach Growth",
    desc: "Developed high-converting Facebook and Instagram ad creatives for service-oriented brands. Replaced flat graphics with editorial imagery, spacious margins, clear copy formatting, and gold highlights to command visual attention. Ran targeted ad sets testing layouts and call-to-actions, reducing cost-per-click and raising visual credibility.",
    images: ["9d9f4e69-139a-4f79-ad3d-b1f0358bd7d0.png", "e7fe43ed-8e2e-49b2-9795-3bf3cf800f8a.png"],
    deliverables: ["A/B Testing Ad Deck Templates", "Custom Typography Assets", "Brand Tone & Copy Guidelines", "Performance Report Checklist"]
  },
  "marketing-strategies": {
    title: "Marketing Strategy Poster",
    tag: "Posters",
    client: "Digital Lab Ltd.",
    tools: "Illustrator, InDesign",
    role: "Brand Architect",
    results: "Enhanced Team Focus",
    metricNum: "100%",
    metricLabel: "Team Alignment",
    desc: "Drafted and visualised a comprehensive marketing strategy poster mapping out pillars of performance marketing, organic search, and creative content creation. Designed layout structures with elegant beige tones and clean outlines to serve as office team references, boosting visual authority and clarity.",
    images: ["e7fe43ed-8e2e-49b2-9795-3bf3cf800f8a.png", "494378cb-29d3-4a42-ad8d-0f2aba293e79.png"],
    deliverables: ["Editorial Strategic Poster Grid", "Corporate Color Coordination Sheet", "Vector Presentation Slides Pack", "Team Alignment Strategy Guide"]
  }
};

// Theme Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

if (themeToggleBtn) {
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
      themeIcon.className = 'ph ph-sun';
    } else {
      themeIcon.className = 'ph ph-moon';
    }
  }
}

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      // Don't remove scrolled class on gallery.html page
      if (!window.location.pathname.includes('gallery.html')) {
        navbar.classList.remove('scrolled');
      }
    }
  });
}

// Scroll Reveal Animations
const sections = document.querySelectorAll('.section-hidden');
const observerOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
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

// Custom Cursor (Only on Desktop)
const cursorDot = document.querySelector('.cursor-dot');
const cursorTrail = document.querySelector('.cursor-trail');

if (cursorDot && cursorTrail && window.innerWidth > 768) {
  let mouseX = 0;
  let mouseY = 0;
  let trailX = 0;
  let trailY = 0;
  
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  });
  
  function animateTrail() {
    const distX = mouseX - trailX;
    const distY = mouseY - trailY;
    
    trailX += distX * 0.18;
    trailY += distY * 0.18;
    
    cursorTrail.style.left = `${trailX}px`;
    cursorTrail.style.top = `${trailY}px`;
    
    requestAnimationFrame(animateTrail);
  }
  animateTrail();
  
  // Cursor Hover Effects
  const interactiveElements = document.querySelectorAll('a, button, .masonry-item, .carousel-item');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
    });
  });
}

// Fullscreen Case Study Modal Logic
const modal = document.getElementById('fullscreen-project-modal');

if (modal) {
  const closeBtn = modal.querySelector('.fs-modal-close');
  
  // Function to open project details in modal
  function openProjectModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;
    
    // Populate simple text elements
    modal.querySelector('#modal-project-tag').textContent = data.tag;
    modal.querySelector('#modal-project-title').textContent = data.title;
    modal.querySelector('#modal-project-client').textContent = data.client;
    modal.querySelector('#modal-project-tools').textContent = data.tools;
    modal.querySelector('#modal-project-role').textContent = data.role;
    modal.querySelector('#modal-project-results').textContent = data.results;
    modal.querySelector('#modal-project-desc').textContent = data.desc;
    modal.querySelector('#modal-project-metric-num').textContent = data.metricNum;
    modal.querySelector('#modal-project-metric-label').textContent = data.metricLabel;
    
    // Populate deliverables list
    const deliverablesList = modal.querySelector('#modal-project-deliverables');
    deliverablesList.innerHTML = '';
    data.deliverables.forEach(d => {
      const li = document.createElement('li');
      li.innerHTML = `<i class="ph ph-check-circle"></i> ${d}`;
      deliverablesList.appendChild(li);
    });
    
    // Populate gallery images
    const galleryContainer = modal.querySelector('#modal-project-gallery');
    galleryContainer.innerHTML = '';
    data.images.forEach((imgSrc, index) => {
      const img = document.createElement('img');
      img.src = imgSrc;
      img.alt = `${data.title} Mockup ${index + 1}`;
      galleryContainer.appendChild(img);
    });
    
    // Show Modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock background scroll
  }
  
  // Close Modal
  function closeProjectModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  if (closeBtn) {
    closeBtn.addEventListener('click', closeProjectModal);
  }
  
  // Close on Escape key press
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeProjectModal();
    }
  });
  
  // Close modal when clicking outside content container
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });
  
  // Attach open listeners to homepage case studies and gallery grid cards
  document.addEventListener('click', (e) => {
    const triggerBtn = e.target.closest('.view-project-btn');
    const galleryCard = e.target.closest('.masonry-item');
    const carouselCard = e.target.closest('.carousel-item');
    
    if (triggerBtn) {
      const pId = triggerBtn.getAttribute('data-project');
      openProjectModal(pId);
    } else if (galleryCard && !galleryCard.closest('.carousel-container')) {
      const pId = galleryCard.getAttribute('data-project');
      if (pId) openProjectModal(pId);
    } else if (carouselCard) {
      const pId = carouselCard.getAttribute('data-project');
      if (pId) openProjectModal(pId);
    }
  });
}

// Interactive Before/After Split Screen Slider
const sliderContainer = document.getElementById('before-after-redesign');
if (sliderContainer) {
  const beforeDiv = sliderContainer.querySelector('.before-after-before');
  const handle = sliderContainer.querySelector('.slider-handle');
  let isDragging = false;
  
  function setSliderWidth(clientX) {
    const rect = sliderContainer.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    
    // Bounds clamping
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    
    beforeDiv.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
  }
  
  // Mouse events
  handle.addEventListener('mousedown', () => isDragging = true);
  window.addEventListener('mouseup', () => isDragging = false);
  
  sliderContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    setSliderWidth(e.clientX);
  });
  
  // Touch support (mobile compatibility)
  handle.addEventListener('touchstart', () => isDragging = true);
  window.addEventListener('touchend', () => isDragging = false);
  
  sliderContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    setSliderWidth(e.touches[0].clientX);
  });
  
  // Clicking anywhere on slider adjusts split width
  sliderContainer.addEventListener('click', (e) => {
    if (e.target !== handle && !handle.contains(e.target)) {
      setSliderWidth(e.clientX);
    }
  });
}

// Design Gallery Masonry Grid Category Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.masonry-item, .blog-card');

if (filterButtons.length > 0 && galleryItems.length > 0) {
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Toggle active classes
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      const filter = button.getAttribute('data-filter');
      
      galleryItems.forEach(item => {
        const categories = item.getAttribute('data-category');
        
        if (filter === 'all' || categories.split(' ').includes(filter)) {
          item.style.display = 'block';
          // Smooth fade-in
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          // Hide completely after fade transition completes
          setTimeout(() => {
            item.style.display = 'none';
          }, 350);
        }
      });
    });
  });
}

// Duplicate carousel track elements for seamless scrolling
const track = document.querySelector('.carousel-track');
if (track) {
  const items = Array.from(track.children);
  // Double copy to prevent space gap on ultra wide displays
  items.forEach(item => {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
  });
  items.forEach(item => {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
  });
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
      icon.className = 'ph ph-x';
    } else {
      icon.className = 'ph ph-list';
    }
  });

  // Close mobile menu when a link is clicked
  navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.className = 'ph ph-list';
      }
    });
  });
}
