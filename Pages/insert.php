// Handle form submission
if (isset($_POST['name']) && isset($_POST['address']) && isset($_POST['phone'])) {
  // Retrieve form data
  $name = $_POST['name'];
  $address = $_POST['address'];
  $phone = $_POST['phone'];

  // Insert data into database
  $servername = "localhost";
  $username = "username";
  $password = "password";
  $dbname = "myDB";

  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  // Prepare and bind SQL statement
  $stmt = $conn->prepare("INSERT INTO pharmacy_info (name, address, phone) VALUES (?, ?, ?)");
  $stmt->bind_param("sss", $name, $address, $phone);

  // Execute SQL statement
  if ($stmt->execute() === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

  // Close connection
  $stmt->close();
  $conn->close();
}
