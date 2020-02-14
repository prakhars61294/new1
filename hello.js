function myConcat() {
    var a = String(document.getElementById("text").value);
    var str = "Hello";
    var str2 = a.replace(/hello/gi, "");
    if (str2 != "") {
        var b = str.concat(" ", str2);
        document.write(b);
    } else {
        alert("Enter Something!");
    }
}