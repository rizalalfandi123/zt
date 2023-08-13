import type { PayloadAction } from "@reduxjs/toolkit";

import type { TodoColumn } from "@/schema-and-types";
import type { TodoBoardState } from "@/stores/todo-column-store";

export type UpdateTodoBoard = (
  state: TodoBoardState,
  payload: PayloadAction<Partial<Omit<TodoColumn, "id">> & Pick<TodoColumn, "id">>,
) => void;

export const updateTodoBoard: UpdateTodoBoard = (state, { payload }) => {
  const existTodoBoard = state.value[payload.id] ?? {};

  state.value[payload.id] = { ...existTodoBoard, ...payload };
};
