import Board from "@/components/board";
import Button from "@/components/ui/button";
import Tooltip, { TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import { useParams } from "react-router-dom";
import { AdjustmentIcon, DotsIcon } from "@/components/icons";
import { useAppSelector } from "@/hooks";

export const Project = () => {
  const projectId = useParams()["id"]!;

  const project = useAppSelector((store) => store.projects.value[projectId]);

  return (
    <div className="flex flex-col w-full gap-4 h-full">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-xl font-semibold">{project.name}</h2>

        <div className="flex gap-2">
          <Button variant="ghost" className="flex gap-2">
            <AdjustmentIcon />
            <span>View</span>
          </Button>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="ghost">
                <DotsIcon />
              </Button>
            </TooltipTrigger>

            <TooltipContent>
              <p>Open More Project Actions</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div className="h-full w-full overflow-x-auto">
        <Board projectId={projectId} />
      </div>
    </div>
  );
};
