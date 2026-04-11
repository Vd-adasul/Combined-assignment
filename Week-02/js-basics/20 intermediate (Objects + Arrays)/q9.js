// Build index of ids grouped by category

let cutie =[
  { id: 1, category: "fruit" },
  { id: 2, category: "veggie" },
  { id: 3, category: "fruit" }
]

// {id:item[id], category: item[category]}

// { fruit: [1,3], veggie: [2] }

// arr(obj) --> obj[arr]

function grp(arr){
    let final = {}

    for(let item of arr){
        if(!final[item.category]){
            final[item.category] = [item.id]
        }else{
            final[item.category].push(item.id)
        }
    }

    return final
}


console.log(grp(cutie))