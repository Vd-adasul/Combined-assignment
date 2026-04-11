let input = { a: 1, b: 2, c: 3 }
// output is the number of keys
// obj --> number
// 3

function keytotal(obj){
    return Object.keys(obj).length;
}

console.log(keytotal(input));