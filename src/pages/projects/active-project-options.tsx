import React from "react";
import Dropdown from "@/components/ui/dropdown-menu";

import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/hooks";
import { projectActions } from "@/stores/project-store";
import { EditIcon, TrashIcon, ArrowDownIcon, ArrowUpIcon, HeartIcon, ArchiveIcon } from "@/components/icons";
import { type ProjectOption, type ProjectOptionsComponents, isOptionItem } from "./project-options-utils";

const ActiveProjectOptions: ProjectOptionsComponents = ({ children, project }) => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const location = useLocation();

  const handleDeleteProject = () => {
    dispatch(projectActions.deleteProject(project.id));
  };

  const handleUpdateProject = () => {
    navigate(`/update-project/${project.id}`, { state: { backgroundLocation: location } });
  };

  const handleAddProjectInSpecificIndex = (targetIndex: number) => () => {
    navigate("/create-project", { state: { backgroundLocation: location, targetIndex } });
  };

  const handleAddToFavourite = () => {
    dispatch(projectActions.addProjectToFavourite(project.id));
  };

  const handleArchive = () => {
    dispatch(projectActions.archiveProject(project.id));
  };

  const projectOptions: ProjectOption[] = React.useMemo(() => {
    const options: ProjectOption[] = [
      { icon: ArrowUpIcon, label: "Add Project Above", onClick: handleAddProjectInSpecificIndex(project.index) },
      { icon: ArrowDownIcon, label: "Add Project Below", onClick: handleAddProjectInSpecificIndex(project.index + 1) },
      <hr />,
      { icon: EditIcon, label: "Edit", onClick: handleUpdateProject },
      { icon: HeartIcon, label: "Add to Favorite", onClick: handleAddToFavourite },
      <hr />,
      { icon: ArchiveIcon, label: "Archive", onClick: handleArchive },
      { icon: TrashIcon, label: "Delete", onClick: handleDeleteProject },
    ];

    return options;
  }, []);

  return (
    <Dropdown.Menu>
      {children}
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
  );
};

export default ActiveProjectOptions;
