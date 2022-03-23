<?php
$servername = "localhost";
$username = "pragyo67_pragy19";
$password = "kiraWashere";
$dbname = "pragyo67_2019";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die(" <script> window.alert('We are down please try again later');
    				window.location.href='index.html';</script>");
} 
$name=$email=$contact="";
if(isset($_POST['name'])&&isset($_POST['email'])) {
$name =$_POST['name'];
$email = $_POST['email'];
$contact=$_POST['number'];
$collegeName=$_POST['collegeName'];
$city=$_POST['city'];
$event=$_POST['event'];
if ($_POST['test'] == 'value1'){
	$acc="yes";
}
else $acc="no";
	$select = mysqli_query($conn, "SELECT `email` FROM `pragyaa2019reg` WHERE `email` = '".$_POST['email']."'") or exit(mysqli_error($conn));
if(mysqli_num_rows($select)) {
   echo "<script> window.alert('You are already registered with this Email-id');
    			window.location.href='reg.html';</script>";
}
else if (!empty($name)&&!empty($email)&&!empty($contact)&&!empty($collegeName)&&!empty($city)) {


 $sql = "INSERT INTO  pragyaa2019reg (name, email, contact, collegeName, city,acc,event)
		VALUES ('$name', '$email', '$contact', '$collegeName', '$city','$acc','$event')";

		if ($conn->query($sql) === TRUE) {
		    
		    //mail($email,"subject","message","From: webmaster@example.com","parameters");
echo "<script> window.alert('You are succesfully registered');
    				window.location.href='index.html';</script>";
} else {
    echo "<script> window.alert('Some error occured please try again');
    			/window.location.href='reg.html';</script>";
}
 	}
	
}
$conn->close();
?>