import { createSlice } from "@reduxjs/toolkit";

import type { TodoBoard } from "@/schema-and-types";
import { type CreateTodoBoard, createTodoBoard } from "./create-todo-board.reducer";
import { type UpdateTodoBoard, updateTodoBoard } from "./update-todo-board.reducer";
import { type DeleteTodoBoard, deleteTodoBoard } from "./delete-todo-board.reducer";
import { type CreateTodo, createTodo } from "./create-todo.reducer";
import { type SetTodoBoard, setTodoBoard } from "./set-todo-board.reducer";

export interface TodoBoardState {
  value: TodoBoard;
}

export type TodoBoardActions = {
  createTodoBoard: CreateTodoBoard;
  updateTodoBoard: UpdateTodoBoard;
  deleteTodoBoard: DeleteTodoBoard;
  createTodo: CreateTodo;
  setTodoBoard: SetTodoBoard
};

const initialState: TodoBoardState = {
  value: { columns: {}, ordered: [] },
};

export const todoBoardSlice = createSlice<TodoBoardState, TodoBoardActions>({
  name: "TODO-BOARD",
  initialState,
  reducers: {
    createTodoBoard,
    updateTodoBoard,
    deleteTodoBoard,
    createTodo,
    setTodoBoard
  },
});

export const todoBoardActions = todoBoardSlice.actions;
export const todoBoardReducers = todoBoardSlice.reducer;
