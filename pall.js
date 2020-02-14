function myPallindrome() {
    var str = String(document.getElementById("text").value);
    var reg = /[\W_]/g;
    var k = str.toLowerCase().replace(reg, "");
    var pal = k.split("").reverse().join("");
    if (str == "") {
        alert("Enter Something");
    } else if (pal === k) {
        alert("Pallindrome");
    } else {
        alert("Not a Pallindrome");
    }
}