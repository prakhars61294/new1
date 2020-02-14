function add() {
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var z = parseFloat(a) + parseFloat(b);
    if (!isNaN(a)) {
        if (!isNaN(b)) {
            document.getElementById("res").innerHTML = "" + z;
        } else {
            document.getElementById("res").innerHTML = "Second number is Illegal";
        }
    } else {
        document.getElementById("res").innerHTML = "First number is Illegal";
    }
}

function sub() {
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var z = parseFloat(a) - parseFloat(b);
    if (!isNaN(a)) {
        if (!isNaN(b)) {
            document.getElementById("res").innerHTML = "" + z;
        } else {
            document.getElementById("res").innerHTML = "Second number is Illegal";
        }
    } else {
        document.getElementById("res").innerHTML = "First number is Illegal";
    }
}

function mul() {
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var z = parseFloat(a) * parseFloat(b);
    if (!isNaN(a)) {
        if (!isNaN(b)) {
            document.getElementById("res").innerHTML = "" + z;
        } else {
            document.getElementById("res").innerHTML = "Second number is Illegal";
        }
    } else {
        document.getElementById("res").innerHTML = "First number is Illegal";
    }
}

function div() {
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var z = parseFloat(a) / parseFloat(b);
    if (!isNaN(a)) {
        if (!isNaN(b)) {
            document.getElementById("res").innerHTML = "" + z;
        } else {
            document.getElementById("res").innerHTML = "Second number is Illegal";
        }
    } else {
        document.getElementById("res").innerHTML = "First number is Illegal";
    }
}