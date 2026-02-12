// Scroll Animation Observer
document.addEventListener('DOMContentLoaded', () => {

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once visible to only animate once
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Target all elements with specific animation classes
    const animatedElements = document.querySelectorAll('.animate-fade-up, .hero-image-wrapper, .hero-text, .services-badge, .about-card, .work-card, .client-logo');

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Hide/Show Navigation on Scroll
    let lastScrollTop = 0;
    const navbar = document.querySelector('.site-header');
    
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});
