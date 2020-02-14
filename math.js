function square() {
    var a = document.getElementById("num1").value;
    document.getElementById("res").innerHTML = "Square Root of " + a + " = " + Math.sqrt(a);
}

function power() {
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    document.getElementById("res").innerHTML = a + " to the power of " + b + " = " + Math.pow(a, b);
}

function sinangle() {
    var a = document.getElementById("num1").value;
    document.getElementById("res").innerHTML = "Sin of " + a + " = " + Math.sin(a * Math.PI / 180);
}

function cosangle() {
    var a = document.getElementById("num1").value;
    document.getElementById("res").innerHTML = "Cos of " + a + " = " + Math.cos(a * Math.PI / 180);
}

function astrick() {
    var a = document.getElementById("num1").value;
    var i, j, k;
    for (i = 1; i <= a; i++) {
        for (k = 1; k <= (a - i); k++) {
            document.write("&nbsp;");
        }
        for (j = 1; j <= i; j++) {
            document.write("* ");
        }
        document.write("<br>");
    }
    for (i = a; i >= 1; i--) {
        for (k = 1; k <= (a - i); k++) {
            document.write("&nbsp;");
        }
        for (j = 1; j <= i; j++) {
            document.write("* ");
        }
        document.write("<br>");
    }
}

function hash() {
    var a = document.getElementById("num1").value;
    var i, j, k;
    for (i = 1; i <= a; i++) {
        for (k = 1; k <= (a - i); k++) {
            document.write("&nbsp;");
        }
        for (j = 1; j <= i; j++) {
            document.write("# ");
        }
        document.write("<br>");
    }
    for (i = a; i >= 1; i--) {
        for (k = 1; k <= (a - i); k++) {
            document.write("&nbsp;");
        }
        for (j = 1; j <= i; j++) {
            document.write("# ");
        }
        document.write("<br>");
    }
}

function dollar() {
    var a = document.getElementById("num1").value;
    var i, j, k;
    for (i = 1; i <= a; i++) {
        for (k = 1; k <= (a - i); k++) {
            document.write("&nbsp;");
        }
        for (j = 1; j <= i; j++) {
            document.write("$ ");
        }
        document.write("<br>");
    }
    for (i = a; i >= 1; i--) {
        for (k = 1; k <= (a - i); k++) {
            document.write("&nbsp;");
        }
        for (j = 1; j <= i; j++) {
            document.write("$ ");
        }
        document.write("<br>");
    }
}

function fact() {
    var a = document.getElementById("num1").value;
    var x = 1;
    for (var i = 1; i <= a; i++) {
        x = x * i;
    }
    document.getElementById("res").innerHTML = "Factorial of " + a + " = " + x;
}