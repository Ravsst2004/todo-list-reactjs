/* eslint-disable react/prop-types */
import axios from "axios";
import Trash from "../assets/svg/trash.svg";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";

const TodoList = ({ title, id }) => {
  const navigate = useNavigate();
  // const [error, setError] = useState(null);

  const todoId = id;

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/todos/${todoId}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex gap-x-4 cursor-pointer my-1 justify-between">
        <input type="checkbox" className="peer cursor-pointer" />
        <p className="peer-checked:line-through">{title}</p>
        <img src={Trash} alt="Delete" width={20} onClick={handleDelete} />
      </div>
    </div>
  );
};

export default TodoList;
