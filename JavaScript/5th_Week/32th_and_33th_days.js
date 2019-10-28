/* challenge */

var i = 5, j = 0;

try {
    if (j == 0) {
        throw ("Divide by zero error");
    } else {
        var k = i / j;
    }
}

catch (e) {
    alert("Error: " + e);
}

finally {

    alert("Finally, I got it");
}

