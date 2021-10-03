<?php 
    if(isset($_POST['enviar'])){
        if (!empty($_POST['name']) && !empty($_POST['subject']) && !empty($_POST['email']) && !empty($_POST['msg'])){
            $name= $_POST['name'];
            $subject= $_POST['subject'];
            $mail= $_POST['mail'];
            $msg= $_POST['msg'];
            $destinatario = 'gllanos.dev@gmail.com';
            $header = "Enviado desde la página de Grover.dev";
            $mensajeCompleto = $msg . "\nAtentamente: " . $name;

            mail($destinatario, $subject, $mensajeCompleto, $header);
            echo "<h4>Email enviado exitosamente</h4>";
        }
    }
?>