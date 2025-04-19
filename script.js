document.addEventListener('DOMContentLoaded', function() {
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

    // Close mobile menu when clicking on navigation links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });

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
    
    // Add scroll effect to header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Skip if it's just "#"
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Offset for the fixed header on mobile
                const headerHeight = header.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});