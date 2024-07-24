import { motionActions } from "../store/motionSlice";

export const moveToOriginReplay = (activeSprite) => {
  const spriteElement = document.getElementById(activeSprite);
  spriteElement.style.position = "relative";
  spriteElement.style.left = 0 + "px";
  spriteElement.style.top = 0 + "px";
  spriteElement.style.transform = `rotate(${0}deg)`;
};

export const rotateReplay = (activeSprite, angle) => {
  const spriteElement = document.getElementById(activeSprite);
  spriteElement.style.transform = `rotate(${angle}deg)`;
};

export const moveToXYDirection = (activeSprite, steps = 10) => {
  const spriteElement = document.getElementById(activeSprite);
  const left = spriteElement.offsetLeft;
  const top = spriteElement.offsetTop;
  spriteElement.style.position = "relative";
  spriteElement.style.left = left + steps + "px";
  spriteElement.style.top = top + steps + "px";
};

export const moveToXDirection = (activeSprite, steps = 10) => {
  const spriteElement = document.getElementById(activeSprite);
  const left = spriteElement.offsetLeft;
  spriteElement.style.position = "relative";
  spriteElement.style.left = left + steps + "px";
};

export const moveToYDirection = (activeSprite, steps = 10) => {
  const spriteElement = document.getElementById(activeSprite);
  const top = spriteElement.offsetTop;
  spriteElement.style.position = "relative";
  spriteElement.style.top = top + steps + "px";
};

export const rotate = (
  activeSprite,
  dispatch,
  sprites,
  polarity,
  angle = 15
) => {
  const newangle = polarity * angle;
  const spriteElement = document.getElementById(activeSprite);
  const currAngle = sprites.find((x) => x.id === activeSprite).angle;
  spriteElement.style.transform = `rotate(${currAngle + newangle}deg)`;
  dispatch(motionActions.changeAngle(currAngle + newangle));
};

export const motionList = [
  "MOVE_X_DIRECTION_10",
  "MOVE_X_DIRECTION_20",
  "MOVE_Y_DIRECTION_10",
  "MOVE_Y_DIRECTION_20",
  "MOVE_XY_DIRECTION_10",
  "TURN_CLOCKWISE_DIRECTION_15",
  "TURN_CLOCKWISE_DIRECTION_45",
  "TURN_ANTICLOCKWISE_DIRECTION_15",
  "TURN_ANTICLOCKWISE_DIRECTION_45",
];
