import {Project } from "@/schema-and-types";
import React from "react";

export interface ProjectOptionsProps extends React.PropsWithChildren {
  project: Project;
}

export type ProjectOptionsComponents = React.FunctionComponent<ProjectOptionsProps>;