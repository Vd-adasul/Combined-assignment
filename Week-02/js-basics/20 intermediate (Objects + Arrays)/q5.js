let cutie =[
  { id: 1, category: "electronics", price: 100 },
  { id: 2, category: "clothes", price: 50 },
  { id: 3, category: "electronics", price: 200 }
]

// { electronics: 300, clothes: 50 }


function cat(arr){
    let final = {};
    for(let items of arr){
        if(!final[items.category]){
            final[items.category]=items.price;
        }else{
            final[items.category]+=items.price;
        }
    }
    return final;
}

console.log(cat(cutie))