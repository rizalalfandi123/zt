import { Project, ProjectListType } from "@/schema-and-types";
import { RootState } from "@/stores";
import { createSelector } from "reselect";

const sortProjects = (projects: Project[]) => projects.sort((a, b) => a.index - b.index);

const selectProjects = (store: RootState) => store.projects.value;

export const projectsSelector = createSelector(selectProjects, (projects) => {
  const projectsArray = Object.entries(projects).map(([_key, project]) => project);

  const activeProjects = projectsArray.filter((project) => !project.isAchive);
  const favouriteProjects = projectsArray.filter((project) => !project.isAchive && project.isFavourite);
  const archiveProjects = projectsArray.filter((project) => project.isAchive);

  const data: Record<ProjectListType, Project[]> = {
    ACTIVE: sortProjects(activeProjects),
    ARCHIVE: sortProjects(archiveProjects),
    FAVOURITE: sortProjects(favouriteProjects),
  };

  return data;
});
