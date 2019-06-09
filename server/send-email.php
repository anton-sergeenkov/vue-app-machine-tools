<?php
	$content = file_get_contents("php://input");
	$decoded = json_decode($content, true);
	
	$message = $decoded[quiz];
    // $to = 'warnes23@yandex.ru';
    $to = 'ipdats@yandex.ru';
    $subject = 'Письмо с сайта';
    
    $email = mail($to, $subject, $message);
    if ($email) {
        echo true;
    } else {
        echo false;
    }
?>
