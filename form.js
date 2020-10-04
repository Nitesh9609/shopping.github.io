<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<div class="topnav" id="myTopnav">
  <a href="index.html" >Home</a>
  <a href="log.html">Login</a>
  <a href="contact.html">Contact Us</a>
  <a href="aboutus.html">About</a>
  <a href="register.html" class="current">Signup</a>

</div>
<style>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}
.topnav a{
  text-decoration:none;
  color:white;
  padding:20px;
  background-color: black;
}

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
</head>
<body>

<h1>Contact Form</h1>

<div class="container">
  <form action="/action_page.php">
    <label for="fname">First Name</label><br>
    <input type="name" id="fname" name="firstname" placeholder="Your name..">
<br>
<br>
    <label for="lname">Email</label><br>
    
    <input type="gmail" id="lname" name="Email" placeholder="Your email address..">
    <br>
<br>
    <label for="mobile">Mobile</label><br>
    
    
    <input type="num" id="number" name="num" placeholder="Your Mobile number..">
    <br>

    <br>

    <label for="subject">Query</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

    <input type="submit" value="Submit">
  </form>
</div>

</body>
</html>
