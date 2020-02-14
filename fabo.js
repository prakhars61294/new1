function fibb() {
    var a = 0,
        b = 1,
        n;
    n = prompt("Enter Number", "0");
    for (var i = 1; i <= n; i++) {
        var k = a + b;
        b = a;
        a = k;
        document.write(k + " ");
    }
}