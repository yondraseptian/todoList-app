import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { reorderTodos } from "../redux/todoSlice";
import { useMemo } from "react";
import styles from "../styles/style.module.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TodoList = () => {
  const { todos, filter, searchQuery } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const filteredTodos = useMemo(() => {
    return todos
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
  }, [todos, filter, searchQuery]);

  const handleDragEnd = (result) => {
    const { destination, source } = result;
  
    // Periksa apakah drop destination ada
    console.log("Destination:", destination);
    console.log("Source:", source);
  
    // Return jika dropped di luar list atau tidak ada perubahan index
    if (!destination || destination.index === source.index) return;
  
    dispatch(
      reorderTodos({
        startIndex: source.index,
        endIndex: destination.index,
      })
    );
  };
  

  return (
    <div className={styles.todoList}>
      {filteredTodos.length > 0 ? (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="todoList">
            {(provided) => (
              <div
                className="todo-list-container"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {filteredTodos.map((todo, index) => (
                  <Draggable
                    key={todo.id}
                    draggableId={todo.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="todoItem"
                      >
                        <TodoItem todo={todo} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
        <div className={styles.todoListEmpty}>
          <p>No todos available. Add a new todo!</p>
        </div>
      )}
    </div>
  );
};

export default TodoList;
