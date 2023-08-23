import React from "react";
import Dropdown from "@/components/ui/dropdown-menu";
import Button from "@/components/ui/button";

import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { DotsIcon, EditIcon, TrashIcon } from "@/components/icons";
import { cn, delay, isOptionModel } from "@/lib";
import { uiActions } from "@/stores/ui.slice";
import { todoBoardActions } from "@/stores/todo-column-store";
import { projectActions } from "@/stores/project-store";
import { ModelOption } from "@/schema-and-types";

interface TodoListOptionsProps {
  todoSectionId: string;
}

const TodoListOptions: React.FunctionComponent<TodoListOptionsProps> = (props) => {
  const { todoSectionId } = props;

  const [isShowOption, setIsShowOpen] = React.useState<boolean>(false);

  const dispatch = useAppDispatch();

  const projectId = useParams()["id"]!;

  const isOpenEditSectionForm = useAppSelector(
    (store) => store.ui.value.openedForm === `edit-section-${todoSectionId}`,
  );

  const handleDeleteTodoSection = async () => {
    dispatch(todoBoardActions.deleteTodoBoard(todoSectionId));
    dispatch(projectActions.deleteTodoSection({ projectId, sectionId: todoSectionId }));
  };

  const handleEditTodoSection = async () => {
    setIsShowOpen(false);
    await delay(150);
    dispatch(uiActions.setOpenedForm(`edit-section-${todoSectionId}`));
  };

  const options: ModelOption[] = React.useMemo(() => {
    const options: ModelOption[] = [
      { icon: EditIcon, label: "Edit", onClick: handleEditTodoSection },
      <Dropdown.Separator />,
      { icon: TrashIcon, label: "Delete", onClick: handleDeleteTodoSection },
    ];

    return options;
  }, []);

  return (
    <Dropdown.Menu open={isShowOption} onOpenChange={(newValue) => setIsShowOpen(newValue)}>
      <Dropdown.Trigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className={cn(["absolute right-1 top-1 z-[5]", { hidden: isOpenEditSectionForm }])}
        >
          <DotsIcon />
        </Button>
      </Dropdown.Trigger>

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

export default TodoListOptions;
