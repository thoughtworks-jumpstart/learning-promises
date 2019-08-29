// 2 other often use functions are Promise.race and Promise.all.

const slowResolvePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("slow");
  }, 1000);
});

const fastResolvePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("fast");
  }, 100);
});

// Using promise.race we can get the result of the fastest promise
const printResultOfFastestPromise = async (...rest) => {
  const winner = await Promise.race(rest);
  console.log(`winner is ${winner}`);
};

printResultOfFastestPromise(slowResolvePromise, fastResolvePromise);

// One possible usecase is to timeout a endpont
const timeOutIfSlow = async (...rest) => {
  const result = await Promise.race(rest);
  if (result === "fast") {
    console.log("timeout, start cancel procedure");
    // run logic to cancel the request
  } else {
    console.log("proceed with request");
  }
};

timeOutIfSlow(slowResolvePromise, fastResolvePromise);

// Promise.all allows us to get back all result.
// results of promises are in order of the array of promises pass in
const printAllResults = async (...rest) => {
  const results = await Promise.all(rest);
  console.log("Promise.all results: ", results);
};

const done = printAllResults(slowResolvePromise, fastResolvePromise);

// one thing to look out for in promise.all is that when one promise fail.
// everything fails if one promise reject.

// delay execution for print order
done.then(() => {
  printAllResults(
    slowResolvePromise,
    fastResolvePromise,
    new Promise((res, rej) => setTimeout(() => rej("failed"), 750))
  ).catch(err =>
    console.log("Promise.all with a single Promise throwing reject", err)
  );
}, 1000);
