function elecbill() {
    var unit = document.getElementById("units").value;
    unit = Number(unit);
    var bill = parseFloat(bill);
    if (unit <= 150) {
        bill = (unit * 2.80);
    } else if (unit > 150 || unit <= 380) {
        bill = (150 * 2.80) + ((unit - 150) * 4.40);
    } else if (unit > 380 || unit <= 680) {
        bill = (150 * 2.80) + (380 * 4.40) + ((unit - 380) * 6.30);
    } else {
        bill = (150 * 2.80) + (380 * 4.40) + (680 * 6.30) + ((unit - 680) * 7.20);
    }
    alert("Your bill is : Rs." + bill);
}