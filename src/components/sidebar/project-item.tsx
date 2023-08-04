import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import * as Dropdown from "@/components/ui/dropdown-menu";
import Button from "@/components/ui/button";
import { Project } from "@/schema";
import { cn, useDeleteProject, projectIndicator } from "@/lib";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { DotsIcon, PointIcon } from "@/components/icons";

interface ProjectItemProps {
  project: Project;
}

export const ProjectItem: React.FunctionComponent<ProjectItemProps> = (props) => {
  const { project } = props;

  const location = useLocation();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutateAsync: deleteProject } = useDeleteProject();

  const [showOption, setShowOption] = React.useState<boolean>(false);

  const handleDeleteProject = async () => {
    await deleteProject(project._id);

    queryClient.invalidateQueries(["PROJECTS"]);
  };

  const handleUpdateProject = () => {
    navigate(`/update-project/${project._id}`, { state: { backgroundLocation: location } });
  };

  return (
    <Button
      variant={location.pathname === `/projects/${project._id}` ? "secondary" : "ghost"}
      className="w-full justify-start block"
      onMouseOver={() => setShowOption(true)}
      onMouseLeave={() => setShowOption(false)}
      asChild
    >
      <div className="flex items-center justify-between">
        <NavLink to={`/projects/${project._id}`} className="grow flex items-center justify-start">
          <div className="flex gap-2 items-center">
            <PointIcon
              className={cn(projectIndicator.find((indicator) => indicator.name === project.color)?.className)}
            />
            {project.name}
          </div>
        </NavLink>

        <Dropdown.DropdownMenu>
          <TooltipProvider>
            <Tooltip>
              <Dropdown.DropdownMenuTrigger asChild>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className={cn(["invisible", { visible: showOption }])}>
                    <DotsIcon />
                  </Button>
                </TooltipTrigger>
              </Dropdown.DropdownMenuTrigger>
              <TooltipContent>
                <p>More Project Action</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Dropdown.DropdownMenuContent>
            <Dropdown.DropdownMenuItem onClick={handleDeleteProject}>Delete</Dropdown.DropdownMenuItem>
            <Dropdown.DropdownMenuSeparator />
            <Dropdown.DropdownMenuItem onClick={handleUpdateProject}>Edit</Dropdown.DropdownMenuItem>
          </Dropdown.DropdownMenuContent>
        </Dropdown.DropdownMenu>
      </div>
    </Button>
  );
};
