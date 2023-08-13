import type { TodoBoard, TodoMap } from "@/schema-and-types";
import { RootState } from "@/stores";
import { createSelector } from "reselect";

const selectSections = (store: RootState) => store.todoBoard.value;

const selectProjects = (store: RootState) => store.projects.value;

export const boardSelector = createSelector([selectProjects, selectSections], (projects, sections) => {
  const todoBoards: Record<string, TodoBoard> = {};

  Object.keys(projects).forEach((projectId) => {
    const ordered = projects[projectId].todoSections;

    const columns: TodoMap = ordered.reduce((previousValue, currentValue) => {
      return Object.assign(previousValue, { [currentValue]: sections[currentValue] });
    }, {});

    const todoBoard: TodoBoard = { columns, ordered };

    todoBoards[projectId] = todoBoard
  });

  return todoBoards
});
