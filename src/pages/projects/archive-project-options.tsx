import React from "react";
import Dropdown from "@/components/ui/dropdown-menu";

import { useAppDispatch } from "@/hooks";
import { projectActions } from "@/stores/project-store";
import { ArchiveOffIcon, TrashIcon } from "@/components/icons";
import { type ProjectOptionsComponents } from "./project-options-utils";
import { type ModelOption } from "@/schema-and-types";
import { isOptionModel } from "@/lib";

const ArchiveProjectOptions: ProjectOptionsComponents = ({ children, project }) => {
  const dispatch = useAppDispatch();

  const unarchiveProject = () => {
    dispatch(projectActions.unarchiveProject(project.id));
  };

  const handleDeleteProject = () => {
    dispatch(projectActions.deleteProject(project.id));
  };

  const options: ModelOption[] = React.useMemo(() => {
    const options: ModelOption[] = [
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
          if (!isOptionModel(option)) {
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
