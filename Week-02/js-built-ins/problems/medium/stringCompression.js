/*
  Write a function `compression` which takes a string as input and returns a compressed version of the string. The compression is done by replacing consecutive repeating characters with the character followed by the count of repetitions. If a character does not repeat, it is not followed by a count.

  Example:
  - Input: "aaabbbbcccvvmm"
  - Output: "a3b4c3v2m2"

  - Input: "abc"
  - Output: "abc"

  - Input: "aabbcc"
  - Output: "a2b2c2"

  - Input: ""
  - Output: ""

  Note:
  - The function should work for any alphanumeric string.

  Once you've implemented the logic, test your code by running
  - `npm run test-compressString`
*/
function compression(str) {
  // Your code here
  if(str.length === 0) return "";
  let curr = str[0];
  let count = 1;
  let final = "";
  for(let i = 1; i<str.length; i++){
    if(curr===str[i]){
      count+=1; 
      continue;
    }
    if(curr!=str[i]){
      final+=curr; 
      if(count>1) final+= count.toString();
      curr=str[i]; 
      count=1;
      continue;
    }
    }
  final += curr;
  if (count > 1) final += count.toString();
  return final; 
}

module.exports = compression;