// Problem Description – Asynchronous Worker Pool
//
// You are required to create a worker pool that manages the execution
// of asynchronous tasks.
// The pool should ensure that no more than N tasks are running concurrently,
// while any additional tasks are queued.
// As tasks complete, queued tasks should start automatically.
// Each task must invoke its callback with its result when finished.


class CallbackPool {
  constructor(limit) {
    this.limit = limit;
    this.running = 0;
    this.queue = [];
  }

  run(task, onComplete) {
    const wrappedTask = () => {
      this.running++;

      task((result) => {
        onComplete(result);     // pass result back
        this.running--;         // free a slot
        this._next();           // trigger next task
      });
    };

    if (this.running < this.limit) {
      wrappedTask();
    } else {
      this.queue.push(wrappedTask);
    }
  }

  _next() {
    if (this.queue.length > 0 && this.running < this.limit) {
      const nextTask = this.queue.shift();
      nextTask();
    }
  }
}

module.exports = CallbackPool;
