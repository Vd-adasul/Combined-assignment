let cutie  = { a: 1, b: "hello", c: 3 }
function see(obj){
    let values = Objects.values(cutie);
    for(let item of values){
        if(typeof(item)!="number"){
            return false;
        }
    }
    return true;
}

