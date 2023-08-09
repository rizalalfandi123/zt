import React from "react";
import Dropdown from "@/components/ui/dropdown-menu";
import Todo from "@/components/todo";
import Button from "@/components/ui/button";
import UpdateTodoSection from "@/components/todo-section/update-todo-section";

import { Draggable, type DraggableProps, Droppable } from "@hello-pangea/dnd";
import { useParams } from "react-router-dom";
import { $getRoot } from "lexical";
import { v4 as uuid } from "uuid";
import { type Todo as TTodo } from "@/schema-and-types";
import {  useAppDispatch, useAppSelector } from "@/hooks";
import {  delay, cn } from "@/lib";
import { TodoForm, TodoFormProps } from "@/components/todo/todo-form";
import { uiActions } from "@/stores/ui.slice";
import { DotsIcon } from "@/components/icons";
import { todoBoardActions } from "@/stores/todo-column-store";
import { projectActions } from "@/stores/project-store";

interface DraggableTodoListProps extends Omit<DraggableProps, "children"> {
  title: string;
  todos: TTodo[];
}

const Component: React.FunctionComponent<DraggableTodoListProps> = (props) => {
  const { title, todos, ...draggableProps } = props;

  const dispatch = useAppDispatch();

  const projectId = useParams()["id"]!;

  const [isHover, setIsHover] = React.useState<boolean>(false);

  const [isShowOption, setIsShowOpen] = React.useState<boolean>(false);

  const isUserDraggingTodo = useAppSelector((store) => store.ui.value.isUserDraggingTodo);

  const openedNewTodoForm = useAppSelector((store) => store.ui.value.openedTodoForm === draggableProps.draggableId);

  const openedSectionForm = useAppSelector(
    (store) => store.ui.value.openedTodoForm === `new-section-${draggableProps.draggableId}`,
  );

  const handleClickNewTodo = () => {
    dispatch(uiActions.setOpenedTodoForm(draggableProps.draggableId));
  };

  const handleSaveTodo: TodoFormProps["onSave"] = async (formResult, titleEditorRef, descriptionEditorRef) => {
    const id = uuid();
    dispatch(
      todoBoardActions.createTodo({
        ...formResult,
        id,
        isChecked: false,
        projectId,
        sectionId: draggableProps.draggableId,
      }),
    );

    if (descriptionEditorRef) {
      descriptionEditorRef.editor.update(() => {
        $getRoot().clear();
      });
    }

    titleEditorRef?.editor.update(() => {
      $getRoot().clear();
    });

    titleEditorRef?.editor.focus();
  };

  const handleDeleteTodoSection = async () => {
    dispatch(todoBoardActions.deleteTodoBoard(draggableProps.draggableId));
    dispatch(projectActions.deleteTodoSection({ projectId, sectionId: draggableProps.draggableId }));
  };

  return (
    <Draggable {...draggableProps} disableInteractiveElementBlocking>
      {(provided) => {
        return (
          <div className="py-2 bg-background" ref={provided.innerRef} {...provided.draggableProps}>
            <Droppable droppableId={draggableProps.draggableId} type="TODO">
              {(dropProvided) => {
                return (
                  <div {...dropProvided.droppableProps} ref={dropProvided.innerRef} className="h-full w-72">
                    <div
                      className={cn([
                        "flex flex-col gap-2 w-full rounded-lg relative",
                        { "outline outline-1 outline-border shadow-md": isHover },
                        { "p-2": todos.length > 0 },
                      ])}
                    >
                      <UpdateTodoSection
                        open={openedSectionForm}
                        onClose={() => dispatch(uiActions.setOpenedTodoForm(null))}
                        sectionId={draggableProps.draggableId}
                      >
                        <h6
                          className="font-semibold py-3 px-1"
                          onMouseOver={() => setIsHover(true)}
                          onMouseLeave={() => setIsHover(false)}
                          {...provided.dragHandleProps}
                        >
                          {title}
                        </h6>
                      </UpdateTodoSection>

                      {todos.map((todo, index) => {
                        return (
                          <Todo
                            index={index}
                            boardId={draggableProps.draggableId}
                            draggableId={todo.id}
                            todo={todo}
                            key={todo.id}
                          />
                        );
                      })}

                      <Dropdown.Menu open={isShowOption} onOpenChange={(newValue) => setIsShowOpen(newValue)}>
                        {!openedSectionForm && (
                          <Dropdown.Trigger asChild>
                            <Button size="icon" variant="ghost" className="absolute right-1 top-1 z-[5]">
                              <DotsIcon />
                            </Button>
                          </Dropdown.Trigger>
                        )}

                        <Dropdown.Content>
                          <Dropdown.Item onClick={handleDeleteTodoSection}>Delete</Dropdown.Item>
                          <Dropdown.Separator />
                          <Dropdown.Item
                            onClick={async () => {
                              setIsShowOpen(false);
                              await delay(150);
                              dispatch(uiActions.setOpenedTodoForm(`new-section-${draggableProps.draggableId}`));
                            }}
                          >
                            Edit
                          </Dropdown.Item>
                        </Dropdown.Content>
                      </Dropdown.Menu>

                      {openedNewTodoForm ? (
                        <TodoForm
                          onClose={() => dispatch(uiActions.setOpenedTodoForm(null))}
                          onSave={handleSaveTodo}
                          containerClassname={cn({ "mt-4": todos.length > 0 })}
                        />
                      ) : (
                        <Button
                          variant="ghost"
                          className={cn([
                            { "opacity-0": isUserDraggingTodo },
                            { "mt-4": todos.length > 0 },
                            "transition-all duration-300 w-full",
                          ])}
                          onClick={handleClickNewTodo}
                        >
                          New Todo
                        </Button>
                      )}
                    </div>

                    {dropProvided.placeholder}
                  </div>
                );
              }}
            </Droppable>
          </div>
        );
      }}
    </Draggable>
  );
};

Component.displayName = "TodoList";

export const TodoList = React.memo<DraggableTodoListProps>(Component);
