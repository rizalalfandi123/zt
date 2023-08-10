import type { PayloadAction } from "@reduxjs/toolkit";

import type { Project } from "@/schema-and-types";
import type { ProjectState } from "@/stores/project-store";
import { getMaximumIndex, getModelsAfterIndex } from "@/helpers";
export interface CreateProjectPayload extends Omit<Project, "index"> {
  targetIndex?: number
}

export type CreateProject = (
  state: ProjectState,
  payload: PayloadAction<CreateProjectPayload>,
) => void;


export const createProject: CreateProject = (state, { payload }) => {
  const maxIndex = getMaximumIndex(state.value);

  const { targetIndex, ...project } = payload;

  if (targetIndex) {
    const effectedProjects = getModelsAfterIndex<Project>(state.value, targetIndex);

    effectedProjects.forEach((project) => {
      state.value[project.id] = { ...state.value[project.id], index: state.value[project.id].index + 1 };
    });

    state.value[payload.id] = { ...project, index: targetIndex };
  } else {
    state.value[payload.id] = { ...project, index: maxIndex + 1 };
  }
};
