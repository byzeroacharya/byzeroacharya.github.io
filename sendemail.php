<?php
	header('Content-type: application/json');
	$status = array(
		'type'=>'success',
		'message'=>'Thank you for contact us. As early as possible  we will contact you '
	);
$to = 'ahmedtamseer3@gmail.com';
$subject = @trim(stripslashes($_POST['subject']));
$headers = "From: webmaster@example.com" . "\r\n" .
"BCC: ahmedtamseer3@egmail.com";
    $name = @trim(stripslashes($_POST['name']));
    $email = @trim(stripslashes($_POST['email']));
    $message = @trim(stripslashes($_POST['message']));
$body = 'Name: ' . $name . "\n\n" . 'Email: ' . $email . "\n\n" . 'Subject: ' . $subject . "\n\n" . 'Message: ' . $message;
mail($to,$subject,$body,$headers);

    echo json_encode($status);
    die;
?> 
  <!--   $subject = @trim(stripslashes($_POST['subject']));

    $email_from = $email;
    $email_to = 'ahmedtamseer3@gmail.com';//replace with your email zonasa2016@gmail.com

    $body = 'Name: ' . $name . "\n\n" . 'Email: ' . $email . "\n\n" . 'Subject: ' . $subject . "\n\n" . 'Message: ' . $message;

    $success = @mail($email_to, $subject, $body, 'From: <'.$email_from.'>');

    ?> -->