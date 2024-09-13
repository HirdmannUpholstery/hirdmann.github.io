document.getElementById('contactForm').addEventListener('submit', function(event) {
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

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');
    const closeBtn = document.getElementById('close-btn');

    // Open the mobile navigation when hamburger is clicked
    hamburger.addEventListener('click', function() {
        mobileNav.classList.add('active');
    });

    // Close the mobile navigation when the close button is clicked
    closeBtn.addEventListener('click', function() {
        mobileNav.classList.remove('active');
    });
});