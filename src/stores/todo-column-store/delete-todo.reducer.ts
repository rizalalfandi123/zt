import type { PayloadAction } from "@reduxjs/toolkit";

import type { TodoBoardState } from "@/stores/todo-column-store";

export type DeleteTodo = (state: TodoBoardState, payload: PayloadAction<{ sectionId: string; todoId: string }>) => void;

export const deleteTodo: DeleteTodo = (state, { payload }) => {
  state.value[payload.sectionId].todo = state.value[payload.sectionId].todo.filter(
    (todo) => todo.id !== payload.todoId,
  );
};
