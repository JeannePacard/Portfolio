const presentationText =
  "Salut ! Je suis <span>Jeanne</span>, <span>développeuse web</span>, mais également passionnée de graphisme, audiovisuel et de design. <br /> Je suis à la recherche d'une <span>alternance</span> pour l'année <span>2023/2024</span>.";
const presentationTextSize = presentationText.length;
const presentationArray = presentationText.split("");

let text = [];
let typingText = "";

for (i = 0; i < presentationTextSize; i++) {
  text[i] = typingText + presentationArray[i];
  typingText = text[i];
}

let letterDisplayed = 0;

function typingPresentation() {
  document.getElementById("bloc").innerHTML = text[letterDisplayed];
  letterDisplayed++;
  if (letterDisplayed >= text.length)
    letterDisplayed = presentationTextSize - 1;
}

setInterval("typingPresentation()", 50);
