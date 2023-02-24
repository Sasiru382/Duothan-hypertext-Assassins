document.getElementById("full").style.display = "none";
function view() {
    let drug_name = document.forms["query-form"]["drugname"].value;
    if (drug_name == "") {
        alert("drug name must be filled out");
        return false;
    }
    let manufacture = document.forms["query-form"]["Manufacturer"].value;
    if (manufacture == "") {
        alert("manufacture must be filled out");
        return false;
    }
    let supplier = document.forms["query-form"]["Supplier"].value;
    if (supplier == "") {
        alert("supplier must be filled out");
        return false;
    }
    let ndc = document.forms["query-form"]["NDC"].value;
    if (ndc == "") {
        alert("national drug code must be filled out");
        return false;
    }
    let exp_date = document.forms["query-form"]["Date"].value;
    if (exp_date == "") {
        alert("expiration date must be filled out");
        return false;
    }
    let quantity = document.forms["query-form"]["quantity"].value;
    if (quantity == "") {
        alert("quantity must be filled out");
        return false;
    }
    let unit_price = document.forms["query-form"]["Uprice"].value;
    if (unit_price == "") {
        alert("unit_price must be filled out");
        return false;
    }

    //if all are fill display the hidden one
    if (drug_name != "" && manufacture != "" && supplier != "" && ndc != "" && exp_date != "" && quantity != "" && unit_price != "") {
        document.getElementById("full").style.display = "block";
        document.forms["query-form"]["drugname"].innerHTML = drug_name;
        document.forms["query-form"]["Manufacture"].innerHTML = manufacture;
        document.forms["query-form"]["Supplier"].innerHTML = supplier;
        document.forms["query-form"]["NDC"].innerHTML = ndc;
        document.forms["query-form"]["Date"].innerHTML = exp_date;
        document.forms["query-form"]["quantity"].innerHTML = quantity;
        document.forms["query-form"]["Uprice"].innerHTML = unit_price;

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
    document.forms["query-form"]["drugname"].innerHTML = "";
    document.forms["query-form"]["Manufacture"].innerHTML = "";
    document.forms["query-form"]["Supplier"].innerHTML = "";
    document.forms["query-form"]["NDC"].innerHTML = "";
    document.forms["query-form"]["Date"].innerHTML = "";
    document.forms["query-form"]["quantity"].innerHTML = "";
    document.forms["query-form"]["Uprice"].innerHTML = "";
}
//back to the normal view
function edit() {
    document.getElementById("full").style.display = "none";

}