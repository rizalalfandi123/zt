import React from "react";
import Dropdown from "@/components/ui/dropdown-menu";
import Button from "@/components/ui/button";

import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { DotsIcon } from "@/components/icons";
import { cn, delay } from "@/lib";
import { uiActions } from "@/stores/ui.slice";
import { todoBoardActions } from "@/stores/todo-column-store";
import { projectActions } from "@/stores/project-store";

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

      <Dropdown.Content>
        <Dropdown.Item onClick={handleDeleteTodoSection}>Delete</Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item onClick={handleEditTodoSection}>Edit</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Menu>
  );
};

export default TodoListOptions;
