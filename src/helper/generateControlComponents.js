import React from "react";
import Stop from "../components/controls/Stop";

export const generateControlComponents = (key, id) => {
  switch (key) {
    case "STOP":
      return <Stop comp_id={id} />;
    default:
      return React.null;
  }
};
