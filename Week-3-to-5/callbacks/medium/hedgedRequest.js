// Problem Description – Hedged Request
//
// You have a Primary async source and a Secondary backup.
// Start the Primary immediately. If it is slow, start the Secondary.
//
// Return the first successful result and ignore the rest.
// Only fail if both fail, and ensure the callback runs once.
//
// Requirements:
// - Start Primary immediately.
// - Start Secondary after timeoutMs if needed.
// - First success wins.
// - Callback must be called exactly once.
function hedgedRequest(primary, secondary, timeoutMs, onComplete) {
  let called = false;
  let errorCount = 0;
  let secondaryStarted = false;

  function finish(err, result) {
    if (called) return;
    called = true;
    onComplete(err, result);
  }

  function handleError(err) {
    errorCount++;
    if (errorCount === 2) {
      finish(err);
    }
  }

  // Start primary immediately
  primary((err, result) => {
    if (err) {
      handleError(err);
    } else {
      finish(null, result);
    }
  });

  // Start secondary after timeout
  const timer = setTimeout(() => {
    secondaryStarted = true;

    secondary((err, result) => {
      if (err) {
        handleError(err);
      } else {
        finish(null, result);
      }
    });
  }, timeoutMs);
}