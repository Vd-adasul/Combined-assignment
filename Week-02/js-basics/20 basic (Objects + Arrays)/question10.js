// input { name: "Rahul", age: 23, city: "Noida" }, ["name","city"]
// obj, array --> filtered obj
// output { name: "Rahul", city: "Noida" }


function filobj(obj, arr){
    let final ={};
    for(let item of arr){
        final[item]=obj[item];
    }
    return final;
}

console.log(filobj({ name: "Rahul", age: 23, city: "Noida" }, ["name","city"]));