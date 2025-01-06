<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/Exception.php';

$data_file = 'users.json';
$users = file_exists($data_file) ? json_decode(file_get_contents($data_file), true) : [];

if ($_POST['action'] == 'signup') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    if (isset($users[$email])) {
        echo "User already exists. Please sign in.";
        exit;
    }

    $verification_code = rand(100000, 999999);
    $users[$email] = [
        'password' => password_hash($password, PASSWORD_DEFAULT),
        'verified' => false,
        'code' => $verification_code
    ];

    file_put_contents($data_file, json_encode($users));

    $mail = new PHPMailer();
    $mail->setFrom('your-email@example.com', 'Your Website');
    $mail->addAddress($email);
    $mail->Subject = 'Your Verification Code';
    $mail->Body = "Your verification code is: $verification_code";

    if ($mail->send()) {
        header('Location: verify.html');
    } else {
        echo "Error sending verification email.";
    }
}
?>
