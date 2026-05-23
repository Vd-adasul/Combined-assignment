
// // Problem Description – Promise Timeout (Race Against Time)
// //
// // You are given a promise and a timeout duration in milliseconds.
// // Your task is to implement withTimeout(promise, ms).
// //
// // The returned promise should:
// // 1. Resolve/reject if the original promise settles within ms
// // 2. Reject with "Request Timed Out" if it takes longer than ms

function withTimeoutPromise(promise, ms) {
    
    const p1 = new Promise((_, reject)=>{
        setTimeout(()=>reject("request timed out"), ms)
    })
    
    return Promise.race([
        promise,
        p1
    ])
}

module.exports = withTimeoutPromise;