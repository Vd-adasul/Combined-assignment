let cutie = { A: [80, 90], B: [70, 75, 10000] }
// task to find the perosn with the highest value
// A

// object -->variable

function arravg(arr){
    let sum = 0; 
    for(let i =0; i<arr.length; i++){
        sum+=arr[i]; 
    }
    let final = sum/arr.length;
    return final; 
}

function person(obj){
    let min =0;
    let char = "";
    for(let key in obj){
        let hotie = arravg(obj[key])
        if(hotie>min){
            min = hotie;
            char = key; 
        }
    }
    return char; 
}

console.log(person(cutie))