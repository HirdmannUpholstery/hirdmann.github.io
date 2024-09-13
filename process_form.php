<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Spam prevention using honeypot field
    if (!empty($_POST['company'])) {
        // Honeypot field is filled; likely a bot, so reject the submission
        die("Spam detected.");
    }

    // Sanitize user inputs
    $firstName = htmlspecialchars(trim($_POST['firstName']));
    $lastName = htmlspecialchars(trim($_POST['lastName']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $request = htmlspecialchars(trim($_POST['request']));

    // Validate email address
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email address.");
    }

    // Set email recipient
    $to = "jackson.c.parker@gmail.com";  // Change this to the recipient's email address
    $subject = "New Contact Request";
    $message = "First Name: $firstName\nLast Name: $lastName\nEmail: $email\nRequest: $request";
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        // Redirect to thank you page after successful submission
        header("Location: /thank-you/");
        exit();
    } else {
        echo "Sorry, there was an error sending your message.";
    }
} else {
    die("Invalid request method.");
}
?>
