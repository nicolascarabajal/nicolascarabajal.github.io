// modo-claro-oscuro //
var modo = "claro";

function cambiarModo() {
  var elementos = document.querySelectorAll(".negro");
  var background = document.querySelector(".fondo");
  var footer = document.querySelector(".final");
  var botonFlotante = document.querySelector(".boton-flotante");
  var modoImagen = document.getElementById("modoImagen");

  elementos.forEach(function (elemento) {
    if (elemento.style.color === "rgb(0, 0, 0)" || elemento.style.color === "") {
      elemento.style.color = "#fff";
      background.style.backgroundColor = "#0b1116";
      footer.style.backgroundColor = "#070b0f";
      botonFlotante.style.backgroundColor = "#37566d";
      modoImagen.src = "imagenes/sol.png";
      modo = "nocturno";
    } else {
      elemento.style.color = "#000";
      background.style.backgroundColor = "#c8cfd6";
      footer.style.backgroundColor = "#919fad";
      botonFlotante.style.backgroundColor = "#37566d";
      modoImagen.src = "imagenes/luna.png";
      modo = "claro";
    }
  });
}