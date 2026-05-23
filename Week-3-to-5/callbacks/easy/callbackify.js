// Problem Description – callbackify(fn)

// You are required to write a function named callbackify that takes a function which returns a Promise.

// The function(callbackify) should return a new function(new_fn) that accepts a callback(some other callback) as its last argument.

// When the Promise resolves, the callback should be called with `(null, data)`.

// When the Promise rejects, the callback should be called with the error.


function callbackify(fn) {
    function new_fn(...args){
        let callback = args.pop();
        
        fn(...args)
            .then((data)=>callback(null,data))
            .catch((err)=> callback(err))
    }
    return new_fn
}

module.exports = callbackify;
