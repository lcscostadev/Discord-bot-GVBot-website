ScrollReveal({
    reset: true,
    distance: '20px',
    duration: 1000,
    delay: 400
});

ScrollReveal().reveal('.header-container, .hero', { delay: 300, origin: 'top' });
ScrollReveal().reveal('#footer, .slide-section, .icons', { delay: 300, origin: 'bottom' });