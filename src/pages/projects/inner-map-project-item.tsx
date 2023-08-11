import React from "react";
import ProjectItem from "./project-item";
import ActiveProjectOptions from "./active-project-options";
import FavouriteProjectOptions from "./favourite-project-options";
import ArchiveProjectOptions from "./archive-project-options";

import { ProjectListType } from "@/schema-and-types";
import { ProjectOptionsComponents } from "./project-options-utils";
import { projectsSelector } from "@/selector";
import { useAppSelector } from "@/hooks";

interface InnerMapProjectItemProps {
  type: ProjectListType;
}

const ProjectItemOptions: Record<ProjectListType, ProjectOptionsComponents> = {
  ACTIVE: ActiveProjectOptions,
  FAVOURITE: FavouriteProjectOptions,
  ARCHIVE: ArchiveProjectOptions,
};

const InnerMapProjectItem = React.memo<InnerMapProjectItemProps>(({ type }) => {
  const projects = useAppSelector((store) => projectsSelector(store))[type];

  return (
    <React.Fragment>
      {projects.map((project, index) => {
        return <ProjectItem project={project} key={index} options={ProjectItemOptions[type]} />;
      })}
    </React.Fragment>
  );
});

export default InnerMapProjectItem;
