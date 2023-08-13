import { OptionItem, Project } from "@/schema-and-types";
import React from "react";

export interface ProjectOptionsProps extends React.PropsWithChildren {
  project: Project;
}

export type ProjectOptionsComponents = React.FunctionComponent<ProjectOptionsProps>;

export type ProjectOption = OptionItem | React.ReactNode;

export function isOptionItem(item: ProjectOption): item is OptionItem {
  return (item as OptionItem).label !== undefined;
}
