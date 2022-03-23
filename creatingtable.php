<?php
$servername = "localhost:3306";
$username = "pragyo67_pragy19";
$password = "kiraWashere";
$dbname = "pragyo67_2019";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

// sql to create table
$sql = "CREATE TABLE pragyaa2019reg (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
name VARCHAR(30) NOT NULL,
email VARCHAR(30) NOT NULL,
collegeName VARCHAR(30) NOT NULL,
contact VARCHAR(30) NOT NULL,
city VARCHAR(30) NOT NULL,
acc VARCHAR(30) NOT NULL,
event VARCHAR(50),
reg_date TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
    echo "Table MyGuests created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>