let cutie = { a: "apple", b: "banana", c: "kiwi" }

function lw(obj){
    let len = 0;
    let str1 = "";
    for(let item in obj){
        if(obj[item].length>len){
            len =obj[item].length;
            str1 = obj[item];
        }
    }
    return str1;
}

console.log(lw(cutie));
