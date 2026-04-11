// { a: 20, b: 60, c: 40, d: 90 }
// output { b: 60, d: 90 }
function abv(obj){
    let final = {}
    for(let key in obj){
        if(obj[key]>50){
            final[key]=obj[key];
        }
    }
    return final;
}

console.log(abv({ a: 20, b: 60, c: 40, d: 90 }))