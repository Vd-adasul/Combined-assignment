let inp1={ a: 10, b: 20 }
let inp2 ={ a: 5, c: 15 }
3


function mer(obj1, obj2){
    let final = {...obj1};
    for(let item in obj2){
        final[item]=obj2[item];
    }
    return final
}

console.log(mer(inp1, inp2))


