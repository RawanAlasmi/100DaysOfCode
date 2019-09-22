/* challenge */

str = ""

for (var i = 0; i < 5; i++) {
loop1: while (i === 1) {
    continue loop1;
  }
  str = str + i;

loop2: while (i === 3) {
    break loop2;
 }
  str = str + i;
  console.log(str)
}
