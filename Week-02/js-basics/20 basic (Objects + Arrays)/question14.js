let input ={ name: "alice", city: "delhi" }
// capitalize the value 
// { name: "Alice", city: "Delhi" }
// obj --> chaneged output
// word.charAt(0).toUpperCase() 
function cap(obj){
    for(let key in obj){
        obj[key] = obj[key].charAt(0).toUpperCase()+ obj[key].slice(1);
    }
    return obj;
}

console.log(cap(input));