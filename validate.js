function mySubmit() {
    var w = document.getElementById("name").value;
    var x = document.getElementById("email").value;
    var y = document.getElementById("pass").value;
    var z = document.getElementById("pass2").value;
    if (w == "") {
        alert("Name cannot be empty");
    } else if (x == "") {
        alert("Email cannot be empty");
    } else if (y == "") {
        alert("Password cannot be empty");
    } else if (z == "" || y != z) {
        alert("Password does not match");
    } else {
        alert("Thank You!");
    }
}