let cutie = { a: 1, b: 2, c: 3, d: 4 };
let size=2

function chunk(obj,size){
    let log =Object.entries(cutie);
    let final =[];
    for(let i = 0; i<log.length; i+=size){
        let des = []
        des.push(log[i]);
        des.push(log[i+1]);
        final.push(des);
    }
    return final;
}

console.log(chunk(cutie,size));

