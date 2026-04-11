let inp1 ={ a: { x: 1, y: 2 } }
let inp2={ a: { y: 3, z: 4 } }



function ml(obj, final){
    for(let item in obj ){
        if (!final[item]){
            final[item] = obj[item];           
        }else{
            for(let nice in final[item]){
                final[item][nice] = obj[item][nice];
            }
        }
    }
    return final;

}
function merge(obj1, obj2){

    let final ={};
    console.log(ml(obj2,ml(obj1, final)))

}

merge(inp1,inp2)