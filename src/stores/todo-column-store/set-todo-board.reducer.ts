import type { PayloadAction } from "@reduxjs/toolkit";

import type { TodoMap } from "@/schema-and-types";
import type { TodoBoardState } from "@/stores/todo-column-store";

export type SetTodoBoard = (state: TodoBoardState, payload: PayloadAction<TodoMap>) => void;

export const setTodoBoard: SetTodoBoard = (state, { payload }) => {
  state.value = {...state.value, ...payload};
};
