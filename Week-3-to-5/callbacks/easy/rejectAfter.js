// Problem Description – rejectAfter(ms, callback)
//
// You are required to create a function named rejectAfter that accepts a time duration in milliseconds and a callback function.

// The function should wait for the specified time and then invoke the callback with an error.

function rejectAfter(ms, cb) {
    return setTimeout(()=>{
        cb(new Error("Rejected after timeout"))
    }, ms)
}

module.exports = rejectAfter;

