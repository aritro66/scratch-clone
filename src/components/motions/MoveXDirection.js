import React from "react";
import { useSelector } from "react-redux";
import { moveToXDirection } from "../../helper/motionhelper";

const MoveXDirection = ({ comp_id, steps }) => {
  const activeSprite = useSelector((state) => state.data.activeSprite);
  return (
    <div
      id={comp_id}
      className={`text-center rounded bg-blue-500 text-white p-2 my-2 text-sm cursor-pointer mx-auto`}
      onClick={() => {
        moveToXDirection(activeSprite, steps);
      }}
    >
      Move X: {steps} steps
    </div>
  );
};
export default MoveXDirection;
