import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { v4 as uiidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { ActionButton } from "../components/ActionButton";
import { MdDone } from "react-icons/md";

export const AddPage = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(
        addTodo({
          id: uiidv4(),
          title,
          completed: false,
        })
      );
      setTitle("");
      navigate("/");
    }
  };
  return (
    <div className="add-new-page__input">
      <form onSubmit={handleSubmit}>
        <input
          className="add-new-page__input__title"
          type="text"
          placeholder="Tuliskan judul disini..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="add-new-page__action">
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
