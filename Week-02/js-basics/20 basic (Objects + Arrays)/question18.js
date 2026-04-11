// Convert array of objects to lookup by id
let cutie = [{ id: 1, name: "A" }, { id: 2, name: "B" }]
// { 1: { id:1, name:"A" }, 2: { id:2, name:"B" } }
// arr(obj)-->obj

function con(arr){
    let final ={};

    for(let item of arr ){
        final[Number(item.id)]=item;
    }
    return final;
}

console.log(con(cutie));

