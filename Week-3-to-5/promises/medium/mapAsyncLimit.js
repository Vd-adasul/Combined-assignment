// Problem Description – Asynchronous Map with Concurrency Limit

// You are required to implement an asynchronous version of Array.map that processes items using an async callback function. 
// Unlike the standard map, this version should only process a limited number of items concurrently. 
// As soon as one operation finishes, the next should begin.
// The final result must preserve the original order of the input array.
async function mapAsyncLimit(array, limit, asyncFn) {
    so essentially what is happeing is we are running atmost limit number of elems from the array and then, we are doing asyncfn(elem) and at the end we are stroing the result in same order and returing it,

    i think its fundamntally gonna be like while loop, till the last elem is reached or the limit is reached, and as soon as something is done we will then call the main function so next task can begin, and then we store it accorinfly yeah 
}

module.exports = mapAsyncLimit;

