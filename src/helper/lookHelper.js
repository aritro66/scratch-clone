export const lookList = ["SHOW", "HIDE", "SAY_HELLO", "THINK"];

export const changeVisibility = (activeSprite, isShow) => {
  const spriteElement = document.getElementById(activeSprite);
  spriteElement.style.visibility = isShow ? "visible" : "hidden";
};

export const sayHello = (activeSprite) => {
  const helloElement = document.getElementById(activeSprite + "hello");
  const thinkElement = document.getElementById(activeSprite + "think");
  helloElement.style.display = "inline-block";
  thinkElement.style.display = "none";
};

export const think = (activeSprite) => {
  const helloElement = document.getElementById(activeSprite + "hello");
  const thinkElement = document.getElementById(activeSprite + "think");
  helloElement.style.display = "none";
  thinkElement.style.display = "inline-block";
};
