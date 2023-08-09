import React from "react";
import Dropdown from "@/components/ui/dropdown-menu";
import Button from "@/components/ui/button";
import Tooltip from "@/components/ui/tooltip";

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib";
import { Project } from "@/schema-and-types";
import { DotsIcon, PointIcon } from "@/components/icons";
import { projectIndicator } from "@/constants";
import { projectActions } from "@/stores/project-store";
import { useAppDispatch } from "@/hooks";

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FunctionComponent<ProjectItemProps> = (props) => {
  const { project } = props;

  const location = useLocation();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [showOption, setShowOption] = React.useState<boolean>(false);

  const handleDeleteProject = () => {
    dispatch(projectActions.deleteProject(project.id));
  };

  const handleUpdateProject = () => {
    navigate(`/update-project/${project.id}`, { state: { backgroundLocation: location } });
  };

  return (
    <Button
      variant={location.pathname === `/projects/${project.id}` ? "secondary" : "ghost"}
      className="w-full justify-start block"
      onMouseOver={() => setShowOption(true)}
      onMouseLeave={() => setShowOption(false)}
      asChild
    >
      <div className="flex items-center justify-between">
        <NavLink to={`/project/${project.id}`} className="grow flex items-center justify-start">
          <div className="flex gap-2 items-center">
            <PointIcon
              className={cn(projectIndicator.find((indicator) => indicator.name === project.color)?.className)}
            />
            {project.name}
          </div>
        </NavLink>

        <Dropdown.Menu>
          <Tooltip.Provider>
            <Tooltip.Root>
              <Dropdown.Trigger asChild>
                <Tooltip.Trigger asChild>
                  <Button variant="ghost" size="icon" className={cn(["invisible", { visible: showOption }])}>
                    <DotsIcon />
                  </Button>
                </Tooltip.Trigger>
              </Dropdown.Trigger>
              <Tooltip.Content>
                <p>More Project Action</p>
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
          <Dropdown.Content>
            <Dropdown.Item onClick={handleDeleteProject}>Delete</Dropdown.Item>
            <Dropdown.Separator />
            <Dropdown.Item onClick={handleUpdateProject}>Edit</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown.Menu>
      </div>
    </Button>
  );
};

export default ProjectItem;
