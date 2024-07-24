import React from "react";
import { useSelector } from "react-redux";
import { moveToXYDirection } from "../../helper/motionhelper";

const MoveXYDirection = ({ comp_id, steps }) => {
  const activeSprite = useSelector((state) => state.data.activeSprite);

  return (
    <div
      id={comp_id}
      className="text-center rounded bg-blue-500 text-white px-2 py-2 my-2 text-sm cursor-pointer"
      onClick={() => {
        moveToXYDirection(activeSprite);
      }}
    >
      Move X: {steps} steps Y: {steps} steps
    </div>
  );
};

export default MoveXYDirection;
