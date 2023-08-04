import { memo } from "react";
import { Droppable, type DroppableProps } from "@hello-pangea/dnd";
import { $getRoot } from "lexical";

import { Todo } from "./todo";
import { type Todo as TTodo, cn, useAppDispatch, useAppSelector } from "@/lib";
import Button from "@/components/ui/button";
import { TodoForm } from "./todo-form";
import { uiActions } from "@/stores/ui.slice";
import { todoActions } from "@/stores/todo.slice";

interface DroppableTodoListProps extends Omit<DroppableProps, "children"> {
  todos: TTodo[];
}

const Component: React.FunctionComponent<DroppableTodoListProps> = (props) => {
  const { todos, ...droppableProps } = props;

  const dispatch = useAppDispatch();

  const isUserDraggingTodo = useAppSelector((store) => store.ui.value.isUserDraggingTodo);

  const openedNewTodoForm = useAppSelector((store) => store.ui.value.openedTodoForm === droppableProps.droppableId);

  const handleClickNewTodo = () => {
    dispatch(uiActions.setOpenedTodoForm(droppableProps.droppableId));
  };

  return (
    <Droppable {...droppableProps}>
      {(dropProvided) => {
        return (
          <div
            {...dropProvided.droppableProps}
            ref={dropProvided.innerRef}
            className={cn("flex flex-col gap-2 h-full w-72")}
          >
            {todos.map((todo, index) => {
              return (
                <Todo
                  index={index}
                  boardId={droppableProps.droppableId}
                  draggableId={todo.id}
                  todo={todo}
                  key={todo.id}
                />
              );
            })}

            {dropProvided.placeholder}

            {openedNewTodoForm ? (
              <TodoForm
                onClose={() => dispatch(uiActions.setOpenedTodoForm(null))}
                onSave={(formResult, titleEditorRef, descriptionEditorRef) => {
                  const newTodo: TTodo = {
                    ...formResult,
                    id: String(Math.random()),
                    isChecked: false,
                  };

                  dispatch(todoActions.createNewTodo({ todo: newTodo, boardId: droppableProps.droppableId }));

                  if (descriptionEditorRef) {
                    descriptionEditorRef.editor.update(() => {
                      $getRoot().clear();
                    });
                  }

                  titleEditorRef?.editor.update(() => {
                    $getRoot().clear();
                  });

                  titleEditorRef?.editor.focus();
                }}
              />
            ) : (
              <Button
                variant="ghost"
                className={cn([{ "opacity-0": isUserDraggingTodo }, "transition-all duration-300"])}
                onClick={handleClickNewTodo}
              >
                New Todo
              </Button>
            )}
          </div>
        );
      }}
    </Droppable>
  );
};

Component.displayName = "DroppableTodoList";

export const DroppableTodoList = memo<DroppableTodoListProps>(Component);
