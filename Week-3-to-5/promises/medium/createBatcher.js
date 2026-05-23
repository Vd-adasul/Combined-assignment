
// Problem Description – Async Batch Processor (Time or Count)
//
// You are required to implement createBatcher(processorFn, maxBatchSize, maxWaitMs).
//
// The batcher should collect incoming items and process them in batches.
//
// It must return add(item):
// 1. Add items into a buffer
// 2. If buffer reaches maxBatchSize, call processorFn(batch) immediately
// 3. If maxWaitMs passes before reaching maxBatchSize, call processorFn with the partial batch
// 4. After processing, reset the buffer and timer so no items remain stuck


// done via flusubg if tge tgubg ij 
function createBatcher(processorFn, maxBatchSize, maxWaitMs) {
  let batch = [];
  let timer = null;

  function flush() {
    if (batch.length === 0) return;

    const currentBatch = batch;
    batch = [];

    // clear timer
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    processorFn(currentBatch);
  }

  return function add(item) {
    batch.push(item);

    // Start timer only when first item comes
    if (!timer) {
      timer = setTimeout(() => {
        flush();
      }, maxWaitMs);
    }

    // If batch size reached → flush immediately
    if (batch.length >= maxBatchSize) {
      flush();
    }
  };
}

module.exports = createBatcher;