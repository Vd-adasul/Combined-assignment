let arr1 = [
  { user: "A", amount: 100 },
  { user: "B", amount: 200 },
  { user: "A", amount: 50 }
]

function sm(arr){
    let final = {}
    for(let item of arr){
        if(!final[item.user]){
            final[item.user]=item.amount;
        }else{
            final[item.user]+=item.amount;
        }
    }
    return final;
}

console.log(sm(arr1));

