// Problem Description – Sum File Sizes
//
// You are given an array of file paths. Your task is to implement a function
// that returns the total size of all these files in bytes.
//
// Requirements:
// 1. Use fs.promises.stat() to get file information.
// 2. Return the sum of `size` property of all files.
// 3. Handle cases where a file might not exist (optional: you can let it throw or return 0).
// 4. Tasks should ideally be performed in parallel for efficiency.

// array[ filepaths ] --> totalsize of all
const fs = require("fs").promises;

async function sumFileSizes(filePaths) {
    let size = 0; 
    
    let arr = await Promise.all(
        filePaths.map(async (x) => {
            let stat = await fs.stat(x);
            return stat.size;
        })
    );

    for (let i = 0; i < arr.length; i++) {
        size += arr[i];
    }

    return size;
}

module.exports = sumFileSizes;