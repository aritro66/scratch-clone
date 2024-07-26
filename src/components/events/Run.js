import React from "react";
import { useSelector } from "react-redux";

const Run = ({ comp_id }) => {
  const activeSprite = useSelector((state) => state.data.activeSprite);
  return (
    <div
      id={comp_id}
      className={`text-center rounded bg-yellow-300 text-white p-2 my-2 text-sm cursor-pointer mx-auto`}
    >
      When Run clicked
    </div>
  );
};
export default Run;
