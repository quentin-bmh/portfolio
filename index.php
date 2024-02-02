<?php
session_start();
   if(isset($_POST['send'])){
        extract($_POST);
        if(isset($username) && $username!="" &&
        isset($email) && $email!= "" &&
        isset($message) && $message!= ""){
            //le mail peut être envoyé
            //$to représente le destinataire
            $to = "montoulieu.quentin@gmail.com";
            //$subject représente l'objet du mail:
            $subject = "vous avez reçu un message de la part de:";

            $message = "
                <p>Vous avez reçu un message de la part de: <strong>". $email . "</strong></p>
                <p><strong>Nom:</strong>". $username ."</p>
                <p><strong>Message:</strong>". $message ."</p>
            ";

            // Always set content-type when sending HTML email
            $headers = "MIME-Version: 1.0" . "\r\n";
            $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

            // More headers
            $headers .= 'From: <'.$email.'>' . "\r\n";

            //envoi du mail
            $send = mail($to,$subject,$message,$headers);
            if($send){
                $_SESSION['succes_message']= "message envoyé";
            }else{
                $info = "message non envoyé";
            }

        }else{
            $info = "veuillez remplir tous les champs!";
        }
    }

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Envoi d'email</title>
    <link rel="stylesheet" href="styles2.css">
</head>
<body>
    <?php
    //afficher le message d'erreur
        if(isset($info)){  ?>
            <p class="request_message" styles="color:red">
                <?=$info?>
            </p>
        <?php
        }
    ?>
    <?php
    //afficher le message de succes
        if(isset($_SESSION['succes_message'])){ ?>
            <p class="request_message" styles="color:green">
                <?=$_SESSION['succes_message']?>
            </p>
        <?php } ?>
    
    <form action="" method="post">
        <h2>Contact Us</h2>
        <label>Username</label>
        <input type="text" name="username">
        <label>Email</label>
        <input type="email" name="email">
        <label>Message</label>
        <textarea name="message" id="" cols="30" rows="10"></textarea>
        <button name="send">send</button>
        
    </form>
</body>
</html>