import type { Todo, TodoBoard, TodoMap } from "@/lib";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

const initial: TodoMap = { "board satu": [], "board dua": [] };

type TodoState = {
  value: TodoBoard;
};

type TodoReducers = {
  setBoard: (state: TodoState, payload: PayloadAction<TodoBoard>) => void;
  createNewTodo: (state: TodoState, payload: PayloadAction<{ boardId: string; todo: Todo }>) => void;
  updateTodo: (state: TodoState, payload: PayloadAction<{ boardId: string; todo: Partial<Todo> }>) => void;
};

const initialState: TodoState = {
  value: { columns: initial, ordered: Object.keys(initial) },
};

const updateTodo: TodoReducers["updateTodo"] = (state, { payload }) => {
  const indexTodoContext = state.value.columns[payload.boardId].findIndex((todo) => todo.id === payload.todo.id);

  if (indexTodoContext !== -1) {
    console.log({ indexTodoContext, payload, list: state.value });
    state.value.columns[payload.boardId][indexTodoContext] = {
      ...state.value.columns[payload.boardId][indexTodoContext],
      ...payload.todo,
    };
  }
};

const createNewTodo: TodoReducers["createNewTodo"] = (state, { payload }) => {
  const boardContext = state.value.columns[payload.boardId];
  boardContext.push(payload.todo);
  state.value.columns[payload.boardId] = boardContext;
};

const setBoard: TodoReducers["setBoard"] = (state, { payload }) => {
  state.value = payload;
};

export const todoSlice = createSlice<TodoState, TodoReducers>({
  name: "TODO",
  initialState,
  reducers: {
    createNewTodo,
    updateTodo,
    setBoard,
  },
});

export const { actions: todoActions, reducer: todoReducer } = todoSlice;
