import { RootState } from "@/stores";
import { createSelector } from "reselect";

const selectSections = (store: RootState) => store.todoBoard.value;

export const sectionSelector = (sectionId: string) => createSelector(selectSections, (sections) => {
  return sections[sectionId]
});
