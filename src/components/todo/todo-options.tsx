import React from "react";
import Dropdown from "@/components/ui/dropdown-menu";

import { useAppDispatch } from "@/hooks";
import { uiActions } from "@/stores/ui.slice";
import { todoBoardActions } from "@/stores/todo-column-store";
import { DropdownMenuProps } from "@radix-ui/react-dropdown-menu";

interface TodoOptionsProps extends DropdownMenuProps {
  sectionId: string;
  todoId: string;
}

const TodoOptions: React.FunctionComponent<TodoOptionsProps> = (props) => {
  const { children, sectionId, todoId, ...dropdownProps } = props;

  const dispatch = useAppDispatch();

  const handleDeleteTodo = () => {
    dispatch(todoBoardActions.deleteTodo({ sectionId, todoId }));
  };

  const handleEditTodo = () => {
    dispatch(uiActions.setOpenedForm(todoId))
  }

  return (
    <Dropdown.Menu {...dropdownProps}>
      {children}

      <Dropdown.Content>
        <Dropdown.Item onClick={handleDeleteTodo}>Delete</Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item onClick={handleEditTodo}>Edit</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Menu>
  );
};

export default TodoOptions;
