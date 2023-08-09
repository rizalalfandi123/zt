import type { Todo, TodoBoard, TodoMap } from "@/schema-and-types";
import { type TodoSection } from "@/schema-and-types";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

const initial: TodoMap = {};

type TodoState = {
  value: TodoBoard;
};

type TodoReducers = {
  setBoard: (state: TodoState, payload: PayloadAction<TodoBoard>) => void;
  createNewTodo: (state: TodoState, payload: PayloadAction<{ boardId: string; todo: Todo }>) => void;
  updateTodo: (state: TodoState, payload: PayloadAction<{ boardId: string; todo: Partial<Todo> }>) => void;
  createNewSection: (state: TodoState, payload: PayloadAction<TodoSection>) => void;
  // updateBoard: (state: TodoState) => void;
};

const initialState: TodoState = {
  value: { columns: initial, ordered: Object.keys(initial) },
};

const updateTodo: TodoReducers["updateTodo"] = (state, { payload }) => {
  const indexTodoContext = state.value.columns[payload.boardId].todo.findIndex((todo) => todo.id === payload.todo.id);

  if (indexTodoContext !== -1) {
    state.value.columns[payload.boardId].todo[indexTodoContext] = {
      ...state.value.columns[payload.boardId].todo[indexTodoContext],
      ...payload.todo,
    };
  }
};

const createNewTodo: TodoReducers["createNewTodo"] = (state, { payload }) => {
  const boardContext = state.value.columns[payload.boardId];

  const boardContextTodo = state.value.columns[payload.boardId].todo;

  boardContextTodo.push(payload.todo);

  boardContext.todo = boardContextTodo;

  state.value.columns[payload.boardId] = boardContext;
};

const setBoard: TodoReducers["setBoard"] = (state, { payload }) => {
  state.value = payload;
};

const createNewSection: TodoReducers["createNewSection"] = (state, { payload }) => {
  const existColumns = state.value.columns;

  existColumns[payload.id] = { ...payload, todo: [] };

  state.value.ordered = Object.keys(existColumns);
};


export const todoSlice = createSlice<TodoState, TodoReducers>({
  name: "TODO",
  initialState,
  reducers: {
    createNewTodo,
    updateTodo,
    setBoard,
    createNewSection,
  },
});

export const { actions: todoActions, reducer: todoReducer } = todoSlice;
