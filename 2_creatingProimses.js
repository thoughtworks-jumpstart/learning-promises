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

// if there is a possibility of an error being thrown
// you can handle the error in the catch
new Promise((resolve, reject) => {
  throw new Error();
  resolve();
})
  .then(success, fail)
  .catch(e => console.log("error here"))
  .finally(() => console.log("happens no matter what")); // fail and not error

// is possible to create a promise that resolves immediately.
Promise.resolve().then(success, fail); // success

// or fails immediately
Promise.reject().then(success, fail); // success
