/**
 * MDN: The Promise object represents the eventual completion (or failure)
 *  of an asynchronous operation, and its resulting value.
 */
const success = () => console.log("success");
const fail = () => console.log("fail");

// When resolve, the first callback, success will be called
new Promise((resolve, reject) => {
  resolve();
}).then(success, fail);

// When reject, the second callback, fail will be called
new Promise((resolve, reject) => {
  reject();
}).then(success, fail); // fail

// We can chain a catch function to catch any error
new Promise((resolve, reject) => {
  throw new Error();
  resolve();
}).catch(e => console.log("error")); // error

// if there is a .then, a error will result in a fail instead
new Promise((resolve, reject) => {
  throw new Error();
  resolve();
})
  .then(success, fail)
  .catch(e => console.log("error")); // fail and not error

// is possible to create a promise that resolves immediately.
Promise.resolve().then(success, fail); // success

// or fails immediately
Promise.reject().then(success, fail); // success
