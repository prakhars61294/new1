function myCounter() {
    var str = String(document.getElementById("text").value);
    var obj = {};
    var maxLength = 0,
        maxCharName;
    var minLength = 1,
        minCharName;
    for (let char of str) {
        if (!obj[char]) {
            obj[char] = 1;
        } else {
            obj[char] = obj[char] + 1;
        }
    }
    for (let i in obj) {
        if (obj[i] >= maxLength) {
            maxLength = obj[i];
            maxCharName = i;
        }
        if (obj[i] <= minLength) {
            minLength = obj[i];
            minCharName = i;
        }
    }
    document.write("Maximum occurred character is : " + "'" + maxCharName + "'" + " and it occurs " + maxLength + " times");
    document.write("<br>");
    document.write("Minimum occurred character is : " + "'" + minCharName + "'" + " and it occurs " + minLength + " times");
}