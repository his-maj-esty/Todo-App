import { addTodo } from "../api"

export function AddTodo()
{return (
    <div className="flex flex-col max-w-xl border 
    rounded-md p-4 mb-4 w-full">
      <h1 className="text-2xl font-semibold mb-4">Add a New Todo</h1>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-semibold mb-1">
          Title
        </label>
        <input
          type="text"
          id="titleAdd"
          className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring focus:ring-indigo-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-semibold mb-1">
          Description
        </label>
        <input
          type="text"
          id="descriptionAdd"
          className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring focus:ring-indigo-300"
        />
      </div>
      <button
        onClick={addTodo}
        className="py-1 border-2 bg-slate-400 text-white px-8 rounded-md  active:bg-slate-500 active:ring-1"
      >Add</button>
    </div>
)}