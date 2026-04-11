// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

import { writeFile } from 'node:fs/promises';
const fs = require('fs');

async function writeData(str) {
  try {
    await writeFile('example.txt', str);
    console.log('File written successfully!');
  } catch (err) {
    console.error('Error writing file:', err);
  }
}
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  writeData(also(data))

  console.log(also(data));
});

function also(str){
    const result = str.trim().replace(/\s+/g, ' ');
    return result;
}



