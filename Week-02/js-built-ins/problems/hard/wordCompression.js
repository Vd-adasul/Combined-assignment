/*
  Write a function `compressWords` which takes an array of strings as input and returns a new array with consecutive duplicate elements compressed. If an element appears consecutively, it is replaced by the element followed by the count of its occurrences.

  Example:
  - Input: ["apple", "apple", "banana", "banana", "banana", "cherry", "apple", "apple"]
  - Output: ["apple2", "banana3", "cherry", "apple2"]

  - Input: ["cat", "dog", "dog", "dog", "cat"]
  - Output: ["cat", "dog3", "cat"]

  - Input: ["one", "two", "three"]
  - Output: ["one", "two", "three"]

  - Input: []
  - Output: []

  Note:
  - The function should handle empty arrays and arrays with no consecutive duplicates.

  Once you've implemented the logic, test your code by running
  - `npm run test-compressWord`
*/


function compressWords(arr) {
  if (arr.length === 0) return [];
  // Your code here
  let final = [];
  let curr = arr[0];
  let count = 0;
  for(let item of arr){
    if(item==curr){
      count+=1;
      continue ;
    }else{
      if(count==1){
        final.push(curr);
      }else{
        final.push(curr+count)
      }
      count=1;
      curr = item;
      continue
    }
  }
  if (count === 1) {
    final.push(curr);
  } else {
    final.push(curr + count);
  }
  return final; 
}


module.exports = compressWords;
