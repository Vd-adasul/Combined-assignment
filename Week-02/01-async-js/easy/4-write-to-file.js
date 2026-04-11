// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

import { writeFile } from 'node:fs/promises';

async function writeData() {
  try {
    await writeFile('example.txt', 'Hello, World!');
    console.log('File written successfully!');
  } catch (err) {
    console.error('Error writing file:', err);
  }
}
writeData();
