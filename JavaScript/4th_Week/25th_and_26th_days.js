/* challenge */

var i = 0;
for(var count =1 ; count <= 10 ; count++){
  
 if (count === 2) {
   document.write(count + " is prime number <br>"); 
 }
  
  if (count === 1) {
   document.write(count + " isn't prime number <br>"); 
 }
  
  checkPrime:
  while(count % 2 == 1 && count > 2){
    
    if(i % 3 == 0) {
      document.write(count + " isn't prime number <br>");
      break;
    }
    
    document.write(count + " is prime number <br>");
    break;
  }
  
  checkNotPrime:
  i = count
  while (i % 2 == 0 && i > 2){ 
         
      document.write(i + " isn't prime number <br>")
    i++
    continue;
    
  }
}
