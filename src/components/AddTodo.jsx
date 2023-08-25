import { addTodo } from "../api"

export function AddTodo()
{return (
    <div className="p-4 border border-gray-300 rounded-md shadow-md">
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
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:ring focus:ring-red-300"
      >Add</button>
    </div>
)}