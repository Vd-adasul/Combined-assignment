/*
  Write a function `reverseInteger` which takes an integer as input and returns the integer with its digits reversed. If the input is negative, the reversed integer should also be negative.

  What is reversing an integer?
  - Reversing an integer means rearranging its digits in the opposite order while maintaining its sign.

  Example:
  - Input: 123
  - Output: 321

  - Input: -456
  - Output: -654

  - Input: 100
  - Output: 1

  - Input: 0
  - Output: 0

  Once you've implemented the logic, test your code by running
  - `npm run test-reverseInteger`
*/

function reverseInteger(num) {
  // Your code here
  
  let str = num.toString();
  let i = 0; 
  let final =""
  if(str[0]=="-"){
    i =1;
    final = "-"
  }else{
    i=0;
    final = ""
  }

  for(let m = str.length-1; m>=i; m--){
    final+=str[m];
  }
  return Number(final)


}

module.exports = reverseInteger;
