<?php 

// Chequear reCaptcha

if(isset($_POST['g-recaptcha-response'])){
    $captcha=$_POST['g-recaptcha-response'];
  }
  if(!$captcha){
    echo '<h2>Por favor completar el reCaptcha</h2>';
    exit;
  }
  $secretKey = "6LcIfKQaAAAAADeY_6mgxKGy96SkUNHCsfr1CZ3a";
  $ip = $_SERVER['REMOTE_ADDR'];
  // post al servidor
  $url = 'https://www.google.com/recaptcha/api/siteverify?secret=' . urlencode($secretKey) .  '&response=' . urlencode($captcha);
  $response = file_get_contents($url);
  $responseKeys = json_decode($response,true);
  // devolver JSON si esta todo ok
  if($responseKeys["success"]) {
          echo '<h2>Mensaje Enviado</h2>';
  } else {
          echo '<h2>You are spammer ! Get the @$%K out</h2>';
  }

// Llamado a los campos de formulario
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

// Datos para el correo
$destinatario = "info@klickmd.com";
$asunto = "Contacto desde la web :-)";

$carta = "Nombre: $nombre \n";
$carta .= "Telefono: $telefono \n";
$carta .= "Mail: $email \n";
$carta .= "Mensaje: $mensaje";


// Enviando el mensaje
mail($destinatario, $asunto, $carta);
header('Location:../../mensaje.html');
?>