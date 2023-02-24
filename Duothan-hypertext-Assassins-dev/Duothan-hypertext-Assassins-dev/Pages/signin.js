document.getElementById("full").style.display = "none";
function view() {
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
    let password = document.forms["query-form"]["password"].value;
    if (password == "") {
        alert("password must be filled out");
        return false;
    }

    //if all are fill display the hidden one
    if (email != "" && password != "") {
        document.getElementById("full").style.display = "block";
        document.getElementById("email").innerHTML = email;
        document.getElementById("password").innerHTML = password;
    }
}
//sumbit the query to form action mail and go back to first view of the page
function submit() {
    document.getElementById("query-form").submit();
    let myArray = [email, password];
    $.ajax({
        type: "POST",
        url: "insert.php",
        data: { data: myArray }
    }).done(function (msg) {
        alert("Data Saved: " + msg);
    });
    alert("Successfully submitted!");
    document.getElementById("full").style.display = "none";
    document.forms["query-form"]["email"].innerHTML = "";
    document.forms["query-form"]["password"].innerHTML = "";
    // JavaScript code


    // PHP code
    /*<?php
    $data = $_POST['data'];
    // process $data
    echo "Data received";
    ?>*/

}
//back to the normal view
function edit() {
    document.getElementById("full").style.display = "none";

}