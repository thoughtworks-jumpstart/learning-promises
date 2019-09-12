const success = () => console.log("success");
const fail = () => console.log("fail");

// When resolve, the first callback, success will be called
const demo1 = () =>
  new Promise((resolve, reject) => {
    resolve();
  }).then(success, fail);

// When reject, the second callback, fail will be called
const demo2 = () =>
  new Promise((resolve, reject) => {
    reject();
  }).then(success, fail); // fail

// We can chain a catch function to catch any error
const demo3 = () =>
  new Promise((resolve, reject) => {
    throw new Error();
    resolve();
  }).catch(e => console.log("error")); // error

// if an error is thrown, the fail method will run.
const demo4 = () =>
  new Promise((resolve, reject) => {
    throw new Error();
    resolve();
  })
    .then(success, fail)
    .catch(e => console.log("not printed although there is error"))
    .finally(() => console.log("happens no matter what")); // fail and not error

// but if an error is thrown, and a fail method does not exist, catch will run
const demo5 = () =>
  new Promise((resolve, reject) => {
    throw new Error();
    resolve();
  })
    .then(success)
    .catch(e => console.log("printed when there is no failure function"))
    .finally(() => console.log("happens no matter what")); // fail and not error

const demo6 = () =>
  new Promise((resolve, reject) => {
    throw new Error();
    resolve();
  })
    .then(success, () => {
      throw new Error();
    })
    .catch(e => console.log("printed when failure function throws an error"))
    .finally(() => console.log("happens no matter what")); // fail and not error

// is possible to create a promise that resolves immediately.
const demo7 = () => Promise.resolve().then(success, fail); // success

// or fails immediately
const demo8 = () => Promise.reject().then(success, fail); // success
