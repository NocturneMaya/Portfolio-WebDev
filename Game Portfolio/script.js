// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('mobileToggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });

    // Close navbar when a link is clicked
    const navItems = navLinks.querySelectorAll('li a');
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        navLinks.classList.remove('active');
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        const target = document.querySelector(href);
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
