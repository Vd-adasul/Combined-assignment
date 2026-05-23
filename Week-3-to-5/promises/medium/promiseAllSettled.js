// Problem Description – Polyfill for Promise.allSettled

// You are required to implement a polyfill for Promise.allSettled. 
// The function should accept an array of Promises and wait for all of them to either resolve or reject.
// It must return a Promise that resolves with an array of result objects describing the status and value or reason of each Promise.
function promiseAllSettled(promises) {
    let result = []; 
    for(let i =0; i<promises.length; i++){
        promises[i]
            .then((data)=>{result[i]= data})
            .catch((err)=>{
                result[i]= err;
            })
    }
    // i wanna wait for result, and only after that return result
}

module.exports = promiseAllSettled;

