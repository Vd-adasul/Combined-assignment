// Problem Description – I/O Operation With Timeout
//
// You are given an asynchronous function that represents an I/O-bound task
// (such as a network request or database call).
//
// Your task is to execute this function, but enforce a time limit.
// If the I/O operation does not complete within the specified number
// of milliseconds, the returned promise should reject with a "Timeout" error.

async function ioWithTimeout(fn, ms) {
    let result = await Promise.race([
        fn(), 
        delay(ms).then(()=>{ 
            throw new Error ("Timeout")
        })
    ])
    return result;
}

module.exports = ioWithTimeout;
