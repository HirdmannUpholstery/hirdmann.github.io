document.addEventListener("DOMContentLoaded", function() {
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
