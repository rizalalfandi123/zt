import { type DraggableLocation } from "@hello-pangea/dnd";

import { type TodoMap, type Todo, reorder } from "@/lib";

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
  const current: Todo[] = [...todoMap[source.droppableId]];
  const next: Todo[] = [...todoMap[destination.droppableId]];
  const target: Todo = current[source.index];

  if (source.droppableId === destination.droppableId) {
    const reordered: Todo[] = reorder<Todo>(current, source.index, destination.index);

    const result: TodoMap = {
      ...todoMap,
      [source.droppableId]: reordered,
    };

    return {
      todoMap: result,
    };
  }

  current.splice(source.index, 1);

  next.splice(destination.index, 0, target);

  const result: TodoMap = {
    ...todoMap,
    [source.droppableId]: current,
    [destination.droppableId]: next,
  };

  return {
    todoMap: result,
  };
};
