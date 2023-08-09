import type { PayloadAction } from "@reduxjs/toolkit";

import type { TodoBoardState } from "@/stores/todo-column-store";

export type DeleteTodoBoard = (state: TodoBoardState, payload: PayloadAction<string>) => void;

export const deleteTodoBoard: DeleteTodoBoard = (state, { payload }) => {
  delete state.value.columns[payload]
  state.value.ordered = state.value.ordered.filter(id => id !== payload)
};
