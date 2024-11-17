// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select all links that start with # (internal links)
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Prevent default anchor behavior
            e.preventDefault();

            // Get the target element from the href attribute
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Get the header height for offset
                const headerHeight = document.querySelector('header').offsetHeight;

                // Calculate the final scroll position
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                // Smooth scroll to target
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});