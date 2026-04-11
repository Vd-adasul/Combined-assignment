let cutie = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" }
]




function cluster(arr){
    let final = {};
    for(let item of arr){
        if (final[item.city]){
            final[item.city].push(item.name);
        }else{
            final[item.city]= [item.name];
        }
    }
    return final;
}

console.log(cluster(cutie));

