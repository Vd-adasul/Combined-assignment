let arr1 = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" }
]

function rd(arr){
    let final =[];
    let final_arr =[];
    for(let items of arr){
        if(!final.includes(items.id)){
            final.push(items.id)
            final_arr.push(items);
        }
    }
    return final_arr;
}

console.log(rd(arr1))