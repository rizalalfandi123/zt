import type { PayloadAction } from "@reduxjs/toolkit";

import type { TodoColumn } from "@/schema-and-types";
import type { TodoBoardState } from "@/stores/todo-column-store";

export type CreateTodoBoard = (state: TodoBoardState, payload: PayloadAction<TodoColumn>) => void;

export const createTodoBoard: CreateTodoBoard = (state, { payload }) => {
  state.value[payload.id] = payload;
  // state.value.ordered.push(payload.id);
};
