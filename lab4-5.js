// convert the following to use async and await
const getTodo = Promise.resolve(
  '{"userId":1,"id":4,"title":"et porro tempora","completed":true}'
);

const printTodo = () => {
  getTodo
    .then(data => JSON.parse(data))
    .then(data => {
      data.title = "In addition Times";
      return data;
    })
    .then(data => `Item: ${data.title} has been completed? ${data.completed}`)
    .then(data => console.log(data));
};

printTodo();
