import type { PayloadAction } from "@reduxjs/toolkit";

import type { Todo } from "@/schema-and-types";
import type { TodoBoardState } from "@/stores/todo-column-store";

export type CreateTodo = (state: TodoBoardState, payload: PayloadAction<Todo>) => void;

export const createTodo: CreateTodo = (state, { payload }) => {
  state.value.columns[payload.sectionId].todo.push(payload) 
};
