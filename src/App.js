import React from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import { DragDropContext } from "react-beautiful-dnd";
import { motionActions } from "./store/motionSlice";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const data = useSelector((state) => state.data.motionList);
  const dispatch = useDispatch();
  const dragEndHandler = (result) => {
    if (result.destination === null) return;
    if (
      result.destination.droppableId === result.source.droppableId &&
      result.destination.droppableId === "mid"
    ) {
      dispatch(motionActions.rearrangeEvent(result));
    } else if (
      result.destination.droppableId === "mid" &&
      (result.source.droppableId === "motion" ||
        result.source.droppableId === "look" ||
        result.source.droppableId === "event" ||
        result.source.droppableId === "control")
    ) {
      const currIndex = data.length;
      dispatch(motionActions.addEvent(result.draggableId + "-" + currIndex));
    }
  };

  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <DragDropContext onDragEnd={dragEndHandler}>
        <div className="h-screen overflow-hidden flex flex-row  ">
          <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
            <Sidebar /> <MidArea />
          </div>
          <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
            <PreviewArea />
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}
