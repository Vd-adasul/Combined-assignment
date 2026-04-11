let cutie = { a: { x: 1, y: 2 } }
let cutie2 = { a: { x: 1, y: 2 } }

function de(obj1, obj2){
    if (obj1 === obj2) return true;
    let keys1 = Object.keys(obj1); 
    let keys2 = Object.keys(obj2); 

    if(keys1.length!== keys2.length) return false;
    for(let item of keys1){
        if(!keys2.includes(item)) return false;
        if(!de(obj1[item],obj2[item])) return false;
    }
    return true;
}
console.log(de(cutie,cutie2));

