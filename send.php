<?php
$fio = $_POST['fio'];
$email = $_POST['email'];
$textarea = $_POST['kosmo'];
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$fio = urldecode($fio);
$email = urldecode($email);
$fio = trim($fio);
$email = trim($email);

$fulltext = ' Имя: ' . $fio . ' Номер телефона: ' . $email . ' Текст формы: ' . $textarea;

if (mail("info@obninsk65.ru", "Заявка с сайта", $fulltext ,"From: info@obninsk65.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} 
?>