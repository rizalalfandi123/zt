import { z } from "zod";
import { projectFormSchema, todoSectionFormSchema } from "./schema";

export interface BasicModelWithRef {
  _id: string;
  _rev: string;
}

export interface TodoColumn extends TodoSection {
  todo: Todo[];
}

export type TodoMap = Record<
  string,
  TodoColumn
>;

export interface TodoBoard {
  columns: TodoMap;
  ordered: string[];
}

export type ProjectView = "BOARD" | "LIST";

export type ScreenMode = "dark" | "light";

export type AppTheme = Record<ScreenMode, string>;

// FORM
export type ProjectForm = z.infer<typeof projectFormSchema>;

export type TodoSectionForm = z.infer<typeof todoSectionFormSchema>;

// MODEL
export interface Todo {
  id: string;
  title: string;
  description: string;
  isChecked: boolean;
  projectId: string;
  sectionId: string;
}

export interface Project extends ProjectForm {
  id: string;
  isFavourite: boolean;
  view: ProjectView;
  todoSections: string[]
}

export interface TodoSection extends TodoSectionForm {
  id: string;
  projectId: string;
}
