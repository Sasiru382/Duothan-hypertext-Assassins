document.getElementById("full").style.display = "none";
function view() {
    let pharmacy_name = document.forms["query-form"]["name"].value;
    if (pharmacy_name == "") {
        alert("pharmacy name must be filled out");
        return false;
    }
    //validate the e-mail whether it is correct or wrong
    let email = document.forms["query-form"]["email"].value;
    if (email == "") {
        alert("E-mail must be filled out");
        return false;
    } else if (email.includes("@") == false) {
        alert("Enter valid email");
        return false;
    } else if (email.includes(".") == false) {
        alert("Enter valid email");
        return false;
    }
    let address = document.forms["query-form"]["address"].value;
    if (address == "") {
        alert("address must be filled out");
        return false;
    }
    let phone = document.forms["query-form"]["phone"].value;
    if (phone == "") {
        alert("address must be filled out");
        return false;
    }
    let licence = document.forms["query-form"]["licence"].value;
    if (licence == "") {
        alert("licence number must be filled out");
        return false;
    }
    let password = document.forms["query-form"]["password"].value;
    if (password == "") {
        alert("password must be filled out");
        return false;
    }
    let confirm_password = document.forms["query-form"]["confirm-password"].value;
    if (confirm_password == password) {
        alert("this must be same as above password");
        return false;
    }

    //if all are fill display the hidden one
    if (pharmacy_name != "" && email != "" && address != "" && phone != "" && licence != "" && password != "" && confirm_password != "") {
        document.getElementById("full").style.display = "block";
        document.getElementById("name").innerHTML = pharmacy_name;
        document.getElementById("email").innerHTML = email;
        document.getElementById("address").innerHTML = address;
        document.getElementById("phone").innerHTML = phone;
        document.getElementById("licence").innerHTML = licence;
        document.getElementById("password").innerHTML = password;
        document.getElementById("confirm-password").innerHTML = confirm_password;
    }
}
//sumbit the query to form action mail and go back to first view of the page
function submit() {
    document.getElementById("query-form").submit();
    let myArray = [pharmacy_name, email, address, phone, licence, password, confirm_password];
    $.ajax({
        type: "POST",
        url: "insert.php",
        data: { data: myArray }
    }).done(function (msg) {
        alert("Data Saved: " + msg);
    });
    alert("Successfully submitted!");
    document.getElementById("full").style.display = "none";
    document.forms["query-form"]["name"].innerHTML = "";
    document.forms["query-form"]["email"].innerHTML = "";
    document.forms["query-form"]["address"].innerHTML = "";
    document.forms["query-form"]["phone"].innerHTML = "";
    document.forms["query-form"]["licence"].innerHTML = "";
    document.forms["query-form"]["password"].innerHTML = "";
    document.forms["query-form"]["confirm-password"].innerHTML = "";


}
//back to the normal view
function edit() {
    document.getElementById("full").style.display = "none";

}