/* Reserved Words */

// one of the most reserved words in javaScript if (if .. else):
var isEven = function(a) {
    if (isNaN (a)) {
    return "Input was not a number.";
    }
    else if (a % 2 === 0) {
      return "true";
    } else {
      return "false";
    }
  };
  
  console.log(isEven(4));
  // expected output: "true"

  