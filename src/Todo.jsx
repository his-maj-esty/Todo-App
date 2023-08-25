function App() {
    return (
      <>
      <AddTodo></AddTodo>
      {todos.map(todo => (
    <div key={todo.id} className='flex flex-col max-w-xl border border-black border-2 rounded-md p-4 mb-4 w-full'>
      <div className='border border-black border-2 p-2'>
        {isToggle ? <input id='title' type="text" placeholder={todo.title} className='w-full'/> : todo.title}
      </div>
      <div className='border border-black border-2 p-2'>
        {isToggle ? <input id="description" type="text" placeholder={todo.description} className='w-full'/> : todo.description}
      </div>
      <div className='border border-black border-2 flex justify-evenly p-2'>
        {isToggle ? (
          <button onClick={() => {
            updateTodo(todo._id);
            setIsToggle(prev => !prev);
          }} className='border border-black border-2 bg-red-500 text-white px-2 py-1 rounded-md'>Update</button>
        ) : (
          <button onClick={() => setIsToggle(prev => !prev)} className='border border-black border-2 bg-red-500 text-white px-2 py-1 rounded-md'>Edit</button>
        )}
        <button onClick={() => {
          deleteTodo(todo._id);
        }} className='border border-black border-2 bg-red-500 text-white px-2 py-1 rounded-md'>Delete</button>
      </div>
    </div>
    ))}
  
      </>
    );
  }
  
  export default App;
  