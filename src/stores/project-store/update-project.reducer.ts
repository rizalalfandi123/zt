import type { PayloadAction } from "@reduxjs/toolkit";

import type { Project } from "@/schema-and-types";
import type { ProjectState } from "@/stores/project-store";

export type UpdateProject = (
  state: ProjectState,
  payload: PayloadAction<Partial<Omit<Project, "id">> & Pick<Project, "id">>,
) => void;

export const updateProject: UpdateProject = (state, { payload }) => {
  const existProject = state.value[payload.id] ?? {};

  state.value[payload.id] = { ...existProject, ...payload };
};
