let expected= ["a","b","c"]
let actual =["b","c","d"]

function reconcile(exp, act){
    let final = { missing:[], extra:[] }
    for(let items of exp){
        if(!act.includes(items)){
            final.missing.push(items);
        }
    }
    for(let items of act){
        if(!exp.includes(items)){
            final.extra.push(items)
        }
    }
    return final;
}

console.log(reconcile(expected,actual));