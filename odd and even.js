function oddeven() {
    var n = document.getElementById("num").value;
    for (var i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            document.write(i + "<br>");
        } else {
            document.write(i);
        }
    }
}