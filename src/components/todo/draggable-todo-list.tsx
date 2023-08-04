import { Draggable, type DraggableProps } from "@hello-pangea/dnd";

import { DroppableTodoList } from "./droppable-todo-list";
import type { Todo } from "@/lib";

interface DraggableTodoListProps extends Omit<DraggableProps, "children" | "draggableId"> {
  title: string;
  todos: Todo[];
}

export const DraggableTodoList: React.FunctionComponent<DraggableTodoListProps> = (props) => {
  const { title, todos, ...draggableProps } = props;

  return (
    <Draggable draggableId={title} {...draggableProps} disableInteractiveElementBlocking>
      {(provided) => {
        return (
          <div className="flex flex-col gap-4" ref={provided.innerRef} {...provided.draggableProps}>
            <h6 className="font-semibold" {...provided.dragHandleProps}>
              {title}
            </h6>

            <DroppableTodoList droppableId={title} todos={todos} type="TODOS" />
          </div>
        );
      }}
    </Draggable>
  );
};
