let cutie = { a: [1, [2, [3]]], b: [4, [5]] }

// { a: [1,2,3], b: [4,5] }

function df(obj){
    let final ={};
    for(let item in obj){
        final[item]=obj[item].flat();
        for(let i of final[item]){
            if(typeof i !== "number"){
                df(final);
            }    
        }
    }


    return final;
}

console.log(df(cutie));