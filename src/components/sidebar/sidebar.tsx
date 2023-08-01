import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { animated } from "@react-spring/web";

import { cn } from "@/lib/utils";
import Button from "@/components/ui/button";
import { InboxIcon, CalendarIcon, CalendarUpIcon, CategoryIcon, ChevronDown, PlusIcon } from "@/components/icons";
import { useVerticalCollapsibleAnimation } from "@/lib";
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

type Menu = {
  icon: React.ReactNode;
  label: string;
  path: string;
  suffix?: React.ReactNode;
};

const InnerMapMenu = React.memo<{ menus: Menu[]; locationPath: string }>(({ menus, locationPath }) => {
  return (
    <>
      {menus.map(({ icon, label, path, suffix }, index) => {
        return (
          <Button
            variant={path === locationPath ? "secondary" : "ghost"}
            className="w-full justify-start block"
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

export const Sidebar: React.FC<SidebarProps> = ({ className, ...divProps }) => {
  const location = useLocation();

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
    <div className={cn("pb-12", className)} {...divProps}>
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
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <NavLink to="/create-project" state={{ backgroundLocation: location }}>
                      <PlusIcon />
                    </NavLink>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add Projects</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
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
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Toggle list of projects</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <animated.div className="space-y-1 overflow-y-hidden" style={styles}>
            <div ref={measureRef}>
              <InnerMapMenu menus={defaultMenu} locationPath={location.pathname} />
            </div>
          </animated.div>
        </div>
      </div>
    </div>
  );
};
