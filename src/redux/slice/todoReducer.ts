import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoState {
  todos: any;
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state: any, action: any) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state: any, action: any) => {
      const todoIndex = state.todos.findIndex(
        (todo: any) => todo.id === action.payload.id
      );
      if (todoIndex !== -1) {
        state.todos[todoIndex] = action.payload;
      }
    },
    updateTodoStatus: (state: any, action: any) => {
      const todoIndex = state.todos.findIndex(
        (todo: any) => todo.id === action.payload.id
      );

      if (todoIndex !== -1) {
        state.todos[todoIndex].status = action.payload.status;
      }
    },

    deleteTodo: (state: any, action: any) => {
      state.todos = state.todos.filter(
        (todo: any) => todo.id !== action.payload
      );
    },
  },
});

export const { addTodo, updateTodo, updateTodoStatus, deleteTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
