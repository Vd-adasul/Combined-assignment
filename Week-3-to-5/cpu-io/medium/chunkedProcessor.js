// Problem Description – Smart Progress Bar (CPU Yielding)
//
// You need to process a large list of items without blocking
// the event loop.
//
// Process the items in small chunks and yield control back
// to the event loop after each chunk so the system stays responsive.
//
// Requirements:
// - Implement chunkedProcessor(items, processFn, onComplete).
// - Process items in fixed-size chunks.
// - Yield using setImmediate after each chunk.
// - Call onComplete after all items are processed.
function chunkedProcessor(items, processFn, onComplete) {
  const chunkSize = 30;
  let index = 0;

  function processChunk() {
    const end = Math.min(index + chunkSize, items.length);

    for (let i = index; i < end; i++) {
      processFn(items[i]);
    }

    index = end;

    if (index < items.length) {
      // ✅ Yield control back to event loop
      setImmediate(processChunk);
    } else {
      // ✅ Done
      onComplete();
    }
  }

  processChunk();
}

module.exports = chunkedProcessor;