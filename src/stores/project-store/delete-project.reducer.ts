import type { PayloadAction } from "@reduxjs/toolkit";

import type { ProjectState } from "@/stores/project-store";

export type DeleteProject = (state: ProjectState, payload: PayloadAction<string>) => void;

export const deleteProject: DeleteProject = (state, { payload }) => {
  delete state.value[payload];
};
