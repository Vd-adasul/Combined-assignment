// find the largest key value { a: 10, b: 50, c: 20 }

function largestVal(inp){
    let bk = "";
    let bv =0; 
    let keys= Object.keys(inp);
    for(let i= 0; i<keys.length; i++){
        if(bv<inp[keys[i]]){
            bk = keys[i];
            bv = inp[keys[i]];
        }
    }
    return bk;
}

console.log(largestVal({ a: 10, b: 50, c: 20 }));