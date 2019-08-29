/**
 * RUN 'npm install' first
 */

// fetch is a browser fetch api to access data from server
const fetch = require("node-fetch");

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json()) //
  .then(json => console.log(json));

// server sometimes can return you invalid response.
// Is good to check your reponse before using them.
const checkResponse = res => {
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return res;
};

fetch("https://jsonplaceholder.typicode.com/todos/2")
  .then(checkResponse) // check if response is okay
  .then(response => response.json()) // convert data to json
  .then(json => console.log(json)) // log data
  .catch(err => console.log(err)); // log error if an error was thrown
