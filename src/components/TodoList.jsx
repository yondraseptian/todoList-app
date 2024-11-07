import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, filter, searchQuery } = useSelector((state) => state.todos);

  const filteredTodos = todos
    .filter((todo) => {
      if (filter === "completed") {
        return todo.completed;
      } else if (filter === "uncompleted") {
        return !todo.completed;
      } else {
        return true;
      }
    })
    .filter((todo) => {
      return todo.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

  return (
    <div className="todo-list">
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <div className="todo-list-empty">
          <p>No todos available. Add a new todo!</p>
        </div>
      )}
    </div>
  );
};

export default TodoList;
