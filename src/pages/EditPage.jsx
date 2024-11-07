import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { editTodo } from "../redux/todoSlice";
import { ActionButton } from "../components/ActionButton";
import { MdDone } from "react-icons/md";

export const EditPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const todos = useSelector((state) => state.todos.todos); 
  const todo = todos.find((todo) => todo.id === id);

  useEffect(() => {
    if (!todo) {
      navigate("/"); 
    }
  }, [todo, navigate]);

  const [title, setTitle] = useState(todo ? todo.title : "");

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
    }
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim()) {
      dispatch(
        editTodo({
          id,
          title,
          completed: todo.completed, 
        })
      );
      navigate("/"); 
    }
  };

  return (
    <div className="edit-page__input">
      <form onSubmit={handleSubmit}>
        <input
          className="edit-page__input__title"
          type="text"
          placeholder="Edit judul disini..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="edit-page__action">
          <button type="submit">
            <ActionButton>
              <MdDone />
            </ActionButton>
          </button>
        </div>
      </form>
    </div>
  );
};