function myRev() {
    var a = document.getElementById("text").value;
    var x = a.toString().split("").reverse().join("");
    var b = parseFloat(x) * Math.sign(a);
    document.write(b);
}