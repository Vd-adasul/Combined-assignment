// Problem Description – Async Cache with Time-to-Live (TTL)

// You are required to create an asynchronous cache utility that exposes a get(key, fetcher) method. 
// If the requested key already exists in the cache, the cached value should be returned immediately. 
// If the key does not exist, the fetcher function should be executed to retrieve the value, 
// store it in the cache, and automatically remove the entry after a fixed Time-to-Live (TTL) of 5 seconds.

// there are couple of steps 
// 1. make cache,
// 2. if key is in cache then return the value;
// 3. if they key is not in the cache then do cache[key] = promise and then remove the thing in 5 seconds

class AsyncCache {
  static cache = {};

  constructor(ttl = 5000) {
    this.ttl = ttl;
  }

  async get(key, fetcher) {
    // ✅ Step 1: if exists → return immediately
    if (AsyncCache.cache[key]) {
      return AsyncCache.cache[key];
    }

    // ✅ Step 2: call fetcher and store PROMISE
    const promise = fetcher();
    AsyncCache.cache[key] = promise;

    // ✅ Step 3: remove after TTL
    setTimeout(() => {
      delete AsyncCache.cache[key];
    }, this.ttl);

    return promise;
  }
}

module.exports = AsyncCache;
