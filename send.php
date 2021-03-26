<?php
$fio = $_POST['fio'];
$email = $_POST['email'];
$text = $_POST['text'];
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$text = htmlspecialchars($text);
$fio = urldecode($fio);
$email = urldecode($email);
$text = urldecode($text);
$fio = trim($fio);
$email = trim($email);
$text = trim($text);
if (mail("zzzurking555@mail.ru", "Заявка с сайта ОбнинскГородаПервых", "ФИО:".$fio.". E-mail: ".$email ,"From: romamurunov@mail.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>