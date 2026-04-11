let input = { a: 3, b: 1, c: 2 }
// we are tasked with making it go ascending based on the values ok 
// [["b",1], ["c",2], ["a",3]]
// obj -->arr[arr];


function worked(obj){
    return Object.entries(obj).sort((a,b)=>a[1]-b[1]);
}
console.log(worked(input));
