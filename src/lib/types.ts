export interface BasicModel {
  _id: string;
}

export interface BasicModelWithRef {
  _id: string;
  _rev: string;
}

export interface Todo {
  id: string;
  title: string;
  description?: string;
  isChecked: boolean;
}

export type TodoMap = Record<string, Todo[]>;

export interface TodoBoard {
  columns: TodoMap;
  ordered: string[];
}

export type ScreenMode = "dark" | "light";

export type AppTheme = Record<ScreenMode, string>;
