function str() {
    var a = document.getElementById("text").value;
    var b = a.substr(a.lastIndexOf(".") + 1);
    document.write(b);
}