<?php
header('Content-Type: text/html; charset=utf-8');

$headers =  'MIME-Version: 1.0' . "\r\n";
$headers .= 'From: my site <info@address.com>' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$result = mail('francescolucaniacom@gmail.com, prince-conte@outlook.com', 'Сообщение с сайта', "name: ".$_POST['name']." <br>". "company: " . $_POST['company'] . "<br>" . "email: " . $_POST['email'] . "<br>" . $_POST['message'], $headers);
if (!$result) {
       echo '2';
}


echo '1';


?>
