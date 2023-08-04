import { DragDropContext, Droppable, type DraggableLocation, type DragDropContextProps } from "@hello-pangea/dnd";

import { reorder } from "@/lib";
import type { TodoMap, Todo, TodoBoard } from "@/lib";
import { reorderTodoMap } from "@/lib/helpers";
import { todoActions } from "@/stores/todo.slice";
import { DraggableTodoList } from "@/components/todo";
import { useAppDispatch, useAppSelector } from "@/lib";

export const Upcoming = () => {
  const dispatch = useAppDispatch();

  const board = useAppSelector((store) => store.todo.value);

  const setBoard = (payload: TodoBoard) => dispatch(todoActions.setBoard(payload));

  const onDragEnd: DragDropContextProps["onDragEnd"] = (result): void => {
    if (result.combine) {
      if (result.type === "COLUMN") {
        const shallow: string[] = [...board.ordered];

        shallow.splice(result.source.index, 1);

        setBoard({ ...board, ordered: shallow });

        return;
      }

      const column: Todo[] = board.columns[result.source.droppableId];

      const withQuoteRemoved: Todo[] = [...column];

      withQuoteRemoved.splice(result.source.index, 1);

      const columns: TodoMap = {
        ...board.columns,
        [result.source.droppableId]: withQuoteRemoved,
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
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="board" type="COLUMN" direction="horizontal">
          {(provided) => {
            return (
              <div className="w-full inline-flex gap-4 h-full" ref={provided.innerRef} {...provided.droppableProps}>
                {board.ordered.map((key, index) => {
                  return <DraggableTodoList title={key} index={index} todos={board.columns[key]} key={key} />;
                })}

                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </DragDropContext>

      {/* <Cba/> */}
    </>
  );
};
