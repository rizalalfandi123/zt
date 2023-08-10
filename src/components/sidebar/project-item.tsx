import React from "react";
import Dropdown from "@/components/ui/dropdown-menu";
import Button from "@/components/ui/button";
import Tooltip from "@/components/ui/tooltip";

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib";
import type { OptionItem, Project } from "@/schema-and-types";
import { DotsIcon, EditIcon, PointIcon, TrashIcon, ArrowDownIcon, ArrowUpIcon } from "@/components/icons";
import { projectIndicator } from "@/constants";
import { projectActions } from "@/stores/project-store";
import { useAppDispatch } from "@/hooks";

interface ProjectItemProps {
  project: Project;
}

type ProjectOption = OptionItem | React.ReactNode;

function isOptionItem(item: ProjectOption): item is OptionItem {
  return (item as OptionItem).label !== undefined;
}

const ProjectItem: React.FunctionComponent<ProjectItemProps> = (props) => {
  const { project } = props;

  const location = useLocation();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [showOptionBitton, setShowOptionButton] = React.useState<boolean>(false);

  const handleDeleteProject = () => {
    dispatch(projectActions.deleteProject(project.id));
  };

  const handleUpdateProject = () => {
    navigate(`/update-project/${project.id}`, { state: { backgroundLocation: location } });
  };

  const handleAddProjectInSpecificIndex = (targetIndex: number) => () => {
    navigate("/create-project", { state: { backgroundLocation: location, targetIndex } });
  };

  const projectOptions: ProjectOption[] = React.useMemo(() => {
    const options: ProjectOption[] = [
      { icon: ArrowUpIcon, label: "Add Project Above", onClick: handleAddProjectInSpecificIndex(project.index) },
      { icon: ArrowDownIcon, label: "Add Project Below", onClick: handleAddProjectInSpecificIndex(project.index + 1) },
      <hr />,
      { icon: EditIcon, label: "Edit", onClick: handleUpdateProject },
      <hr />,
      { icon: TrashIcon, label: "Delete", onClick: handleDeleteProject },
    ];

    return options;
  }, []);

  return (
    <Button
      variant={location.pathname === `/projects/${project.id}` ? "secondary" : "ghost"}
      className="w-full justify-start block"
      onMouseOver={() => setShowOptionButton(true)}
      onMouseLeave={() => setShowOptionButton(false)}
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
                  <Button variant="ghost" size="icon" className={cn(["invisible", { visible: showOptionBitton }])}>
                    <DotsIcon />
                  </Button>
                </Tooltip.Trigger>
              </Dropdown.Trigger>
              <Tooltip.Content>
                <p>More Project Action</p>
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
          <Dropdown.Content className="w-56 space-y-1">
            {projectOptions.map((option, index) => {
              if (!isOptionItem(option)) {
                return <React.Fragment key={index}>{option}</React.Fragment>;
              }

              return (
                <Dropdown.Item onClick={option.onClick} key={index}>
                  <option.icon className="mr-2 w-5 h-5" />
                  {option.label}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Content>
        </Dropdown.Menu>
      </div>
    </Button>
  );
};

export default ProjectItem;
