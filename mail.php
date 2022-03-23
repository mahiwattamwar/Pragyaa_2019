<?PHP
// Edit this path if PHPMailer is in a different location.
  
  date_default_timezone_set('Etc/UTC');

// Edit this path if PHPMailer is in a different location.
require 'PHPMailer/PHPMailerAutoload.php';
 
  $mail = new PHPMailer;
$mail->isSMTP();
  $mail->Host = 'smtp.gmail.com'; // Which SMTP server to use.
$mail->Port = 587; // Which port to use, 587 is the default port for TLS security.
$mail->SMTPSecure = 'tls'; // Which security method to use. TLS is most secure.
$mail->SMTPAuth = true; // Whether you need to login. This is almost always required.
$mail->Username = "agarwalaman020@gmail.com"; // Your Gmail address.
$mail->Password = "#amnag@sggs"; // Your Gmail login password or App Specific Password.'
  $mail->setFrom('tournamentpub', 'PUBG MOBILE'); // Set the sender of the message.
 // The subject of the message.
  $mail->addAddress("2017bcs032@sggs.ac.in", "AMan"); // Set the recipient of the message.
$mail->Subject = 'succesfully registered';
  $mail->Body = "Hello! Thank you for registering with us stay tuned for further updates .
We will send you room id and password in this mail before match. 
  
With regards team tournamentpub. 
  
you will also get update on our  instagram page
https://bit.ly/2DdrChn";

if ($mail->send())
{
    echo "Message accepted";
}
else
{
    echo "Error: Message not accepted";
}
?>