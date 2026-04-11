// swap key and values of the objects

// input { a: "x", b: "y", c: "z" }
// output { x: "a", y: "b", z: "c" }

function swap(inp){
    let newObj = {};
    let keys = Object.keys(inp);
    for(let i =0; i<keys.length; i++){
        newObj[inp[keys[i]]]=keys[i];
    }
    return newObj;
}

console.log({ a: "x", b: "y", c: "z" });
console.log(swap({ a: "x", b: "y", c: "z" }))