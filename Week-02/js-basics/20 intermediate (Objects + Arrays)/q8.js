let obj1 = {
  en: { hello: "Hello", bye: "Goodbye" },
  fr: { hello: "Bonjour", bye: "Au revoir" },
  es: { hello: "Hola" }
}

// item: {initem:obj[item][initem], initem:obj[item][initem]} 

// {
//   hello: { en: "Hello", fr: "Bonjour", es: "Hola" },
//   bye: { en: "Goodbye", fr: "Au revoir" }
// }

function co(obj){
    let final ={}
    for(let item in obj){
        for(let initem in obj[item]){
            if(!final[initem]){
                final[initem]={[item]:obj[item][initem]};
            }else{
                final[initem][item] = obj[item][initem];
            }
        }
    }
    return final;
}

console.log(co(obj1));