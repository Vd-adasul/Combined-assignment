
// // Problem Description – Delayed Success (Sleep Wrapper)
// //
// // You are given a value and a delay time in milliseconds.
// // Your task is to implement delayResult(value, ms).
// //
// // The function must return a Promise that resolves with the given value
// // only after ms milliseconds.

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}
async function delayResult(value, ms) {
    await delay(ms); 
    return value;
}

module.exports = delayResult;