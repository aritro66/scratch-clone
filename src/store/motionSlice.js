import { createSlice } from "@reduxjs/toolkit";

const motionSlice = createSlice({
  name: "motionList",
  initialState: {
    motionList: [],
    sprite: [{ id: "sprite0", angle: 0 }],
    activeSprite: "sprite0",
    history: {
      sprite0: [],
    },
    runDisabled: false,
  },
  reducers: {
    addEvent(state, action) {
      state.motionList.push(action.payload);
    },
    emptyEventList(state) {
      state.motionList = [];
    },
    rearrangeEvent(state, action) {
      const { source, destination } = action.payload;
      const [removed] = state.motionList.splice(source.index, 1);
      state.motionList.splice(destination.index, 0, removed);
      state.motionList = state.motionList.map((val, i) => {
        return val.split("-")[0] + "-" + i;
      });
    },
    addInHistory(state, action) {
      if (Object.hasOwn(state.history, state.activeSprite)) {
        state.history[state.activeSprite].push(action.payload);
      } else {
        state.history[state.activeSprite] = [action.payload];
      }
    },
    clearHistory(state) {
      state.history[state.activeSprite] = [];
    },
    setActiveSprite(state, action) {
      state.activeSprite = action.payload;
    },
    addSprite(state, action) {
      let num = state.sprite.length;
      state.sprite.push({ id: "sprite" + num, angle: 0 });
    },
    changeAngle(state, action) {
      state.sprite = state.sprite.map((x) => {
        if (x.id === state.activeSprite) {
          return { ...x, angle: action.payload };
        }
        return x;
      });
    },
    reset(state) {
      if (state.sprite[0] !== 0) {
        const spriteElement = document.getElementById("sprite0");
        const helloElement = document.getElementById("sprite0hello");
        const thinkElement = document.getElementById("sprite0think");
        helloElement.style.display = "none";
        thinkElement.style.display = "none";
        spriteElement.style.left = "0px";
        spriteElement.style.top = "0px";
        spriteElement.style.transform = `rotate(${0}deg)`;
        spriteElement.style.visibility = "visible";
      }
      state.sprite = [{ id: "sprite0", angle: 0 }];
      state.activeSprite = "sprite0";
      state.history = {
        sprite0: [],
      };
    },
    allowRun(state) {
      state.runDisabled = false;
    },
    unallowRun(state) {
      state.runDisabled = true;
    },
  },
});

export const motionActions = motionSlice.actions;
export default motionSlice;
