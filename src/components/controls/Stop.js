import React from "react";
import { useSelector } from "react-redux";

const Stop = ({ comp_id }) => {
  const activeSprite = useSelector((state) => state.data.activeSprite);
  return (
    <div
      id={comp_id}
      className={`text-center rounded bg-yellow-500 text-white p-2 my-2 text-sm cursor-pointer mx-auto`}
    >
      Stop
    </div>
  );
};
export default Stop;
