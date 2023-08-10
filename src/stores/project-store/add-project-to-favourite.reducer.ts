import type { PayloadAction } from "@reduxjs/toolkit";

import type { ProjectState } from "@/stores/project-store";

export type AddProjectToFavourite = (
  state: ProjectState,
  payload: PayloadAction<string>,
) => void;

export const addProjectToFavourite: AddProjectToFavourite = (state, { payload }) => {
  const projectContext = state.value[payload] ?? {};
  
  state.value[payload] = { ...projectContext, isFavourite: true };
};

