import axios from "axios";
import { useEffect, useState } from "react";
import { AddTodo } from "./components/AddTodo";
import { updateTodo, deleteTodo, addTodo } from "./api";


export function Todos() {
  const [isToggle,setIsToggle] = useState(false);
  const [todos,setTodos] = useState([]);
  useEffect(() => {
    async function getAllTodos(){
      try{
          const response = await axios.get("http://localhost:3000/todos/alltodos",{
            headers:{
              "Authorization" : "Bearer " + localStorage.token
            }
          });
          setTodos(response.data.todos);
      }
      catch(err){
        console.log(err);
      }
    }
    setInterval(() => getAllTodos(), 5000);
  }, []);


    return (
      <>
      <AddTodo></AddTodo>
      {
        todos.map((todo) => (
      <div key={todo._id} className='flex flex-col max-w-xl border 
       rounded-md p-4 mb-4 w-full'>
        <div className=' p-2'>
          {isToggle ? <input id='title' type="text" value={todo.title} className='w-full'/> : todo.title}
        </div>
        <div className=' p-2'>
          {isToggle ? <input id="description" type="text" placeholder={todo.description} className='w-full'/> : todo.description}
        </div>
        <div className='border  flex justify-evenly p-2'>
          {isToggle ? (
            <button onClick={() => {
              updateTodo(todo._id);
              setIsToggle(prev => !prev);
            }} className="py-1 border-2 bg-slate-400 text-white px-8 rounded-md  active:bg-slate-500 active:ring-1">Update</button>
          ) : (
            <button onClick={() => setIsToggle(prev => !prev)} className="py-1 border-2 bg-slate-400 text-white px-8 rounded-md  active:bg-slate-500 active:ring-1">Edit</button>
          )}
          <button onClick={() => {
            deleteTodo(todo._id);
          }} className="py-1 border-2 bg-slate-400 text-white px-8 rounded-md  active:bg-slate-500 active:ring-1">Delete</button>
        </div>
      </div>
      ))
    }
  
      </>
    );
  }
  
  export default Todos;
  