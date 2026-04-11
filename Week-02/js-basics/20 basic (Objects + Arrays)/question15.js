// Convert object to query string
// { name: "Alice", age: 25 }
// "name=Alice&age=25"

// obj-->str

function conv(obj){
    let final = "";
    for(let key in obj){
        final+=("&"+key.toString()+"="+obj[key].toString())
    }
    return final.slice(1);
}

console.log(conv({ name: "Alice", age: 25 }));