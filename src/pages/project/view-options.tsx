import Dropdown from "@/components/ui/dropdown-menu";
import * as Select from "@/components/ui/select";

import { ArrowSortIcon, BoxMultipleIcon, Icon, LayoutIcon } from "@/components/icons";
import { useAppDispatch } from "@/hooks";
import type { Project, ProjectGrouping, ProjectSorting, ProjectView } from "@/schema-and-types";
import React from "react";
import { SelectProps } from "@radix-ui/react-select";
import { projectActions } from "@/stores/project-store";
import { UpdateProject } from "@/stores/project-store/update-project.reducer";

interface ViewOptionsProps {
  project: Project;
}

interface ViewOption {
  value: string;
  label: string;
}

interface ViewField extends SelectProps {
  label: string;
  icon: Icon;
  options: ViewOption[];
}

interface ViewGroup {
  label: string;
  fields: ViewField[];
}

const ViewOptions: React.FunctionComponent<ViewOptionsProps> = ({ project }) => {
  const dispatch = useAppDispatch();

  const handleChangeViewOptions = (field: "VIEW" | "SORTING" | "GROUPING") => (value: string) => {
    const editedProject: Parameters<UpdateProject>[1]["payload"] = { id: project.id };

    switch (field) {
      case "VIEW":
        {
          if (project.view !== value) {
            editedProject.view = value as ProjectView;
          }
        }
        break;

      case "GROUPING":
        {
          if (project.grouping !== value) {
            editedProject.grouping = value as ProjectGrouping;
          }
        }
        break;

      case "SORTING":
        {
          if (project.sorting !== value) {
            editedProject.sorting = value as ProjectSorting;
          }
        }
        break;
    }

    if (Object.keys(editedProject).length > 1) {
      dispatch(projectActions.updateProject(editedProject));
    }
  };

  const fieldDroups = React.useMemo(() => {
    const data: ViewGroup[] = [
      {
        label: "View",
        fields: [
          {
            icon: LayoutIcon,
            label: "Layout",
            defaultValue: "LIST",
            value: project.view,
            onValueChange: handleChangeViewOptions("VIEW"),
            options: [
              {
                label: "List",
                value: "LIST",
              },
              {
                label: "Board",
                value: "BOARD",
              },
            ],
          },
        ],
      },
      {
        label: "Sort",
        fields: [
          {
            icon: BoxMultipleIcon,
            label: "Grouping",
            defaultValue: "NONE",
            value: project.grouping,
            onValueChange: handleChangeViewOptions("GROUPING"),
            options: [
              {
                label: "None (default)",
                value: "NONE",
              },
              {
                label: "Due Date",
                value: "DUE_DATE",
              },
              {
                label: "Due Added",
                value: "DUE_ADDED",
              },
              {
                label: "Priority",
                value: "PRIORITY",
              },
              {
                label: "Label",
                value: "LABEL",
              },
            ],
          },
          {
            icon: ArrowSortIcon,
            label: "Sorting",
            defaultValue: "DEFAULT",
            value: project.sorting,
            onValueChange: handleChangeViewOptions("SORTING"),
            options: [
              {
                label: "Default",
                value: "DEFAULT",
              },
              {
                label: "Due Date",
                value: "DUE_DATE",
              },
              {
                label: "Due Added",
                value: "DUE_ADDED",
              },
              {
                label: "Priority",
                value: "PRIORITY",
              },
              {
                label: "Label",
                value: "LABEL",
              },
            ],
          },
        ],
      },
    ];

    return data;
  }, [project]);

  return (
    <Dropdown.Content align="end" className="w-72 space-y-1">
      {fieldDroups.map((group) => {
        return (
          <React.Fragment key={group.label}>
            <Dropdown.Label>{group.label}</Dropdown.Label>

            {group.fields.map(({ icon: Icon, label, options, ...selectProps }) => {
              return (
                <Dropdown.Item key={label} className="p-0">
                  <Select.Select {...selectProps}>
                    <Select.SelectTrigger className="gap-2">
                      <div className="flex items-center gap-2 flex-grow justify-between">
                        <div className="flex items-center gap-2">
                          <Icon className="w-5 h-5" />

                          <span>{label}</span>
                        </div>
                        <Select.SelectValue />
                      </div>
                    </Select.SelectTrigger>

                    <Select.SelectContent>
                      {options.map((option) => {
                        return (
                          <Select.SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </Select.SelectItem>
                        );
                      })}
                    </Select.SelectContent>
                  </Select.Select>
                </Dropdown.Item>
              );
            })}
          </React.Fragment>
        );
      })}
    </Dropdown.Content>
  );
};

export default ViewOptions;
