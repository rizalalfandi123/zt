import { z } from "zod";
import { projectFormSchema, todoSectionFormSchema } from "./schema";
import { type Icon } from "@/components/icons";
import { RouteProps } from "react-router-dom";

export interface OptionItem {
  label: string;
  icon: Icon;
  onClick: () => void;
}

export interface SortableModel {
  index: number;
}
export interface TodoColumn extends TodoSection {
  todo: Todo[];
}

export type TodoMap = Record<string, TodoColumn>;

export interface TodoBoard {
  columns: TodoMap;
  ordered: string[];
}

export type ProjectView = "BOARD" | "LIST";

export type ProjectGrouping = "NONE" | "DUE_DATE" | "DUE_ADDED" | "PRIORITY" | "LABEL";

export type ProjectSorting = "DEFAULT" | "DUE_DATE" | "DUE_ADDED" | "PRIORITY" | "LABEL";

export type ScreenMode = "dark" | "light";

export type AppTheme = Record<ScreenMode, string>;

export type ProjectForm = z.infer<typeof projectFormSchema>;

export type TodoSectionForm = z.infer<typeof todoSectionFormSchema>;
export interface Todo {
  id: string;
  title: string;
  description?: string;
  isChecked: boolean;
  projectId: string;
  sectionId: string;
}

export interface Project extends ProjectForm, SortableModel {
  id: string;
  isFavourite: boolean;
  isAchive: boolean;
  view: ProjectView;
  sorting: ProjectSorting;
  grouping: ProjectGrouping;
  todoSections: string[];
}

export interface TodoSection extends TodoSectionForm {
  id: string;
  projectId: string;
}

export type AppRoute = {
  isModal: boolean;
} & RouteProps;

export type ProjectListType = "ARCHIVE" | "ACTIVE" | "FAVOURITE";
