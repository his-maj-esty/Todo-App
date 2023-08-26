import axios from "axios";

export async function updateTodo(id){
  try{
      const res = await axios.put("http://localhost:3000/todos/"+id, {
          title : document.getElementById("title").value,
          description : document.getElementById("description").value
      },{
        headers:{
          "Authorization" : "Bearer " + localStorage.token
        }
      });
      alert(res.data.message);
    }
  catch(err){
    console.log(err);
  }
}
export  async function deleteTodo(id){
  try{
    const res = await axios.delete("http://localhost:3000/todos/"+id,{
      headers:{
        "Authorization" : "Bearer " + localStorage.token
      }
    });
    alert(res.data.message);
  }
  catch(err){
    console.log(err);
  }
}

  
export  async function addTodo(){
  try{
    const res = await axios.post("http://localhost:3000/todos/addtodo", {
      title : document.getElementById("titleAdd").value,
      description : document.getElementById("descriptionAdd").value
    },{
      headers:{
        "Authorization" : "Bearer " + localStorage.token
      }
    });
    alert(res.data.message);
  }
  catch(err){
    console.log(err);
  }
}

