import type { PayloadAction } from "@reduxjs/toolkit";
import type { ProjectState } from "@/stores/project-store";

export type SetTodoSection = (
  state: ProjectState,
  payload: PayloadAction<{projectId: string, todoSections: string[]}>,
) => void;

export const setTodoSection: SetTodoSection = (state, { payload }) => {
  state.value[payload.projectId].todoSections = payload.todoSections
};
