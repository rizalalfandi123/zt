import React from "react";
import Tabs from "@/components/ui/tabs";
import Button from "@/components/ui/button";
import InnerMapProjectItem from "@/pages/projects/inner-map-project-item";
import queryString from "query-string";

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { TabsProps } from "@radix-ui/react-tabs";
import { PlusIcon } from "@radix-ui/react-icons";
import { SettingsIcon } from "@/components/icons";
import type { ProjectListType } from "@/schema-and-types";
import { cn } from "@/lib";

interface ProjectTab {
  label: string;
  value: ProjectListType;
}

export const Projects = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const tabValue: ProjectListType = React.useMemo(() => {
    const parseQuery = queryString.parse(location.search);

    const tab = parseQuery["tab"] ? (parseQuery["tab"] as string).toUpperCase() : "ACTIVE";
    return tab as ProjectListType;
  }, [location.search]);

  const tabs: ProjectTab[] = React.useMemo(() => {
    const data: ProjectTab[] = [
      { label: "Active", value: "ACTIVE" },
      { label: "Favourite", value: "FAVOURITE" },
      { label: "Archive", value: "ARCHIVE" },
    ];

    return data;
  }, []);

  const onTabChange: TabsProps["onValueChange"] = (newValue) => {
    navigate(queryString.stringifyUrl({ url: location.pathname, query: { tab: newValue } }));
  };

  return (
    <div className="w-full m-auto max-w-3xl flex flex-col gap-6">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-xl font-semibold">Project</h2>

        <Button variant="ghost" className="flex items-center gap-2">
          <SettingsIcon />
          Settings
        </Button>
      </div>

      <div className="w-full flex items-center justify-between">
        <Tabs.Root defaultValue="ACTIVE" value={tabValue} onValueChange={onTabChange}>
          <Tabs.List>
            {tabs.map((tab, index) => {
              return (
                <Tabs.Trigger key={index} value={tab.value}>
                  {tab.label}
                </Tabs.Trigger>
              );
            })}
          </Tabs.List>
        </Tabs.Root>

        <Button variant="ghost" className="flex items-center gap-2" asChild>
          <NavLink to="/create-project" state={{ backgroundLocation: location }}>
            <PlusIcon />
            Add New Project
          </NavLink>
        </Button>
      </div>

      {tabs.map((tab, index) => {
        return (
          <div key={index} className={cn(["hidden space-y-1 w-full", { "flex flex-col": tabValue === tab.value }])}>
            <InnerMapProjectItem type={tab.value} />
          </div>
        );
      })}
    </div>
  );
};
