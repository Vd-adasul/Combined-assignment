let cutie ={ a: 0, b: null, c: "hello", d: undefined, e: 5 }


function falsy(obj){
    let final ={}
    for(let item in obj){
        if(Boolean(obj[item])){
            final[item] = obj[item];
        }
    }
    return final;
}

console.log(falsy(cutie))