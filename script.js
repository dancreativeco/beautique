// Mobile menu elements
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

// Toggle mobile menu
const toggleMobileMenu = () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
    
    // Toggle aria-expanded for accessibility
    const isExpanded = navLinks.classList.contains('active');
    mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
};

// Add click event listener to mobile menu button
mobileMenuBtn.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const isClickInsideNav = navLinks.contains(e.target);
    const isClickOnButton = mobileMenuBtn.contains(e.target);
    
    if (!isClickInsideNav && !isClickOnButton && navLinks.classList.contains('active')) {
        toggleMobileMenu();
    }
});

// Close mobile menu when window is resized to desktop size
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
        toggleMobileMenu();
    }
});
