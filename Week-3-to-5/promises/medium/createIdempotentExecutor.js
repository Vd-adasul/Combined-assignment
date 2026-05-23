// Problem Description – Idempotent Async Execution
//
// You need to ensure that an asynchronous task identified by a key
// runs only once. If the same task is triggered again while it is
// still running, all callers should receive the same result.
//
// This problem tests deduplication and state synchronization.
//

function createIdempotentExecutor() {
  const inFlight = new Map();

  return function run(key, asyncFn) {
    // If already running → return same promise
    if (inFlight.has(key)) {
      return inFlight.get(key);
    }

    // Start the task
    const promise = asyncFn()
      .finally(() => {
        // Clean up after completion
        inFlight.delete(key);
      });

    // Store it
    inFlight.set(key, promise);

    return promise;
  };
}

module.exports = createIdempotentExecutor;