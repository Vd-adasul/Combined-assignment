// Remove deeply nested key from object
let cutie = { a: { b: { c: 1, d: 2 } } }
let remove = "c"

// { a: { b: { d: 2 } } }

function rmv(obj, remove){
    for(let key in obj){

        if(key === remove){
            delete obj[key]
        }
        else if(typeof obj[key] === "object" && obj[key] !== null){
            rmv(obj[key], remove)
        }

    }
    return obj
}

console.log(rmv(cutie, "c"))
