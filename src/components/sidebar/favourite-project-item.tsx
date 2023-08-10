import React from "react";
import Dropdown from "@/components/ui/dropdown-menu";
import Button from "@/components/ui/button";
import Tooltip from "@/components/ui/tooltip";

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib";
import type { OptionItem, Project } from "@/schema-and-types";
import {
  DotsIcon,
  PointIcon,
  HeartOffIcon,
  EditIcon,
} from "@/components/icons";
import { projectIndicator } from "@/constants";
import { projectActions } from "@/stores/project-store";
import { useAppDispatch } from "@/hooks";

interface FavouriteProjectItemProps {
  project: Project;
}

type ProjectOption = OptionItem | React.ReactNode;

function isOptionItem(item: ProjectOption): item is OptionItem {
  return (item as OptionItem).label !== undefined;
}

const FavouriteProjectItem: React.FunctionComponent<FavouriteProjectItemProps> = (props) => {
  const { project } = props;

  const location = useLocation();

  const dispatch = useAppDispatch();

  const navigate = useNavigate()

  const [showOptionBitton, setShowOptionButton] = React.useState<boolean>(false);

  const removeProjectFromFavourite = () => {
    dispatch(projectActions.removeProjectFromFavourite(project.id));
  };

  const handleUpdateProject = () => {
    navigate(`/update-project/${project.id}`, { state: { backgroundLocation: location } });
  };

  const projectOptions: ProjectOption[] = React.useMemo(() => {
    const options: ProjectOption[] = [
      { icon: HeartOffIcon, label: "Remove from Favourite", onClick: removeProjectFromFavourite },
      { icon: EditIcon, label: "Edit", onClick: handleUpdateProject },
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
                  <Button variant="ghost" size="icon" className={cn(["invisible focus-visible:ring-0", { visible: showOptionBitton }])}>
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

export default FavouriteProjectItem;
