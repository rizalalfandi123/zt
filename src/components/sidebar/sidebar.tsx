import React from "react";
import Button from "@/components/ui/button";
import Tooltip from "@/components/ui/tooltip";
import ProjectItem from "@/components/sidebar/project-item";

import { animated } from "@react-spring/web";

import { NavLink, useLocation } from "react-router-dom";
import { InboxIcon, CalendarIcon, CalendarUpIcon, CategoryIcon, ChevronDown, PlusIcon } from "@/components/icons";
import { useVerticalCollapsibleAnimation, useAppSelector } from "@/hooks";
import { type Project } from "@/schema-and-types";
import { cn } from "@/lib";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

type Menu = {
  icon: React.ReactNode;
  label: string;
  path: string;
  suffix?: React.ReactNode;
};

export const Sidebar: React.FC<SidebarProps> = ({ className, ...divProps }) => {
  const location = useLocation();

  const projects = useAppSelector((store) => store.projects.value);

  const { measureRef, setIsOpen, styles, isOpen } = useVerticalCollapsibleAnimation();

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

        <div className="px-3 py-2">
          <div
            className={cn([
              "px-4 py-1 w-full",
              "rounded-md mb-2 flex font-semibold tracking-tight justify-between items-center",
              "hover:bg-accent hover:text-accent-foreground",
            ])}
          >
            <NavLink to="/project" className="grow h-full">
              Projects
            </NavLink>
            <div className="flex gap-1">
              <Tooltip.Provider>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <NavLink to="/create-project" state={{ backgroundLocation: location }}>
                      <PlusIcon />
                    </NavLink>
                  </Tooltip.Trigger>
                  <Tooltip.Content>
                    <p>Add Projects</p>
                  </Tooltip.Content>
                </Tooltip.Root>
              </Tooltip.Provider>

              <Tooltip.Provider>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <button onClick={() => setIsOpen((prev) => !prev)}>
                      <ChevronDown
                        className={cn([
                          "transition-all duration-500 rotate-0",
                          {
                            "rotate-180": isOpen,
                          },
                        ])}
                      />
                    </button>
                  </Tooltip.Trigger>
                  <Tooltip.Content>
                    <p>Toggle list of projects</p>
                  </Tooltip.Content>
                </Tooltip.Root>
              </Tooltip.Provider>
            </div>
          </div>

          <animated.div className="space-y-1 overflow-y-hidden" style={styles}>
            <div ref={measureRef}>
              <InnerMapProjectItem projects={projects} />
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

const InnerMapProjectItem = React.memo<{ projects: Record<string, Project> }>(({ projects }) => {
  return (
    <>
      {Object.keys(projects).map((key, index) => {
        return <ProjectItem project={projects[key]} key={index} />;
      })}
    </>
  );
});
