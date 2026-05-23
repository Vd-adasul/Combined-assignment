// Problem Description – Debounced Search with Result Guard
//
// You are building a search bar that should not call the API
// on every keystroke, so the request must be debounced.
//
// If an older request finishes after a newer one, its result
// must be ignored to prevent stale UI updates.
//
// Requirements:
// - Delay execution by waitMs.
// - Reset the timer on repeated calls.
// - Only the latest request may trigger the callback.

function createSmartDebounce(worker, waitMs) {
  let timer = null;
  let latestRequestId = 0;

  return function (...args) {
    const onComplete = args[args.length - 1]; // last arg is callback
    const workerArgs = args.slice(0, -1);

    clearTimeout(timer);

    const requestId = ++latestRequestId;

    timer = setTimeout(() => {
      worker(...workerArgs, (err, result) => {
        // Only allow latest request to respond
        if (requestId !== latestRequestId) return;

        onComplete(err, result);
      });
    }, waitMs);
  };
}

module.exports = createSmartDebounce;
