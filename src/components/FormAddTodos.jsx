/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";

const FormAddTodos = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const todo = { title };

    try {
      const res = await axios.post(
        "http://localhost:8000/todos",
        JSON.stringify(todo),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form action="" className="my-1">
        <textarea
          type="text"
          className="w-full border-2 p-2 border-first rounded"
          onChange={(e) => setTitle(e.target.value)}
          required
        ></textarea>
        <button
          type="submit"
          className="border-2 px-2 w-full border-first bg-second text-slate-100 rounded"
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default FormAddTodos;
