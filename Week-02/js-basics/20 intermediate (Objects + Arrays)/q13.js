let inp = { fruits: ["apple","apple","banana"], drinks: ["apple","tea"] }

function mo(arr){
    let final ={}
    for(let item of arr){
        if(!final[item]){
            final[item]=1;
        }else{
            final[item]+=1;
        }
    }

    let max = "";
    let max_num = 0;
    
    for(let item in final){
        if(final[item]> max_num){
            max = item;
            max_num = final[item];
        }
    }
    return max;
    
}

function mc(obj){
    let arr1 = []
    for(let item in obj){
        arr1.push(...obj[item])
    }

    return mo(arr1);
}

console.log(mc(inp))


