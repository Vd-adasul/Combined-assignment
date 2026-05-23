const Barista = new Promise((resolve, reject) => {
  // kitchen work
  const available = true;

  if (available) {
    resolve("latte");
  } else {
    reject("no latte");
  }
});


// 