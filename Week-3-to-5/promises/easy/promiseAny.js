// Problem Description – promiseAny(promises)

// You are required to implement a function named promiseAny that accepts an array of Promises. 
// The function should return a new Promise that resolves immediately when any one of the input promises resolves successfully. 
// If all the promises reject, the returned Promise should reject with an error.
function promiseAny(promises) {
  return new Promise((resolve, reject) => {
    let rejectedCount = 0;
    let errors = [];

    if (promises.length === 0) {
      return reject(new Error("All promises were rejected"));
    }

    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((value) => {
          resolve(value); // first success wins
        })
        .catch((err) => {
          errors[i] = err;
          rejectedCount++;

          if (rejectedCount === promises.length) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
    }
  });
}

module.exports = promiseAny;
