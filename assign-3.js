function format1() {
    var a = new Date();
    var a2 = a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear();
    var form = a.getMonth() + "-" + a.getDate() + "-" + a.getFullYear();
    document.write("Today's Date is (DD/MM/YYYY) : " + a2);
    document.write("<br>");
    document.write("Formated Date (MM-DD-YYYY) : " + form);
}

function format2() {
    var a = new Date();
    var a2 = a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear();
    var form = a.getMonth() + "/" + a.getDate() + "/" + a.getFullYear();
    document.write("Today's Date is (DD/MM/YYYY) : " + a2);
    document.write("<br>");
    document.write("Formated Date (MM/DD/YYYY) : " + form);
}

function format3() {
    var a = new Date();
    var a2 = a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear();
    var form = a.getFullYear() + "-" + a.getDate() + "-" + a.getMonth();
    document.write("Today's Date is (DD/MM/YYYY) : " + a2);
    document.write("<br>");
    document.write("Formated Date (YYYY-DD-MM) : " + form);
}

function format4() {
    var a = new Date();
    var a2 = a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear();
    var form = a.getFullYear() + "/" + a.getDate() + "/" + a.getMonth();
    document.write("Today's Date is (DD/MM/YYYY) : " + a2);
    document.write("<br>");
    document.write("Formated Date (YYYY-DD-MM) : " + form);
}