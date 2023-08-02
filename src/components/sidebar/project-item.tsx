import { Project } from "@/schema";
import Button from "@/components/ui/button";
import { DotsIcon, PointIcon } from "../icons";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib";
import { projectIndicator } from "@/lib/constants";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDeleteProject } from "@/lib/queries";
import { useQueryClient } from "@tanstack/react-query";

interface ProjectItemProps {
  project: Project;
}

export const ProjectItem: React.FunctionComponent<ProjectItemProps> = (props) => {
  const { project } = props;

  const location = useLocation();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutateAsync: deleteProject } = useDeleteProject();

  const [showOption, setShowOption] = useState<boolean>(false);

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

        <DropdownMenu>
          <TooltipProvider>
            <Tooltip>
              <DropdownMenuTrigger asChild>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className={cn(["invisible", { visible: showOption }])}>
                    <DotsIcon />
                  </Button>
                </TooltipTrigger>
              </DropdownMenuTrigger>
              <TooltipContent>
                <p>More Project Action</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={handleDeleteProject}>Delete</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleUpdateProject}>Edit</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Button>
  );
};
