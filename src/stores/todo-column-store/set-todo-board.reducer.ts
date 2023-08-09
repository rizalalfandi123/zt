import type { PayloadAction } from "@reduxjs/toolkit";

import type { TodoBoard } from "@/schema-and-types";
import type { TodoBoardState } from "@/stores/todo-column-store";

export type SetTodoBoard = (state: TodoBoardState, payload: PayloadAction<TodoBoard>) => void;

export const setTodoBoard: SetTodoBoard = (state, { payload }) => {
  state.value = payload;
};
