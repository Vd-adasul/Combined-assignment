let cutie ={ a: 10, b: 50, c: 30, d: 40 }
console.log(Object.entries(cutie));



let sorted = Object.fromEntries(
    Object.entries(cutie).sort((a, b) => b[1] - a[1])
)
let N =0;
let final = []
for(let items in sorted){
    if(N<2){
        final.push(items);
        N+=1;
    }
}

console.log(final)