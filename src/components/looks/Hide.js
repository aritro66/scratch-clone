import React from "react";
import { useSelector } from "react-redux";
import { changeVisibility } from "../../helper/lookHelper";

const Hide = ({ comp_id }) => {
  const activeSprite = useSelector((state) => state.data.activeSprite);
  return (
    <div
      id={comp_id}
      className={`text-center rounded bg-purple-500 text-white p-2 my-2 text-sm cursor-pointer mx-auto`}
      onClick={() => {
        changeVisibility(activeSprite, false);
      }}
    >
      Hide
    </div>
  );
};
export default Hide;
