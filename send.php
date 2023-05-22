<?php
// Файлы phpmailer
require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['username'];
$phone = $_POST['phone'];
$text = $_POST['text'];

if ($name) {

  // Формирование самого письма
  $title = "Заявка с сайта chikovanicosm.ru";
  $body = "
<b>Имя:</b> $name<br>
<b>Телефон:</b>$phone<br>
<b>Сообщение:</b> $text<br>
";


  // Настройки PHPMailer
  $mail = new PHPMailer\PHPMailer\PHPMailer();
  try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function ($str, $level) {
      $GLOBALS['status'][] = $str;
    };

    // Настройки вашей почты
    $mail->Host       = 'mail.hosting.reg.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'send@chikovanicosm.ru'; // Логин на почте
    $mail->Password   = 'nT8iS4tO3wpL8hB9'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('send@chikovanicosm.ru', 'chikovanicosm'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('mimihanna75@gmail.com');

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

    // Проверяем отравленность сообщения
    if ($mail->send()) {
      $result = "ok";
    } else {
      $result = "error";
    }
  } catch (Exception $e) {
    $result = "error";
  }

  // Отображение результата
  echo $result;
} else {
  echo 'error';
}
