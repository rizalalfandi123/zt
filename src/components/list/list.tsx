import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { TodoBoard, TodoList } from "../todo";
import { type TodoBoard as DD } from "@/schema-and-types";
import { useAppSelector } from "@/hooks";
import { boardSelector } from "@/selector";
import { useParams } from "react-router-dom";

export const List = () => {

  const projectId = useParams()["id"]!;

  const board: DD = useAppSelector((store) => boardSelector(store)[projectId]);


  return (
    <div>
      <DragDropContext onDragEnd={() => {}}>
        <Droppable droppableId="list" type="LIST" direction="vertical">
          {(provided) => {
            return (
              <div className="p-2" ref={provided.innerRef} {...provided.droppableProps}>
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
            );
          }}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
