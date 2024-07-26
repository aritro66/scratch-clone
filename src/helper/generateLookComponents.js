import React from "react";
import Show from "../components/looks/Show";
import Hide from "../components/looks/Hide";
import SayHello from "../components/looks/SayHello";
import Think from "../components/looks/Think";

export const generateLookComponents = (key, id) => {
  switch (key) {
    case "SHOW":
      return <Show comp_id={id} />;
    case "HIDE":
      return <Hide comp_id={id} />;
    case "SAY_HELLO":
      return <SayHello comp_id={id} />;
    case "THINK":
      return <Think comp_id={id} />;
    default:
      return React.null;
  }
};
