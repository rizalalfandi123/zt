import React from "react";
import Dropdown from "@/components/ui/dropdown-menu";

import { useAppDispatch } from "@/hooks";
import { projectActions } from "@/stores/project-store";
import { ArchiveOffIcon, TrashIcon } from "@/components/icons";
import { type ProjectOption, type ProjectOptionsComponents, isOptionItem } from "./project-options-utils";

const ArchiveProjectOptions: ProjectOptionsComponents = ({ children, project }) => {
  const dispatch = useAppDispatch();

  const unarchiveProject = () => {
    dispatch(projectActions.unarchiveProject(project.id));
  };

  const handleDeleteProject = () => {
    dispatch(projectActions.deleteProject(project.id));
  };

  const options: ProjectOption[] = React.useMemo(() => {
    const options: ProjectOption[] = [
      { icon: ArchiveOffIcon, label: "Unarchive", onClick: unarchiveProject },
      { icon: TrashIcon, label: "Delete", onClick: handleDeleteProject },
    ];

    return options;
  }, []);

  return (
    <Dropdown.Menu>
      {children}
      <Dropdown.Content className="w-56 space-y-1">
        {options.map((option, index) => {
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

export default ArchiveProjectOptions;
