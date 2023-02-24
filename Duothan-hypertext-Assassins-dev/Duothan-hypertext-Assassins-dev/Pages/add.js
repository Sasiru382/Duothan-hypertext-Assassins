document.getElementById("full").style.display = "none";
function view() {
    let drug_name = document.forms["query-form"]["name"].value;
    if (drug_name == "") {
        alert("drug name must be filled out");
        return false;
    }
    let manufacture = document.forms["query-form"]["manufacture"].value;
    if (manufacture == "") {
        alert("manufacture must be filled out");
        return false;
    }
    let supplier = document.forms["query-form"]["supplier"].value;
    if (supplier == "") {
        alert("supplier must be filled out");
        return false;
    }
    let ndc = document.forms["query-form"]["ndc"].value;
    if (ndc == "") {
        alert("national drug code must be filled out");
        return false;
    }
    let exp_date = document.forms["query-form"]["exp_date"].value;
    if (exp_date == "") {
        alert("expiration date must be filled out");
        return false;
    }
    let quantity = document.forms["query-form"]["quantity"].value;
    if (quantity == "") {
        alert("quantity must be filled out");
        return false;
    }
    let unit_price = document.forms["query-form"]["unit_price"].value;
    if (unit_price == "") {
        alert("unit_price must be filled out");
        return false;
    }

    //if all are fill display the hidden one
    if (drug_name != "" && manufacture != "" && supplier != "" && ndc != "" && exp_date != "" && quantity != "" && unit_price != "") {
        document.getElementById("full").style.display = "block";
        document.forms["query-form"]["name"].innerHTML = drug_name;
        document.forms["query-form"]["manufacture"].innerHTML = manufacture;
        document.forms["query-form"]["supplier"].innerHTML = supplier;
        document.forms["query-form"]["ndc"].innerHTML = ndc;
        document.forms["query-form"]["exp_date"].innerHTML = exp_date;
        document.forms["query-form"]["quantity"].innerHTML = quantity;
        document.forms["query-form"]["unit_price"].innerHTML = unit_price;

    }
}
//sumbit the query to form action mail and go back to first view of the page
function submit() {
    document.getElementById("query-form").submit();
    let myArray = [drug_name, manufacture, supplier, ndc, exp_date, quantity, unit_price];
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
    document.forms["query-form"]["manufacture"].innerHTML = "";
    document.forms["query-form"]["supplier"].innerHTML = "";
    document.forms["query-form"]["ndc"].innerHTML = "";
    document.forms["query-form"]["exp_date"].innerHTML = "";
    document.forms["query-form"]["quantity"].innerHTML = "";
    document.forms["query-form"]["unit_price"].innerHTML = "";
}
//back to the normal view
function edit() {
    document.getElementById("").style.display = "none";

}