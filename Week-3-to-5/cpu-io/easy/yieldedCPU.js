// Problem Description – Yielding a CPU-Intensive Task
//
// You are given a CPU-heavy computation that runs inside a loop.
// Instead of blocking the event loop completely, your task is to
// periodically yield control back to the event loop.
//
// By using setTimeout inside an async function, the computation
// should pause every fixed number of iterations, allowing other
// asynchronous tasks (like timers or I/O callbacks) to run.

async function yieldedCPU(iterations) {
  for (let i = 0; i < iterations; i++) {
    // simulate heavy work
    let x = Math.sqrt(i * i * i);

    // yield every 1000 iterations
    if (i % 1000 === 0) {
      await new Promise(resolve => setTimeout(resolve, 0));
    }
  }
}

module.exports = yieldedCPU;