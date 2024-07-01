import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import FormAddTodos from "../components/FormAddTodos";
import TodoList from "../components/TodoList";

const HomePage = () => {
  const [reload, setReload] = useState(false);
  const { data: todos } = useFetch("http://localhost:8000/todos");

  useEffect(() => {
    // This effect runs whenever `reload` changes, causing the data to re-fetch
  }, [reload]);

  const handleReload = () => {
    setReload(!reload);
  };

  return (
    <div className="px-4">
      <div className="mb-8">
        <h1 className="font-semibold text-xl">Todo List</h1>
        {todos.map((todo) => (
          <TodoList
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
      </div>

      <FormAddTodos onAddTodo={handleReload} />
    </div>
  );
};

export default HomePage;
