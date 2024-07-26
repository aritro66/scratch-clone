import React from "react";
import Run from "../components/events/Run";

export const generateEventComponents = (key, id) => {
  switch (key) {
    case "RUN":
      return <Run comp_id={id} />;
    default:
      return React.null;
  }
};
