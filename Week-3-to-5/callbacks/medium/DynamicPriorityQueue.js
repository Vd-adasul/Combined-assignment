// Problem Description – Priority Task Queue with Dynamic Concurrency
//
// You are required to implement a task queue that executes asynchronous
// tasks based on priority.
// Higher-priority tasks should be executed before lower-priority ones.
// The queue must enforce a concurrency limit, ensuring only a fixed number
// of tasks run at the same time.
// The concurrency limit can be updated dynamically while the system is running.
//
// Each task must invoke its callback when finished.
class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(item, priority) {
    this.heap.push({ item, priority });
    this._bubbleUp();
  }

  dequeue() {
    if (this.heap.length === 0) return null;

    const min = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this._bubbleDown();
    }

    return min;
  }

  _bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);

      if (this.heap[parent].priority <= this.heap[index].priority) break;

      [this.heap[parent], this.heap[index]] =
        [this.heap[index], this.heap[parent]];

      index = parent;
    }
  }

  _bubbleDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smallest = index;

      if (left < length &&
          this.heap[left].priority < this.heap[smallest].priority) {
        smallest = left;
      }

      if (right < length &&
          this.heap[right].priority < this.heap[smallest].priority) {
        smallest = right;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] =
        [this.heap[smallest], this.heap[index]];

      index = smallest;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

class DynamicPriorityQueue {
  constructor(concurrency) {
    this.limit = concurrency;
    this.queue = new PriorityQueue(); // use your heap
    this.running = 0;
  }

  setLimit(newLimit) {
    this.limit = newLimit;
    this.runNext(); // important: try to fill new slots
  }

  add(task, priority, onComplete) {
    const wrappedTask = () => {
      this.running++;

      task((result) => {
        onComplete(result);
        this.running--;
        this.runNext(); // free slot → run next
      });
    };

    this.queue.enqueue(wrappedTask, priority);

    this.runNext(); // try to run immediately
  }

  runNext() {
    while (this.running < this.limit && !this.queue.isEmpty()) {
      const { item: nextTask } = this.queue.dequeue();
      nextTask();
    }
  }
}
module.exports = DynamicPriorityQueue;
