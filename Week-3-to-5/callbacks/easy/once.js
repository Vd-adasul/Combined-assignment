// Problem Description – once(fn)
//
// You are required to implement a wrapper function named once that accepts a callback-based asynchronous function `fn`.
// The wrapper should ensure that `fn` is executed only on the first call.
// Any subsequent calls should not re-execute `fn` and should instead invoke the callback with the same result (or error) from the first invocation.

function once(fn) {
    let callbacks = []; 
    let result ; 
    let error; 
    let called  = false; 

    return function(...args){
        let cb = args.pop();
        if(called){
            return cb(error, result); 
        }

        callbacks.push(cb); 

        if (callback.length === 1){
            cb(...args,(err,res)=>{
                called = true;
                result = res
                error = err; 

                callbacks.forEach(cb => cb(error, result))
            })
        }
    }

}

module.exports = once;
