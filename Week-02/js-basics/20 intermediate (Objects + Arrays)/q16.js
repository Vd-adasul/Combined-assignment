let cutie ={ user: { profile: { name: "Alice", age: 25 } } }

function dn(obj){
    let final = ""

    for(let key in obj){
        if(typeof obj[key] === "object" && obj[key] !== null){
            final += dn(obj[key])
        }else{
            final += obj[key] + " "
        }
    }

    return final
}

console.log(dn(cutie))