import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../redux/todoSlice";
import { useNavigate } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import styles from "../styles/style.module.css";

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
    <div className={styles.todoItem}>
      <div
        className={`${styles.todoItemTitle} ${todo.completed ? styles.completedTitle : ""}`}
      >
        <h2>{todo.title}</h2>
      </div>
      <div className={styles.todoItemActions}>
        <input
          type="checkbox"
          className={styles.checkTodo}
          checked={todo.completed}
          onChange={handleToggle}
          aria-checked={todo.completed ? "true" : "false"} // Add aria-checked for accessibility
        />
        <button
          className={styles.todoItemActionsButton}
          onClick={() => navigate(`/edit/${todo.id}`)}
          aria-label="Edit todo"
        >
          <MdEdit />
        </button>
        <button
          className={styles.todoItemActionsButton}
          onClick={handleDelete}
          aria-label="Delete todo"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
