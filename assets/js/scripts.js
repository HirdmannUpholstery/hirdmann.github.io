document.addEventListener("DOMContentLoaded", function() {
    // Form validation and spam prevention
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const email = document.getElementById('email').value;
            const honeypot = document.getElementById('company').value;

            // Check honeypot
            if (honeypot) {
                event.preventDefault(); // Prevent form submission if honeypot is filled
                alert("Spam detected!");
            }

            // Basic email format validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                event.preventDefault();
                alert("Please enter a valid email address.");
            }
        });
    } else {
        console.error("Contact form not found");
    }

    // Hamburger navigation logic
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');
    const closeBtn = document.getElementById('close-btn');

    if (hamburger && mobileNav && closeBtn) {
        // Open the mobile navigation when hamburger is clicked
        hamburger.addEventListener('click', function() {
            mobileNav.classList.add('active');
            hamburger.classList.add('hidden');
        });

        // Close the mobile navigation when the close button is clicked
        closeBtn.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            hamburger.classList.remove('hidden');
        });
    } else {
        console.error("Hamburger navigation elements not found");
    }

        // Function to load content from a file and inject it into a specific element
        function loadContent(url, elementId) {
            fetch(url)
                .then(response => response.text())
                .then(data => {
                    document.getElementById(elementId).innerHTML = data;
                })
                .catch(error => console.error('Error loading file:', error));
        }

        // Load the head, header, and footer content
        loadContent('assets/inc/head.php', 'head-placeholder');
        loadContent('assets/inc/header.php', 'header-placeholder');
        loadContent('assets/inc/footer.php', 'footer-placeholder');

});
