import React from "react";
import MoveXDirection from "../components/motions/MoveXDirection";
import RotateClockwiseDirection from "../components/motions/RotateClockwiseDirection";
import RotateAntiClockwiseDirection from "../components/motions/RotateAntiClockwiseDirection";
import MoveXYDirection from "../components/motions/MoveXYDirection";
import MoveYDirection from "../components/motions/MoveYDirection";

export const generateMotionComponents = (key, id) => {
  switch (key) {
    case "MOVE_X_DIRECTION_10":
      return <MoveXDirection comp_id={id} steps={10} />;
    case "MOVE_X_DIRECTION_20":
      return <MoveXDirection comp_id={id} steps={20} />;
    case "MOVE_Y_DIRECTION_10":
      return <MoveYDirection comp_id={id} steps={10} />;
    case "MOVE_Y_DIRECTION_20":
      return <MoveYDirection comp_id={id} steps={20} />;
    case "MOVE_XY_DIRECTION_10":
      return <MoveXYDirection comp_id={id} steps={10} />;
    case "TURN_CLOCKWISE_DIRECTION_15":
      return <RotateClockwiseDirection comp_id={id} angle={15} />;
    case "TURN_CLOCKWISE_DIRECTION_45":
      return <RotateClockwiseDirection comp_id={id} angle={45} />;
    case "TURN_ANTICLOCKWISE_DIRECTION_15":
      return <RotateAntiClockwiseDirection comp_id={id} angle={15} />;
    case "TURN_ANTICLOCKWISE_DIRECTION_45":
      return <RotateAntiClockwiseDirection comp_id={id} angle={45} />;
    default:
      return React.null;
  }
};
