/* eslint-disable react/prop-types */
import Trash from "../assets/svg/trash.svg";

const TodoList = ({ title }) => {
  return (
    <div>
      <div className="flex gap-x-4 cursor-pointer my-1 justify-between">
        <input type="checkbox" className="peer cursor-pointer" />
        <p className="peer-checked:line-through">{title}</p>
        <img src={Trash} alt="Delete" width={20} />
      </div>
    </div>
  );
};

export default TodoList;
