import type { PayloadAction } from "@reduxjs/toolkit";

import type { ProjectState } from "@/stores/project-store";

export type DeleteTodoSection = (
  state: ProjectState,
  payload: PayloadAction<{ projectId: string; sectionId: string }>,
) => void;

export const deleteTodoSection: DeleteTodoSection = (state, { payload }) => {
  state.value[payload.projectId].todoSections = state.value[payload.projectId].todoSections.filter(
    (section) => section !== payload.sectionId,
  );
};
