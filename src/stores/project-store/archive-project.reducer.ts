import type { PayloadAction } from "@reduxjs/toolkit";

import type { ProjectState } from "@/stores/project-store";

export type ArchiveProject = (state: ProjectState, payload: PayloadAction<string>) => void;

export const archiveProject: ArchiveProject = (state, { payload }) => {
  const projectContext = state.value[payload] ?? {};

  state.value[payload] = { ...projectContext, isAchive: true };
};
