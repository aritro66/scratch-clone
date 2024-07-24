import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { generateMotionComponents } from "../helper/generateMotionComponents";
import { motionList } from "../helper/motionhelper";

export default function Sidebar() {
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-center p-2 border-r border-gray-500">
      <div className="text-black font-bold py-2 px-4"> Motion </div>
      <Droppable
        droppableId="motion"
        type="COMPONENT"
        isDropDisabled={false}
        isCombineEnabled={true}
      >
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {motionList.map((x, i) => {
              return (
                <Draggable draggableId={x} index={i} type="COMPONENT" key={i}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {generateMotionComponents(x)}
                    </div>
                  )}
                </Draggable>
              );
            })}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
