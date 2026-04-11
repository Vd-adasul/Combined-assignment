/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here

    let arr1  = ['a', 'e', 'i', 'o', 'u','A', 'E', 'I', 'O', 'U'];
    let final =0;
    for(let i of str){
        if(arr1.includes(i)){
            final+=1
        }
    }

    return final;
}

module.exports = countVowels;