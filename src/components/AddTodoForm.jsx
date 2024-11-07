import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uiidv4 } from "uuid";
import { addTodo } from "../redux/todoSlice";

const AddTodoForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

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
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
