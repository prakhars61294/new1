function mySort() {
    var str = document.getElementById("text").value;
    var strsort = str.toLowerCase().split("").sort().join("");
    document.write("The sorted string is : " + strsort);
}

function myCapital() {
    var str = document.getElementById("text1").value;
    var str2 = str.toLowerCase().split(" ");
    for (var i = 0; i < str2.length; i++) {
        str2[i] = str2[i][0].toUpperCase() + str2[i].slice(1);
    }
    alert(str2.join(" "));
}

function myRandom() {
    var limit = document.getElementById("text2").value;
    var reg = "ABCDEFGHIJKLMN0123OPQRSTUVWXYZabcdefghi0123jklmnopqrstuvwxyzx89";
    var str = "";
    for (var i = 0; i < limit; i++) {
        var arr = reg.length * Math.random();
        str += reg.charAt(arr);
    }
    document.write(str);
}

function myDisplayObject() {
    var arr = [{
            book: "<i>Math</i>",
            author: "ML Aggarwal",
            status: true
        },
        {
            book: "<i>English</i>",
            author: "Xavier Pinto",
            status: false
        },
        {
            book: "<i>Physics</i>",
            author: "HC Verma",
            status: false
        },
        {
            book: "<i>The Naked Face</i>",
            author: "Sidney Sheldon",
            status: true
        },
        {
            book: "<i>Bloodlines</i>",
            author: "Sidney Sheldon",
            status: true
        }, {
            book: "<i>Let Us C</i>",
            author: "Yashwant Kanetkar",
            status: false
        },
        {
            book: "<i>Harry Potter</i>",
            author: "JK Rowling",
            status: true
        },
        {
            book: "<i>Game of Thrones</i>",
            author: "George RR Martin",
            status: true
        },
        {
            book: "<i>Sacred Games</i>",
            author: "Vikram Chandra",
            status: true
        },
        {
            book: "<i>Midnight's Children</i>",
            author: "Salman Rushdie",
            status: false
        },
        {
            book: "<i>Sherlock Holmes</i>",
            author: "Aurthur Conan Doyle",
            status: true
        }
    ];
    for (var i = 0; i < arr.length; i++) {
        var p = " " + arr[i].book + " by " + arr[i].author + ".";
        if (arr[i].status) {
            document.write("Already Read : " + p + "<br>");
        } else {
            document.write("Still to be read : " + p + "<br>");
        }
    }
}

function myObject1() {
    var inp = document.getElementById("text3").value;
    var inp2 = inp.toLowerCase();
    var arr = {
        book: "<i>Game of Thrones</i>",
        author: "George RR Martin",
        status: "Available",
        pages: "200",
        price: "Rs. 475",
        year: "2010"

    };
    if (inp === "") {
        alert("Enter something");
    } else if (arr.hasOwnProperty(inp2)) {
        document.write(inp + " is Present");

    } else {
        document.write(inp + " is Not Present");
    }
}

function myObject2() {
    var inp = document.getElementById("text4").value;
    var inp2 = inp.toLowerCase();
    var arr = {
        book: "<i>Game of Thrones</i>",
        author: "George RR Martin",
        status: "Available",
        pages: "200",
        price: "Rs. 475",
        year: "2010"

    };
    var en = Object.entries(arr);
    document.write("Object initially has : " + en);
    document.write("<br>");
    if (inp === "") {
        alert("Enter something");
    } else if (arr.hasOwnProperty(inp2)) {
        delete arr.inp2;
        document.write(inp + " is deleted");
    } else {
        document.write(inp + " is Not Present");
    }
}