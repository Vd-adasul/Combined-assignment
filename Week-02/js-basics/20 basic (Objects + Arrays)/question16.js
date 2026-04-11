// [1,2,3,4,5,6]

function ceo(arr){
    let count = {even:0, odd:0};
    for(let i =0; i<arr.length; i++){
        if(arr[i]%2 ==0){
            count.even+=1;
        }else{
            count.odd+=1;
        }
    }
    return count;
}

console.log(ceo([1,2,3,4,5,6]))