import { todos } from "../../data/todos.json";
import FormAddTodos from "../components/FormAddTodos";
import TodoList from "../components/TodoList";

const HomePage = () => {
  return (
    <div className="px-4">
      <div className="mb-8">
        <h1 className="font-semibold text-xl">Todo List</h1>
        {todos.map((todo) => (
          <TodoList
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
      </div>

      <FormAddTodos />
    </div>
  );
};

export default HomePage;
