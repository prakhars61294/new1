function tf() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var z = Number(x) + Number(y);
    if (x == 300 || y == 300 || z == 300) {
        document.write("True");
    } else {
        document.write("False");
    }
}