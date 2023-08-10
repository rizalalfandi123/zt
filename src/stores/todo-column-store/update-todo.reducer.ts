import type { PayloadAction } from "@reduxjs/toolkit";

import type { TodoBoardState } from "@/stores/todo-column-store";
import { Todo } from "@/schema-and-types";

export type UpdateTodo = (
  state: TodoBoardState,
  payload: PayloadAction<Partial<Omit<Todo, "id" | "sectionId">> & Pick<Todo, "id" | "sectionId">>,
) => void;

export const updateTodo: UpdateTodo = (state, { payload }) => {
  const todoContext = state.value.columns[payload.sectionId].todo.findIndex((todo) => todo.id === payload.id);

  if (todoContext !== -1) {
    state.value.columns[payload.sectionId].todo[todoContext] = {
      ...state.value.columns[payload.sectionId].todo[todoContext],
      ...payload,
    };
  }
};
