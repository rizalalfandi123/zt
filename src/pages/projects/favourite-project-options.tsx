import React from "react";
import Dropdown from "@/components/ui/dropdown-menu";

import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/hooks";
import { projectActions } from "@/stores/project-store";
import { EditIcon, HeartOffIcon } from "@/components/icons";
import { type ProjectOption, type ProjectOptionsComponents, isOptionItem } from "./project-options-utils";

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

  const options: ProjectOption[] = React.useMemo(() => {
    const options: ProjectOption[] = [
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

export default FavouriteProjectOptions;
