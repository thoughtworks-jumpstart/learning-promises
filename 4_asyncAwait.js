/**
 * Promises was a nice inclusion to flatten out callbacks
 * and also easily allow us to create workflows that runs
 * only after certain event have completed(or resovle);
 *
 * Promises can look weird to many people.
 *
 * Async Await allows you to aims to solve this by allowing you
 * to write code as similar to how you will write if the code
 * wasn't asynchrous.
 */
const fetch = require("node-fetch");

const printTodo = async id => {
  const todo = await fetch("https://jsonplaceholder.typicode.com/todos/" + id)
    .then(response => (response.ok ? response : new Error(res.statusText)))
    .then(response => response.json());

  console.log(
    `userId ${todo.userId} has ${!todo.completed ? "not " : ""}completed ${
      todo.title
    }`
  );
};

printTodo(1);
printTodo(4);
