import Button from "@/components/ui/button";
import TodoList from "@/components/todo-list";

import { DragDropContext, Droppable, type DraggableLocation, type DragDropContextProps } from "@hello-pangea/dnd";
import type { Project, Todo, TodoBoard, TodoMap } from "@/schema-and-types";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { AddNewTodoSection } from "@/components/todo-section/create-todo-section";
import { PlusIcon } from "@/components/icons";
import { uiActions } from "@/stores/ui.slice";
import { todoBoardActions } from "@/stores/todo-column-store";
import { reorderTodoMap } from "@/helpers";
import { cn, reorder } from "@/lib";
import { projectActions } from "@/stores/project-store";
import { boardSelector } from "@/selector";

interface BoardProps {
  project: Project;
}

export const Board: React.FunctionComponent<BoardProps> = (props) => {
  const {
    project: { id: projectId, view: projectView },
  } = props;

  const dispatch = useAppDispatch();

  const board: TodoBoard = useAppSelector((store) => boardSelector(store)[projectId]);

  const openedSectionForm = useAppSelector((store) => store.ui.value.openedForm === `new-section-${projectId}`);

  const setBoard = (payload: TodoBoard) => {
    dispatch(todoBoardActions.setTodoBoard(payload.columns));
    dispatch(projectActions.setTodoSection({ projectId, todoSections: payload.ordered }));
  };

  const onDragEnd: DragDropContextProps["onDragEnd"] = (result) => {
    if (result.combine) {
      if (result.type === "COLUMN") {
        const shallow: string[] = [...board.ordered];

        shallow.splice(result.source.index, 1);

        setBoard({ ...board, ordered: shallow });

        return;
      }

      const sectionContext = board.columns[result.source.droppableId];

      const column: Todo[] = sectionContext.todo;

      const withQuoteRemoved: Todo[] = [...column];

      withQuoteRemoved.splice(result.source.index, 1);

      const columns: TodoMap = {
        ...board.columns,
        [result.source.droppableId]: { ...sectionContext, todo: withQuoteRemoved },
      };

      setBoard({ ...board, columns });

      return;
    }

    // dropped nowhere
    if (!result.destination) {
      return;
    }

    const source: DraggableLocation = result.source;

    const destination: DraggableLocation = result.destination;

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    // reordering column
    if (result.type === "COLUMN") {
      const ordered: string[] = reorder<string>(board.ordered, source.index, destination.index);

      setBoard({
        ...board,
        ordered,
      });

      return;
    }

    const data = reorderTodoMap({
      todoMap: board.columns,
      source,
      destination,
    });

    setBoard({
      ...board,
      columns: data.todoMap,
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="board" type="COLUMN" direction={projectView === "LIST" ? "vertical" : "horizontal"}>
        {(provided) => {
          return (
            <div className={cn("select-none max-w-full flex flex-row gap-4 h-full", { "flex-col": projectView === "LIST" })}>
              <div className={cn("w-fit inline-flex gap-4 h-full", { "flex w-full h-fit flex-col gap-0 px-2": projectView === "LIST" })} ref={provided.innerRef} {...provided.droppableProps}>
                {board.ordered.map((key, index) => {
                  return (
                    <TodoList
                      draggableId={key}
                      title={board.columns[key].name}
                      index={index}
                      todos={board.columns[key].todo}
                      key={key}
                    />
                  );
                })}

                {provided.placeholder}
              </div>

              <AddNewTodoSection onClose={() => dispatch(uiActions.setOpenedForm(null))} open={openedSectionForm} className={cn("w-72", {"w-full": projectView === "LIST"})}>
                <Button
                  className="w-full flex gap-1"
                  variant="ghost"
                  onClick={() => dispatch(uiActions.setOpenedForm(`new-section-${projectId}`))}
                >
                  <PlusIcon />
                  Add New Section
                </Button>
              </AddNewTodoSection>
            </div>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};
