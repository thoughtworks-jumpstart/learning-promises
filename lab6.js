const slowResolvePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("snail");
  }, 1000);
});

const fastResolvePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("sonic");
  }, 100);
});

// TODO: Using Promise.race, print the result of the faster promise.

// TODO: Using Promise.all, print the result of the all the promises.
