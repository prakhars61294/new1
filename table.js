function myTable() {
    var firstName = ["Prakhar", "Akhand", "Pradeep"];
    var surName = ["Singh", "Pratap", "Sahani"];
    var marks = [68, 58, 64];
    var table = document.getElementById("myTable");
    var i, rows, cell1, cell2, cell3, cell4;
    for (i = 0; i <= firstName.length; i++) {
        rows = table.insertRow(i);
    }

    for (i = 0; i <= firstName.length; i++) {
        cell1 = rows.insertCell(0);
        cell2 = rows.insertCell(1);
        cell3 = rows.insertCell(2);
        cell4 = rows.insertCell(3);
    }
}