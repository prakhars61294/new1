function diamond() {
    var r = 10;
    var i, j, k;
    for (i = 1; i <= r; i++) {
        for (k = 1; k <= (r - i); k++) {
            document.write("&nbsp;");
        }
        for (j = 1; j <= i; j++) {
            document.write("* ");
        }
        document.write("<br>");
    }
    for (i = r; i >= 1; i--) {
        for (k = 1; k <= (r - i); k++) {
            document.write("&nbsp;");
        }
        for (j = 1; j <= i; j++) {
            document.write("* ");
        }
        document.write("<br>");
    }
}