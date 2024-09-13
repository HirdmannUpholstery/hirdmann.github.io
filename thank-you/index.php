<?php
// This will include the content of header.html and inject it here
include('../assets/inc/head.php');
include('../assets/inc/header.php');
?>


    <div class="hero">
        <h1>Upholstery & Bags</h1>
        <div class="swiper">
            <div class="swiper-wrapper">
                <!-- Image Slides -->
                <div class="swiper-slide"></div>
                <div class="swiper-slide"></div>
                <div class="swiper-slide"></div>
            </div>
        </div>
    </div>

    <section id="about" class="about">
        <h2>About Us</h2>
        <p>We create high-quality upholstery and bespoke bags tailored to your needs. Our craftsmanship speaks for itself with years of expertise in fabric, design, and quality finishes.</p>
    </section>

    <section id="products" class="products">
        <h2>Our Products</h2>
        <div class="product"><img src="" alt="Product 1"></div>
        <div class="product"><img src="" alt="Product 2"></div>
        <div class="product"><img src="" alt="Product 3"></div>
    </section>

    <section id="contact" class="contact">
        <div class="contact-wrapper">
            <form id="contactForm" action="process_form.php" method="POST">
                <label for="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" required>

                <label for="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="request">Request:</label>
                <textarea id="request" name="request" required></textarea>

                <!-- Honeypot field to catch bots -->
                <div style="display:none;">
                    <label for="company">Company:</label>
                    <input type="text" id="company" name="company">
                </div>

                <button type="submit">Send Request</button>
            </form>
            <div class="details-wrapper">
                <h2>Contact Us</h2>
                <p>Email: info@upholsterybags.com</p>
                <p>Phone: (555) 123-4567</p>
            </div>
        </div>
    </section>

<?php
// This will include the content of header.html and inject it here
include('../assets/inc/footer.php');
?>