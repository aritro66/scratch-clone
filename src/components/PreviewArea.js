import React from "react";
import CatSprite from "./CatSprite";
import { motionActions } from "../store/motionSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  moveToOriginReplay,
  moveToXDirection,
  moveToXYDirection,
  moveToYDirection,
  rotateReplay,
} from "../helper/motionhelper";

export default function PreviewArea() {
  const dispatch = useDispatch();
  const sprites = useSelector((state) => state.data.sprite);
  const activeSprite = useSelector((state) => state.data.activeSprite);
  const history = useSelector((state) => state.data.history);
  const [isOpen, setIsOpen] = useState(false);
  const [disableButtons, setDisableButtons] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCharacterClick = (sprite) => {
    setIsOpen(false);
    dispatch(motionActions.setActiveSprite(sprite));
  };

  const onReset = () => {
    dispatch(motionActions.reset());
  };

  const onClearHistory = () => {
    dispatch(motionActions.clearHistory());
  };

  const onCreate = () => {
    dispatch(motionActions.addSprite());
  };

  const onReplay = () => {
    if (history[activeSprite] && history[activeSprite].length) {
      setDisableButtons(() => true);
      moveToOriginReplay(activeSprite);
      let angle = 0;
      let counter = 0;
      history[activeSprite].forEach((element, i) => {
        let eventList = element.split(/ -> |: /).splice(1);
        eventList.forEach((event, j) => {
          setTimeout(() => {
            console.log(event, i, j);
            switch (event) {
              case "MOVE_X_DIRECTION_10":
                moveToXDirection(activeSprite, 10);
                break;
              case "MOVE_X_DIRECTION_20":
                moveToXDirection(activeSprite, 20);
                break;
              case "MOVE_Y_DIRECTION_10":
                moveToYDirection(activeSprite, 10);
                break;
              case "MOVE_Y_DIRECTION_20":
                moveToYDirection(activeSprite, 20);
                break;
              case "MOVE_XY_DIRECTION_10":
                moveToXYDirection(activeSprite, 10);
                break;
              case "TURN_CLOCKWISE_DIRECTION_15":
                angle += 15;
                rotateReplay(activeSprite, angle);
                break;
              case "TURN_CLOCKWISE_DIRECTION_45":
                angle += 45;
                rotateReplay(activeSprite, angle);
                break;
              case "TURN_ANTICLOCKWISE_DIRECTION_15":
                angle -= 15;
                rotateReplay(activeSprite, angle);
                break;
              case "TURN_ANTICLOCKWISE_DIRECTION_45":
                angle -= 45;
                rotateReplay(activeSprite, angle);
                break;
              default:
                break;
            }
            if (
              j == eventList.length - 1 &&
              i == history[activeSprite].length - 1
            ) {
              setDisableButtons(() => false);
            }
          }, (j + 1 + counter) * 800);
        });
        counter += eventList.length;
      });
    }
  };
  return (
    <div className="flex-none h-full overflow-y-auto w-full px-2">
      <div className="h-3/4">
        <div className="w-full flex items-center justify-between py-2">
          <div className="flex space-x-4">
            <button
              disabled={disableButtons}
              onClick={onReplay}
              className={`${
                disableButtons ? "bg-yellow-400" : "bg-yellow-500"
              } text-white font-bold py-2 px-4 rounded`}
            >
              Replay
            </button>
            <button
              disabled={disableButtons}
              onClick={onReset}
              className={`${
                disableButtons ? "bg-red-400" : "bg-red-500"
              } text-white font-bold py-2 px-4 rounded`}
            >
              Reset
            </button>
            <button
              disabled={disableButtons}
              onClick={onCreate}
              className={`${
                disableButtons ? "bg-green-400" : "bg-green-500"
              } text-white font-bold py-2 px-4 rounded`}
            >
              Create
            </button>

            <button
              type="button"
              className="bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none"
              onClick={toggleDropdown}
            >
              Active - {" " + activeSprite + " ▼"}
            </button>
            {isOpen && (
              <div className="origin-top-right absolute right-12 mt-10 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {sprites.map((sprite, index) => (
                    <button
                      key={index}
                      className={`block px-4 py-2 text-sm ${
                        activeSprite === sprite.id
                          ? "bg-gray-200 text-gray-800"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => handleCharacterClick(sprite.id)}
                    >
                      {sprite.id}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={"flex justify-start"}>
          {sprites.map((x, i) => {
            return (
              <div key={x.id} className={"absolute"}>
                <div id={x.id} key={x.id}>
                  <CatSprite key={x.id} />
                  <span className="flex justify-center w-full">{x.id}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-1/4">
        <div className="w-full flex items-center justify-between py-2 border-b border-gray-400">
          <div className="text-black font-bold py-2 px-4 ">Preview area</div>
          <button
            disabled={disableButtons}
            onClick={onClearHistory}
            className={`${
              disableButtons ? "bg-red-400" : "bg-red-500"
            } text-white font-bold py-2 px-4 rounded`}
          >
            Clear history
          </button>
        </div>
        {history[activeSprite]
          ? history[activeSprite].map((x) => {
              return <div className="font-mono">{x}</div>;
            })
          : ""}
      </div>
    </div>
  );
}
