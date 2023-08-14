import React from "react";
import Button from "@/components/ui/button";
import Tooltip, { TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import InnerMapProjectItem from "@/pages/projects/inner-map-project-item";

import { animated } from "@react-spring/web";
import { NavLink, useLocation } from "react-router-dom";
import { InboxIcon, CalendarIcon, CalendarUpIcon, CategoryIcon, ChevronDownIcon, PlusIcon } from "@/components/icons";
import { useVerticalCollapsibleAnimation, useAppSelector } from "@/hooks";
import { cn } from "@/lib";
import { projectsSelector } from "@/selector";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

type Menu = {
  icon: React.ReactNode;
  label: string;
  path: string;
  suffix?: React.ReactNode;
};

export const Sidebar: React.FC<SidebarProps> = ({ className, ...divProps }) => {
  const location = useLocation();

  const projects = useAppSelector((state) => projectsSelector(state));

  const {
    measureRef: projectRef,
    setIsOpen: setIsOpenProject,
    styles: projectStyle,
    isOpen: isOpenProject,
  } = useVerticalCollapsibleAnimation();

  const {
    measureRef: favouriteProjectRef,
    setIsOpen: setIsOpenFavouriteProject,
    styles: favouriteProjectStyle,
    isOpen: isOpenFavouriteProject,
  } = useVerticalCollapsibleAnimation();

  const defaultMenu: Menu[] = React.useMemo(() => {
    const menus: Menu[] = [
      { icon: <InboxIcon />, label: "Inbox", path: "/inbox", suffix: 10 },
      { icon: <CalendarIcon />, label: "Today", path: "/today" },
      { icon: <CalendarUpIcon />, label: "Upcoming", path: "/upcoming" },
      {
        icon: <CategoryIcon />,
        label: "Filter & Label",
        path: "/filter-and-label",
      },
    ];

    return menus;
  }, []);

  return (
    <div className={cn("pb-12 select-none", className)} {...divProps}>
      <div className="space-y-2 py-2">
        <div className="space-y-1 px-3 py-2">
          <InnerMapMenu menus={defaultMenu} locationPath={location.pathname} />
        </div>

        <div className={cn(["px-3", { hidden: projects.FAVOURITE.length < 1 }])}>
          <div
            className={cn([
              "px-4 py-1 w-full",
              "rounded-md mb-2 flex font-semibold tracking-tight justify-between items-center",
              "hover:bg-accent hover:text-accent-foreground",
            ])}
          >
            <span>Favourites</span>

            <Tooltip>
              <TooltipTrigger asChild>
                <button onClick={() => setIsOpenFavouriteProject((prev) => !prev)}>
                  <ChevronDownIcon
                    className={cn([
                      "transition-all duration-500 rotate-0",
                      {
                        "rotate-180": isOpenFavouriteProject,
                      },
                    ])}
                  />
                </button>
              </TooltipTrigger>

              <TooltipContent>
                <p>Toggle list of favourite projects</p>
              </TooltipContent>
            </Tooltip>
          </div>

          <animated.div className="space-y-1 overflow-y-hidden" style={favouriteProjectStyle}>
            <div ref={favouriteProjectRef}>
              <InnerMapProjectItem type="FAVOURITE" />
            </div>
          </animated.div>
        </div>

        <div className="px-3">
          <div
            className={cn([
              "px-4 py-1 w-full",
              "rounded-md mb-2 flex font-semibold tracking-tight justify-between items-center",
              "hover:bg-accent hover:text-accent-foreground",
            ])}
          >
            <NavLink to={{ pathname: "/projects", search: "tab=ACTIVE" }} className="grow h-full">
              Projects
            </NavLink>
            <div className="flex gap-1">
              <Tooltip>
                <TooltipContent>
                  <p>Toggle list of projects</p>
                </TooltipContent>
                <TooltipTrigger asChild>
                  <NavLink to="/create-project" state={{ backgroundLocation: location }}>
                    <PlusIcon />
                  </NavLink>
                </TooltipTrigger>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <button onClick={() => setIsOpenProject((prev) => !prev)}>
                    <ChevronDownIcon
                      className={cn([
                        "transition-all duration-500 rotate-0",
                        {
                          "rotate-180": isOpenProject,
                        },
                        { hidden: projects.ACTIVE.length < 1 },
                      ])}
                    />
                  </button>
                </TooltipTrigger>

                <TooltipContent>
                  <p>Toggle list of projects</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          <animated.div className="space-y-1 overflow-y-hidden" style={projectStyle}>
            <div ref={projectRef}>
              <InnerMapProjectItem type="ACTIVE" />
            </div>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

const InnerMapMenu = React.memo<{ menus: Menu[]; locationPath: string }>(({ menus, locationPath }) => {
  return (
    <>
      {menus.map(({ icon, label, path, suffix }, index) => {
        return (
          <Button
            variant={path === locationPath ? "secondary" : "ghost"}
            className="w-full justify-start block relative"
            asChild
            key={index}
          >
            <NavLink to={path} className={cn({ "flex justify-between": suffix !== undefined })}>
              <div className="flex gap-2 items-center">
                {icon} {label}
              </div>

              {suffix}
            </NavLink>
          </Button>
        );
      })}
    </>
  );
});
