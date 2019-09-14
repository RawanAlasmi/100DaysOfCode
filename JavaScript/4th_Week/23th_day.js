/* Jumps */

// break/continue/return/throw/try/catch/finally

// 1: without label
var text = ""
var i;
for (i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  text += "The number is " + i + "<br>";
}

// 2: with using label
var x = 0, z = 0;

var cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
  text += cars[0] + "<br>"; 
  text += cars[1] + "<br>"; 
  break list;
  text += cars[2] + "<br>"; 
  text += cars[3] + "<br>"; 
}
