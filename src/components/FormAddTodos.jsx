/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";

const FormAddTodos = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    const todo = { title };

    try {
      const res = await axios.post(
        "http://localhost:8000/todos",
        JSON.stringify(todo),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setTitle("");
      onAddTodo();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form action="/" className="my-1" onSubmit={handleSubmit}>
        <textarea
          type="text"
          className="w-full border-2 p-2 border-blue-200 focus:outline-none focus:ring focus:ring-blue-200 rounded"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        ></textarea>
        <button
          type="submit"
          className="px-2 py-1 w-full bg-blue-500 text-slate-100 rounded font-medium"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default FormAddTodos;
