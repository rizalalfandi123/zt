import React from "react";
import Button from "@/components/ui/button";
import Editor from "@/components/editor";
import Checkbox from "@/components/ui/checkbox";

import { Draggable, type DraggableProps } from "@hello-pangea/dnd";
import { DotsIcon } from "@/components/icons";
import { TodoForm, TodoFormProps } from "@/components/todo/todo-form";
import { Todo as ITodo } from "@/schema-and-types";
import { uiActions } from "@/stores/ui.slice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { cn } from "@/lib";

export interface TodoProps extends React.ComponentProps<"div"> {
  todo: ITodo;
  boardId: string;
}

interface DraggableTodoProps extends Omit<DraggableProps, "children">, TodoProps {}

const Component: React.FunctionComponent<DraggableTodoProps> = (props) => {
  const { todo, boardId, ...draggableProps } = props;

  const [isHover, setIsHover] = React.useState<boolean>(false);

  const [isOpen] = React.useState(false);

  const dispatch = useAppDispatch();

  const isUserDraggingTodo = useAppSelector((store) => store.ui.value.isUserDraggingTodo);

  const title = React.useMemo(() => {
    return (
      <Editor
        initialConfig={{ namespace: "todo-title", editorState: todo.title, editable: false }}
        editableProps={{ className: "border-none line-clamp-2" }}
        placeholder={null}
      />
    );
  }, [todo.title]);

  const description = React.useMemo(() => {
    return (
      <Editor
        initialConfig={{ namespace: "todo-description", editorState: todo.description, editable: false }}
        editableProps={{ className: "border-none line-clamp-3" }}
        placeholder={null}
      />
    );
  }, [todo.description]);

  const isEdit = useAppSelector((store) => store.ui.value.openedTodoForm === todo.id);

  if (isEdit) {
    const handleSaveEditedTodo: TodoFormProps["onSave"] = () => {
      // const todoContext: Partial<ITodo> = {
      //   ...formResult,
      //   id: todo.id,
      // };
      // dispatch(todoActions.updateTodo({ todo: todoContext, boardId }));
      // dispatch(uiActions.setOpenedTodoForm(null));
    };

    return (
      <TodoForm
        initialValue={todo}
        onClose={() => dispatch(uiActions.setOpenedTodoForm(null))}
        onSave={handleSaveEditedTodo}
      />
    );
  }

  React.useEffect(() => {
    if (isOpen === false) {
      setIsHover(false);
    }
  }, [isOpen]);

  return (
    <Draggable {...draggableProps} disableInteractiveElementBlocking>
      {(dragProvided, dragSnapshot) => {
        React.useEffect(() => {
          if (isUserDraggingTodo !== dragSnapshot.isDragging) {
            dispatch(uiActions.toggleIsDraggingTodo(dragSnapshot.isDragging));
          }
        }, [dragSnapshot.isDragging]);

        return (
          <div
            className={cn("relative p-2 border border-border rounded-lg justify-center w-full bg-background", {
              "border-slate-600": dragSnapshot.isDragging,
            })}
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            ref={dragProvided.innerRef}
            {...dragProvided.draggableProps}
          >
            <Button
              size="icon"
              variant="ghost"
              className={cn(["absolute right-1 top-1 invisible z-[5]", { visible: isHover }])}
            >
              <DotsIcon />
            </Button>

            <div className="flex flex-col" {...dragProvided.dragHandleProps}>
              <div className="flex gap-3 items-center">
                <Checkbox />

                {todo.description ? (
                  <div className="flex flex-col w-[calc(100%-44px)]">
                    {title}
                    {description}
                  </div>
                ) : (
                  title
                )}
              </div>
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};

Component.displayName = "Todo";

export const Todo = React.memo<DraggableTodoProps>(Component);
