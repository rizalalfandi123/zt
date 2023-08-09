import type { PayloadAction } from "@reduxjs/toolkit";

import type { Project } from "@/schema-and-types";
import type { ProjectState } from "@/stores/project-store";

export type CreateProject = (state: ProjectState, payload: PayloadAction<Project>) => void;

export const createProject: CreateProject = (state, { payload }) => {
  state.value[payload.id] = payload;
};
