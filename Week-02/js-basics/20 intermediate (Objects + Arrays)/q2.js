let cutie =[
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
]

// { 1: "Alice", 2: "Bob" }

function cnv(arr){
    let final = {};
    for(let item of arr){
        final[item.id]=item.name;
    }
    return final;
}

console.log(cnv(cutie));