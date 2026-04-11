// 2. **Count word occurrences in array**
//     - Input:
        
//         ```jsx
//         ["apple", "banana", "apple", "orange", "banana", "apple"]
        
//         ```
        
//     - Output:
// { apple: 3, banana: 2, orange: 1 }

// input we get an array, output we give an object 

function countUni(arr){
    let counts = {};
    for(let i = 0; i < arr.length; i++){
        if(!counts[arr[i]]){
            counts[arr[i]] = 1;
        } else {
            counts[arr[i]] += 1;
        }
    }
    return counts;
}

let arr1 = ["apple", "banana", "apple", "orange", "banana", "apple"];
let final = countUni(arr1);

console.log(final);
