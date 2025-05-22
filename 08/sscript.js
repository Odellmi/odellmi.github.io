// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            // Optional: Change button icon based on menu state
            if (mobileMenu.classList.contains('hidden')) {
                menuButton.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>';
            } else {
                menuButton.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>';
            }
        });
    }

    // Set current year in footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Contact form submission handling (basic example, no actual sending)
    const contactForm = document.getElementById('contactForm');
    const formSubmissionMessage = document.getElementById('form-submission-message');

    if (contactForm && formSubmissionMessage) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission

            // Basic validation (can be more sophisticated)
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                formSubmissionMessage.textContent = 'Please fill in all required fields.';
                formSubmissionMessage.className = 'mt-4 text-center text-red-400';
                return;
            }
            
            // Simulate form submission
            formSubmissionMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            formSubmissionMessage.className = 'mt-4 text-center text-green-400';
            contactForm.reset(); // Clear the form

            // Hide the message after a few seconds
            setTimeout(() => {
                formSubmissionMessage.textContent = '';
                formSubmissionMessage.className = 'mt-4 text-center';
            }, 5000);
        });
    }

    // Add fade-in animation to main content sections for a smoother appearance
    // This is a simple way to apply it; you might want more targeted application
    const mainSections = document.querySelectorAll('main section');
    mainSections.forEach((section, index) => {
        // Apply a slight delay to stagger the animation if desired
        // section.style.animationDelay = `${index * 0.1}s`;
        section.classList.add('fade-in');
    });

    // Favicon (if you want to set it dynamically or have a default)
    // This is usually set in HTML, but as an example:
    let favicon = document.querySelector("link[rel~='icon']");
    if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(favicon);
    }
    // You would set a default favicon.ico in your project root.
    // For demonstration, using a placeholder data URI (very simple one)
    // Replace this with a link to your actual favicon.ico file in the HTML for best practice.
    // favicon.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🪙</text></svg>';
    // Better to just have <link rel="icon" href="favicon.ico" type="image/x-icon"> in your HTML head.
    // Ensure you have a favicon.ico file in the same directory as your HTML files.
    // You can generate one from various online tools.
});

// You can add more JavaScript functionalities here as your site grows.
// For example:
// - Interactive charts for crypto prices (using a library like Chart.js)
// - Live data fetching from crypto APIs
// - More complex form validations
// - Animations on scroll
