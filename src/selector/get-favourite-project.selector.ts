import { RootState } from "../stores";
import { Project } from "@/schema-and-types";

export type GetFavouriteProjects = (state: RootState) => Project[];

export const getFavouriteProject: GetFavouriteProjects = (state) => {
  const projectsArray = Object.entries(state.projects.value).map(([_key, project]) => project);

  return projectsArray.sort((a, b) => a.index - b.index).filter((project) => !project.isAchive && project.isFavourite);
};
