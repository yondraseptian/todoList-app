import { createSlice } from "@reduxjs/toolkit";

const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
const savedFilter = localStorage.getItem("filter") || "all";
const savedSearchQuery = localStorage.getItem("searchQuery") || "";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: savedTodos,
    filter: savedFilter,
    searchQuery: savedSearchQuery,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
    removeTodo: (state, action) => {
      const updatedTodos = state.todos.filter((todo) => todo.id !== action.payload);
      state.todos = updatedTodos;
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    },
    editTodo: (state, action) => {
      const { id, title, body } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.title = title;
        todo.body = body;
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
      localStorage.setItem("filter", action.payload);
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      localStorage.setItem("searchQuery", action.payload);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, editTodo, setFilter, setSearchQuery } = todoSlice.actions;
export default todoSlice.reducer;
