// Find common keys between two objects
// { a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 }
// ["b","c"]

// obj, obj -->arr

function cmn(obj1,obj2){
    let final =[]
    let keys1 = Object.keys(obj1);
    for(let item of keys1){
        if(item in obj2){
            final.push(item);
        }
    }
    return final;
}


console.log(cmn({ a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 }))
