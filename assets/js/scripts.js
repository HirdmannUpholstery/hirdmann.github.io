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

});
