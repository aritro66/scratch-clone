import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GiAnticlockwiseRotation } from "react-icons/gi";
import { rotate } from "../../helper/motionhelper";

const TurnAntiClockWise = ({ comp_id, angle }) => {
  const dispatch = useDispatch();
  const sprites = useSelector((state) => state.data.sprite);
  const activeSprite = useSelector((state) => state.data.activeSprite);

  return (
    <div
      id={comp_id}
      className={`flex rounded bg-blue-500 text-white px-2 py-2 my-2 mb-1 text-sm cursor-pointer`}
      onClick={() => {
        rotate(activeSprite, dispatch, sprites, -1, angle);
      }}
    >
      <div className="flex items-center justify-center mx-auto">
        Rotate &nbsp; <GiAnticlockwiseRotation />
        &nbsp; {angle}&nbsp; degrees
      </div>
    </div>
  );
};

export default TurnAntiClockWise;
