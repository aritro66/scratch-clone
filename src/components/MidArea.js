import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { generateMotionComponents } from "../helper/generateMotionComponents";
import { motionActions } from "../store/motionSlice";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { generateLookComponents } from "../helper/generateLookComponents";
import { generateEventComponents } from "../helper/generateEventComponent";
import { generateControlComponents } from "../helper/generateControlComponents";

export default function MidArea() {
  const data = useSelector((state) => state.data.motionList);
  const activeSprite = useSelector((state) => state.data.activeSprite);
  const runDisabled = useSelector((state) => state.data.runDisabled);
  const dispatch = useDispatch();

  const triggerEvent = (spriteElement, eventType) => {
    if (spriteElement && spriteElement.fireEvent) {
      spriteElement.fireEvent("on" + eventType);
    } else if (spriteElement) {
      let eventObject = document.createEvent("Events");
      eventObject.initEvent(eventType, true, false);
      spriteElement.dispatchEvent(eventObject);
    }
  };
  const onRun = () => {
    let finalResult = "$ " + activeSprite + ": ";
    let completedEvents = 0;
    if (data.length && data[0].startsWith("RUN")) {
      for (let i = 0; i < data.length; i++) {
        const x = data[i];
        const arr = x.split("-");
        let str = arr[0];
        if (completedEvents === 0) finalResult = finalResult + str;
        else finalResult = finalResult + " -> " + str;
        completedEvents++;
        if (str === "STOP") {
          dispatch(motionActions.addInHistory(finalResult));
          break;
        }
        if (completedEvents === data.length) {
          dispatch(motionActions.addInHistory(finalResult));
        }

        let id = arr[1];
        let spriteElement = document.getElementById(`${str}+${id}`);
        setTimeout(() => {
          triggerEvent(spriteElement, "click");
        }, i * 800);
      }
    } else {
      alert("Add run event in the beginning!!!");
    }
  };

  const onEmptyList = () => {
    dispatch(motionActions.emptyEventList());
  };

  return (
    <div className="flex-1 h-full overflow-auto py-2 px-2">
      <div className="flex items-center justify-between">
        <div className=" text-black font-bold py-2 px-4">Mid Area</div>
        <div className="flex space-x-4">
          <button
            onClick={onEmptyList}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded"
          >
            Empty list
          </button>
          <button
            disabled={runDisabled}
            onClick={onRun}
            className={`${
              runDisabled ? "bg-green-400" : "bg-green-500"
            } text-white font-bold py-2 px-4 rounded`}
          >
            Run
          </button>
        </div>
      </div>
      <Droppable
        droppableId="mid"
        type="COMPONENT"
        isDropDisabled={false}
        isCombineEnabled={true}
      >
        {(provided) => {
          return (
            <ul
              className={`w-full h-full`}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {data.length > 0 ? (
                data.map((x, i) => {
                  let str = x.split("-")[0];
                  return (
                    <Draggable
                      key={`${x}+${i}`}
                      draggableId={`${x}+${i}`}
                      index={i}
                      type="COMPONENT"
                    >
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {generateMotionComponents(str, `${str}+${i}`)}
                          {generateLookComponents(str, `${str}+${i}`)}
                          {generateEventComponents(str, `${str}+${i}`)}
                          {generateControlComponents(str, `${str}+${i}`)}
                          {provided.placeholder}
                        </li>
                      )}
                    </Draggable>
                  );
                })
              ) : (
                <div className="relative h-80">
                  <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-600 text-4xl opacity-90">
                    Drag and Drop here
                  </p>
                </div>
              )}

              {provided.placeholder}
            </ul>
          );
        }}
      </Droppable>
    </div>
  );
}
