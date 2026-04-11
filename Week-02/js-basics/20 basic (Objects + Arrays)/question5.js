// given an object of arrays, { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] } we are tasked with getting one array out of it.

let obj1 = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }

function oneArr(inp){
    let keys = Object.keys(inp); 
    let arr1 = []
    for(let item of keys){
        arr1.push(...inp[item]);
    }
    return arr1; 
}

console.log(oneArr(obj1));
console.log(Object.values(obj1).flat())
// let arr1 = ["1","2"];
// let arr2 = ["3","4"];

// arr1.push(...arr2);
// console.log(arr1); 