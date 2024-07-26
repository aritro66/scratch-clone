import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { generateMotionComponents } from "../helper/generateMotionComponents";
import { motionList } from "../helper/motionhelper";
import { lookList } from "../helper/lookHelper";
import { generateLookComponents } from "../helper/generateLookComponents";
import { generateEventComponents } from "../helper/generateEventComponent";
import { eventList } from "../helper/eventHelper";
import { controlList } from "../helper/controlHelper";
import { generateControlComponents } from "../helper/generateControlComponents";

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
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="w-full"
          >
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
      <div className="text-black font-bold py-2 px-4"> Look </div>
      <Droppable
        droppableId="look"
        type="COMPONENT"
        isDropDisabled={false}
        isCombineEnabled={true}
      >
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="w-full"
          >
            {lookList.map((x, i) => {
              return (
                <Draggable draggableId={x} index={i} type="COMPONENT" key={i}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {generateLookComponents(x)}
                    </div>
                  )}
                </Draggable>
              );
            })}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <div className="text-black font-bold py-2 px-4"> Event </div>
      <Droppable
        droppableId="event"
        type="COMPONENT"
        isDropDisabled={false}
        isCombineEnabled={true}
      >
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="w-full"
          >
            {eventList.map((x, i) => {
              return (
                <Draggable draggableId={x} index={i} type="COMPONENT" key={i}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {generateEventComponents(x)}
                    </div>
                  )}
                </Draggable>
              );
            })}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <div className="text-black font-bold py-2 px-4"> Control </div>
      <Droppable
        droppableId="control"
        type="COMPONENT"
        isDropDisabled={false}
        isCombineEnabled={true}
      >
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="w-full"
          >
            {controlList.map((x, i) => {
              return (
                <Draggable draggableId={x} index={i} type="COMPONENT" key={i}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {generateControlComponents(x)}
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
