const chaine =
  "Salut ! Je suis Jeanne, développeuse web, mais également passionnée de graphisme, audiovisuel et de design. <br /> Je suis à la recherche d'une alternance pour l'année 2023/2024.";
const nb_car = chaine.length;
const tableau = chaine.split("");

let texte = new Array();
let txt = "";
const nb_msg = nb_car - 1;

for (i = 0; i < nb_car; i++) {
  texte[i] = txt + tableau[i];
  txt = texte[i];
}

let actual_texte = 0;
function changeMessage() {
  document.getElementById("bloc").innerHTML = texte[actual_texte];
  actual_texte++;
  if (actual_texte >= texte.length) actual_texte = nb_msg;
}
if (document.getElementById) setInterval("changeMessage()", 50);
