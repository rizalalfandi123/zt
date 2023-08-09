import type { PayloadAction } from "@reduxjs/toolkit";

import type { ProjectState } from "@/stores/project-store";

export type AddNewTodoSection = (state: ProjectState, payload: PayloadAction<{projectId: string, sectionId: string}>) => void;

export const addNewTodoSection: AddNewTodoSection = (state, { payload }) => {
  state.value[payload.projectId].todoSections.push(payload.sectionId)
};
