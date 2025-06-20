<?php
// Set the recipient email address
$to = "sumedhzodape143@gmail.com";

// Collect POST data and sanitize
$name = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name'])) : '';
$email = isset($_POST['email']) ? htmlspecialchars(trim($_POST['email'])) : '';
$mobile = isset($_POST['mobile']) ? htmlspecialchars(trim($_POST['mobile'])) : '';
$message = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message'])) : '';

// Validate required fields
if (!$name || !$email || !$mobile || !$message) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "All fields are required."]);
    exit;
}

// Email subject and body
$subject = "New Contact Form Submission from Kelapure Website";
$body = "<h2>Contact Form Submission</h2>"
      . "<p><strong>Name:</strong> {$name}</p>"
      . "<p><strong>Email:</strong> {$email}</p>"
      . "<p><strong>Mobile:</strong> {$mobile}</p>"
      . "<p><strong>Message:</strong><br>" . nl2br($message) . "</p>";

// Email headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: Kelapure Website <no-reply@" . $_SERVER['SERVER_NAME'] . ">\r\n";
$headers .= "Reply-To: {$email}\r\n";

// Send the email
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["success" => true]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => "Failed to send email."]);
}
?>
