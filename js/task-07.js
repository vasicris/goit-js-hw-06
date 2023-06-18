const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

function updateFontSize () {
  const fontSize = fontSizeControl.value + "px";
  text.style.fontSize = fontSize;
}

fontSizeControl.addEventListener("input", updateFontSize);