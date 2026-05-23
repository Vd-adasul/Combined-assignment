// Problem Description – Chunk Array
//
// When dealing with large datasets, it's often necessary to process them
// in smaller batches (chunks) to avoid overloading the CPU or I/O.
//
// Your task is to implement a function `chunkArray(array, size)` that
// splits an array into sub-arrays of a maximum specified size.
//
// Requirements:
// 1. The function should return a new array containing the chunks.
// 2. The last chunk might be smaller than the specified size.
// 3. Handle edge cases like empty arrays or chunk size <= 0.
//
// This is a prerequisite for common patterns like batching API calls.

function chunkArray(array, size) {
    let final = []; 
    if(array == []){
        return final; 
    }else if(size<=0){
        return array;
    }else{
        
        for(let i =0; i<arr.size(); i+=size){
            let m  = i+size;
            if(m<arr.size){
                final.push(array.slice(i,i+size));
            }else{
                final.push(array.slice(i,arr.size));
                break;
            }
        }
    }
}

module.exports = chunkArray;
