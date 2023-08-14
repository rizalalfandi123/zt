import React from "react";
import Dropdown from "@/components/ui/dropdown-menu";
import Button from "@/components/ui/button";
import Tooltip, { TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib";
import type { Project } from "@/schema-and-types";
import { DotsIcon, PointIcon } from "@/components/icons";
import { projectIndicator } from "@/constants";
import { type ProjectOptionsComponents } from "./project-options-utils";

interface ProjectItemProps {
  project: Project;
  options: ProjectOptionsComponents;
}

const ProjectItem: React.FunctionComponent<ProjectItemProps> = (props) => {
  const { project, options: Options } = props;

  const location = useLocation();

  const [showOptionButton, setShowOptionButton] = React.useState<boolean>(false);

  const indicatorColor = React.useMemo(() => {
    return projectIndicator.find((indicator) => indicator.name === project.color)?.className ?? "";
  }, [project.color]);

  return (
    <Button
      variant={location.pathname === `/projects/${project.id}` ? "secondary" : "ghost"}
      className="w-full justify-start block"
      onMouseOver={() => setShowOptionButton(true)}
      onMouseLeave={() => setShowOptionButton(false)}
      onBlur={() => setShowOptionButton(false)}
      asChild
    >
      <div className="flex items-center justify-between">
        <NavLink to={`/project/${project.id}`} className="grow flex items-center justify-start">
          <div className="flex gap-2 items-center">
            <PointIcon className={indicatorColor} />
            {project.name}
          </div>
        </NavLink>

        <Options project={project}>
          <Tooltip>
            <Dropdown.Trigger asChild>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(["invisible focus-visible:ring-0", { visible: showOptionButton }])}
                >
                  <DotsIcon />
                </Button>
              </TooltipTrigger>
            </Dropdown.Trigger>
            <TooltipContent asChild>
              <p>More Project Action</p>
            </TooltipContent>
          </Tooltip>
        </Options>
      </div>
    </Button>
  );
};

export default ProjectItem;
