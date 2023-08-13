import { createSlice } from "@reduxjs/toolkit";

import type { TodoMap } from "@/schema-and-types";
import { type CreateTodoBoard, createTodoBoard } from "./create-todo-board.reducer";
import { type UpdateTodoBoard, updateTodoBoard } from "./update-todo-board.reducer";
import { type DeleteTodoBoard, deleteTodoBoard } from "./delete-todo-board.reducer";
import { type CreateTodo, createTodo } from "./create-todo.reducer";
import { type SetTodoBoard, setTodoBoard } from "./set-todo-board.reducer";
import { type DeleteTodo, deleteTodo } from "./delete-todo.reducer";
import { type UpdateTodo, updateTodo } from "./update-todo.reducer";

export interface TodoBoardState {
  value: TodoMap;
}

export type TodoBoardActions = {
  createTodoBoard: CreateTodoBoard;
  updateTodoBoard: UpdateTodoBoard;
  deleteTodoBoard: DeleteTodoBoard;
  createTodo: CreateTodo;
  setTodoBoard: SetTodoBoard;
  deleteTodo: DeleteTodo;
  updateTodo: UpdateTodo;
};

const initialState: TodoBoardState = {
  value: {  },
};

export const todoBoardSlice = createSlice<TodoBoardState, TodoBoardActions>({
  name: "TODO-BOARD",
  initialState,
  reducers: {
    createTodoBoard,
    updateTodoBoard,
    deleteTodoBoard,
    createTodo,
    setTodoBoard,
    deleteTodo,
    updateTodo,
  },
});

export const todoBoardActions = todoBoardSlice.actions;
export const todoBoardReducers = todoBoardSlice.reducer;
