export async function updateTodo(id){
    await fetch("http://localhost:3000/todos/"+id, {
      "method":"PUT",
      "body" : JSON.stringify({
        "title" : document.getElementById("title").value,
        "description" : document.getElementById("description").value
      }),
      "headers" : {
        "Content-Type":"application/json"
      }
    }).then((response) => response.json())
    .then((data)=>data)
    .catch((err) =>console.log(err));
  }
  export  async function deleteTodo(id){
    await fetch("http://localhost:3000/todos/"+id, {
      "method":"DELETE"
    }).then((response) => response.json())
    .then((data)=>console.log(data));
  }
  
  export  async function addTodo(){
    await fetch("http://localhost:3000/todos", {
      "method":"POST",
      "body" : JSON.stringify({
        "title" : document.getElementById("titleAdd").value,
        "description" : document.getElementById("descriptionAdd").value
      }),
      "headers" : {
        "Content-Type":"application/json"
      }
    }).then((response) => response.json())
    .then((data)=>console.log(data));
  }