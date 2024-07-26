import React from "react";
import { useSelector } from "react-redux";
import { sayHello } from "../../helper/lookHelper";

const SayHello = ({ comp_id }) => {
  const activeSprite = useSelector((state) => state.data.activeSprite);
  return (
    <div
      id={comp_id}
      className={`text-center rounded bg-purple-500 text-white p-2 my-2 text-sm cursor-pointer mx-auto`}
      onClick={() => {
        sayHello(activeSprite);
      }}
    >
      Say Hello...
    </div>
  );
};
export default SayHello;
