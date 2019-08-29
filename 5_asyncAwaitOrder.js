// Examine the code below.
// We called slow function first but fast function get resolves first.
// Await pushing the code to the event queue thus is non blocking.
// which ever promise get resolves first will run first.

const slowResolvePromise = new Promise((resolve, reject) => {
  console.log("slow promise");
  setTimeout(() => {
    console.log("1000ms");
    resolve();
  }, 1000);
});

const fastResolvePromise = new Promise((resolve, reject) => {
  console.log("fast promise");
  setTimeout(() => {
    console.log("100ms");
    resolve();
  }, 100);
});

const slowResolveFunction = async () => {
  console.log("start slow promise function");
  await slowResolvePromise;
  console.log("slow function complete");
};

const fastResolveFunction = async () => {
  console.log("start fast promise function");
  await fastResolvePromise;
  console.log("fast function complete");
};

slowResolveFunction();
fastResolveFunction();
