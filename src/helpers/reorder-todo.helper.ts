import { type DraggableLocation } from "@hello-pangea/dnd";

import { reorder } from "@/lib";
import { TodoMap, Todo } from "@/schema-and-types";

interface ReorderTodoMapArgs {
  todoMap: TodoMap;
  source: DraggableLocation;
  destination: DraggableLocation;
}

export interface ReorderTodoMapResult {
  todoMap: TodoMap;
}

type ReorderTodoMap = (args: ReorderTodoMapArgs) => ReorderTodoMapResult;

export const reorderTodoMap: ReorderTodoMap = ({ todoMap, source, destination }) => {
  const current: Todo[] = [...todoMap[source.droppableId].todo];
  const next: Todo[] = [...todoMap[destination.droppableId].todo];
  const target: Todo = current[source.index];

  if (source.droppableId === destination.droppableId) {
    const reordered: Todo[] = reorder<Todo>(current, source.index, destination.index);

    const result: TodoMap = {
      ...todoMap,
      [source.droppableId]: { ...todoMap[source.droppableId], todo: reordered },
    };

    return {
      todoMap: result,
    };
  }

  current.splice(source.index, 1);

  next.splice(destination.index, 0, target);

  const result: TodoMap = {
    ...todoMap,
    [source.droppableId]: { ...todoMap[source.droppableId], todo: current },
    [destination.droppableId]: { ...todoMap[destination.droppableId], todo: next },
  };

  return {
    todoMap: result,
  };
};
