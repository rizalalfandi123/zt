import { createSlice } from "@reduxjs/toolkit";

import type { Project } from "@/schema-and-types";
import { type CreateProject, createProject } from "./create-project.reducer";
import { type UpdateProject, updateProject } from "./update-project.reducer";
import { type DeleteProject, deleteProject } from "./delete-project.reducer";
import { type AddNewTodoSection, addNewTodoSection } from "./add-new-todo-section.reducer";
import { type DeleteTodoSection, deleteTodoSection } from "./delete-todo-section.reducer";
import { type AddProjectToFavourite, addProjectToFavourite } from "./add-project-to-favourite.reducer";
import { type RemoveProjectFromFavourite, removeProjectFromFavourite } from "./remove-project-from-favourite.reducer";
import { type ArchiveProject, archiveProject } from "./archive-project.reducer";
import { type UnArchiveProject, unarchiveProject } from "./unarchive-project.reducer";
import { type SetTodoSection, setTodoSection } from "./set-todo-section.reducer";

export interface ProjectState {
  value: Record<string, Project>;
}

export type ProjectActions = {
  createProject: CreateProject;
  updateProject: UpdateProject;
  deleteProject: DeleteProject;
  addNewTodoSection: AddNewTodoSection;
  deleteTodoSection: DeleteTodoSection;
  addProjectToFavourite: AddProjectToFavourite;
  removeProjectFromFavourite: RemoveProjectFromFavourite;
  archiveProject: ArchiveProject;
  unarchiveProject: UnArchiveProject;
  setTodoSection: SetTodoSection
};

const initialState: ProjectState = {
  value: {},
};

export const projectSlice = createSlice<ProjectState, ProjectActions>({
  name: "PROJECT",
  initialState,
  reducers: {
    createProject,
    updateProject,
    deleteProject,
    addNewTodoSection,
    deleteTodoSection,
    addProjectToFavourite,
    removeProjectFromFavourite,
    archiveProject,
    unarchiveProject,
    setTodoSection
  },
});

export const projectActions = projectSlice.actions;
export const projectReducers = projectSlice.reducer;
