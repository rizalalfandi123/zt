import type { PayloadAction } from "@reduxjs/toolkit";

import type { ProjectState } from "@/stores/project-store";

export type UnArchiveProject = (state: ProjectState, payload: PayloadAction<string>) => void;

export const unarchiveProject: UnArchiveProject = (state, { payload }) => {
  const projectContext = state.value[payload] ?? {};

  state.value[payload] = { ...projectContext, isAchive: false };
};
