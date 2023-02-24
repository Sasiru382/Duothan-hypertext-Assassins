// Get form elements
const pharmacyName = document.getElementById("pharmacy-name");
const pharmacyAddress = document.getElementById("pharmacy-address");
const pharmacyPhone = document.getElementById("pharmacy-phone");
const pharmacyEmail = document.getElementById("pharmacy-email");
const pharmacyWebsite = document.getElementById("pharmacy-website");
const pharmacyHours = document.getElementById("pharmacy-hours");
const pharmacyLicense = document.getElementById("pharmacy-license");
const ownerName = document.getElementById("owner-name");
const ownerAddress = document.getElementById("owner-address");
const ownerPhone = document.getElementById("owner-phone");
const ownerEmail = document.getElementById("owner-email");
const ownerNIC = document.getElementById("owner-nic");
const saveButton = document.getElementById("save-button");

// Define form validation patterns
const phonePattern = /^\d{10}$/;
const emailPattern = /^\S+@\S+\.\S+$/;
const nicPattern = /^\d{9}[vVxX]$/;

// Define error messages
const phoneError = "Please enter a valid phone number (10 digits)";
const emailError = "Please enter a valid email address";
const nicError = "Please enter a valid NIC number (9 digits followed by 'v', 'V', 'x', or 'X')";

// Define save function
function saveOwnerInfo() {
	// Check form validation
	if (!phonePattern.test(ownerPhone.value)) {
		alert(phoneError);
		return;
	}
	if (!emailPattern.test(ownerEmail.value)) {
		alert(emailError);
		return;
	}
	if (!nicPattern.test(ownerNIC.value)) {
		alert(nicError);
		return;
	}

	// Save owner information to database
	// You can add your own code here to save the data to a database
	alert("Owner information saved successfully!");
}

// Attach save function to save button
saveButton.addEventListener("click", saveOwnerInfo);
