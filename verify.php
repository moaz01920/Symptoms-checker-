<?php
$data_file = 'users.json';
$users = json_decode(file_get_contents($data_file), true);
$code = $_POST['code'];

foreach ($users as $email => $user) {
    if ($user['code'] == $code && !$user['verified']) {
        $users[$email]['verified'] = true;
        file_put_contents($data_file, json_encode($users));
        echo "Email verified successfully! You can now sign in.";
        exit;
    }
}

echo "Invalid or expired verification code.";
?>
