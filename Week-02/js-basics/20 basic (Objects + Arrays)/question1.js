let cutie = { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }


function summingit(costing){
    let keys = Object.keys(costing)
    for(let i = 0; i<keys.length; i++){
        let key = keys[i]
        let sum = costing[key].reduce((acc, val) => acc + val, 0)
        costing[key]=sum;
    }
    return costing;
}

let  newObj = summingit(cutie);
console.log(Object.keys(cutie));
console.log(newObj);