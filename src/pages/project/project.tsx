import React from "react";
import Board from "@/components/board";
import Button from "@/components/ui/button";
import Dropdown from "@/components/ui/dropdown-menu";
import Tooltip, { TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import ViewOptions from "./view-options";
import List from "@/components/list";

import { useParams } from "react-router-dom";
import { AdjustmentIcon, DotsIcon } from "@/components/icons";
import { useAppSelector } from "@/hooks";
import { cn } from "@/lib";

export const Project = () => {
  const projectId = useParams()["id"]!;

  const project = useAppSelector((store) => store.projects.value[projectId]);

  // const todoView = React.useMemo(
  //   () => (project.view === "LIST" ? <List /> : <Board projectId={project.id} />),
  //   [project],
  // );

  return (
    <div className={cn(["flex flex-col w-full gap-4 h-full", { "max-w-2xl m-auto": project.view === "LIST" }])}>
      <div className="w-full flex justify-between items-center">
        <h2 className="text-xl font-semibold">{project.name}</h2>

        <div className="flex gap-2">
          <Dropdown.Menu>
            <Dropdown.Trigger asChild>
              <Button variant="ghost" className="flex gap-2">
                <AdjustmentIcon />
                <span>View</span>
              </Button>
            </Dropdown.Trigger>

            <ViewOptions project={project} />
          </Dropdown.Menu>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="ghost">
                <DotsIcon />
              </Button>
            </TooltipTrigger>

            <TooltipContent>
              <span>Open More Project Actions</span>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div className="h-full w-full overflow-x-auto">
        <Board project={project} />
      </div>
    </div>
  );
};
