/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../redux/todoSlice";
import { useNavigate } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <div className="todo-item">
      <div
        className={`todo-item__title ${todo.completed ? "completed" : ""}`}
      >
        <h2>{todo.title}</h2>
      </div>
      <div className="todo-item__actions">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          aria-label="Toggle todo completion"
        />
        <button onClick={() => navigate(`/edit/${todo.id}`)}>
          <MdEdit />
        </button>
        <button onClick={handleDelete} aria-label="Delete todo">
        <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
