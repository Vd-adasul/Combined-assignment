// Problem Description – Ordered Parallel Batcher
//
// You need to process many items in parallel, but with a fixed
// concurrency limit to avoid resource exhaustion.
//
// Tasks should start as soon as a slot is free, and the final
// results must preserve the original input order.
//
// Requirements:
// - Run at most `limit` workers in parallel.
// - Preserve the original order of results.
// - Start new work as soon as one finishes.
// - Stop and return an error if any task fails.

function parallelBatch(items, limit, worker, finalCb) {

    let results = [];
    let index = 0;
    let running = 0;
    let finished = 0;
    let failed = false;

    function launchNext() {

        if (failed) return;

        while (running < limit && index < items.length) {

            const currentIndex = index++;
            running++;

            worker(items[currentIndex], (err, result) => {

                if (failed) return;
                
                if (err) {
                    failed = true;
                    return finalCb(err);
                }

                results[currentIndex] = result;

                running--;
                finished++;

                if (finished === items.length) {
                    return finalCb(null, results);
                }

                launchNext();
            });
        }
    }

    launchNext();
}

module.exports = batchProcess;
