const fontSizeControl = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

function updateFontSize() {
  const fontSize = fontSizeControl.value + "px";
  textSize.style.fontSize = fontSize;
}

fontSizeControl.addEventListener("input", updateFontSize);