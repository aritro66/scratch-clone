import React from "react";
import { useSelector } from "react-redux";
import { moveToYDirection } from "../../helper/motionhelper";

const MoveYDirection = ({ comp_id, steps }) => {
  const activeSprite = useSelector((state) => state.data.activeSprite);
  return (
    <div
      id={comp_id}
      className={`text-center rounded bg-blue-500 text-white p-2 my-2 text-sm cursor-pointer mx-auto`}
      onClick={() => {
        moveToYDirection(activeSprite, steps);
      }}
    >
      Move Y: {steps} steps
    </div>
  );
};

export default MoveYDirection;
