<?php
$title = $_POST['title'];
$tags = $_POST['tags'];
$image = $_POST['image'];
$content = $_POST['content'];
if (!empty($title) || !empty($tags) || !empty($content) || !empty($image) ) {
 $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbname = "comicsworld";
    //create connection
    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);
    if (mysqli_connect_error()) {
     die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
    } else {
		$SELECT = "SELECT Title From blog Where Title = ? Limit 1";
     $INSERT = "INSERT Into blog (Title, Tags, Image, Content) values(?, ?, ?, ?, ?, ?)";
     //Prepare statement
	  
     $stmt = $conn->prepare($SELECT);
     $stmt->bind_param("s", $title);
     $stmt->execute();
     $stmt->bind_result($title);
     $stmt->store_result();
     $rnum = $stmt->num_rows;
     if ($rnum==0) {
      $stmt->close();
      $stmt = $conn->prepare($INSERT);
      $stmt->bind_param("ssbs", $title, $tags, $image, $content);
      $stmt->execute();
      echo "Blog submitted sucessfully";
     } else {
      echo "Someone already submitted blog!";
     }
     $stmt->close();
     $conn->close();
    }
} else {
 echo "All field are required";
 die();
}
?>