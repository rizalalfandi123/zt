import React from "react";
import Dropdown from "@/components/ui/dropdown-menu";

import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/hooks";
import { projectActions } from "@/stores/project-store";
import { EditIcon, HeartOffIcon } from "@/components/icons";
import { type ProjectOptionsComponents } from "./project-options-utils";
import { type ModelOption } from "@/schema-and-types";
import { isOptionModel } from "@/lib";

const FavouriteProjectOptions: ProjectOptionsComponents = ({ children, project }) => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const location = useLocation();

  const removeProjectFromFavourite = () => {
    dispatch(projectActions.removeProjectFromFavourite(project.id));
  };

  const handleUpdateProject = () => {
    navigate(`/update-project/${project.id}`, { state: { backgroundLocation: location } });
  };

  const options: ModelOption[] = React.useMemo(() => {
    const options: ModelOption[] = [
      { icon: HeartOffIcon, label: "Remove from Favourite", onClick: removeProjectFromFavourite },
      { icon: EditIcon, label: "Edit", onClick: handleUpdateProject },
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

export default FavouriteProjectOptions;
