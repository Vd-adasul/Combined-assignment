let cutie = { x: [1,2,3], y: [2,3,4,7,39,0,67], z: [4,5] }
// return the unique values of this
// [1,2,3,4,5]
// obj -->arr

function uni(obj){
    let unfil_arr = Object.values(obj).flat();
    let final = [];
    for(let i of unfil_arr){
        if(!final.includes(i)){
            final.push(i);
        }
    }
    return final;
}

console.log(uni(cutie));