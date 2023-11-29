// temporal //
document.addEventListener("DOMContentLoaded", function () {
  const googlemapss = document.querySelectorAll(".menu2 a");

  googlemapss.forEach(function (googlemaps) {
      googlemaps.addEventListener("click", function (event) {
          event.preventDefault();

          alert("Esta sección se encuentra en desarrollo y no está disponible en este momento.");
      });
  });
});
// carga //
document.addEventListener("DOMContentLoaded", function () {
  var carga = document.querySelector(".carga");
  if (carga) {
    carga.style.display = "none";
  }
});
// boton del menu flotante //
function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu) {
        var currentLeft = parseInt(menu.style.left, 10);
        if (currentLeft === 0) {
            menu.style.left = "-250px";
        } else {
            menu.style.left = "-0";
        }
    }
}
// menu lateral //
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu2 li");

  menuItems.forEach(function (item) {
      item.addEventListener("mouseenter", function () {
          item.style.backgroundColor = "#919fad";
          item.querySelector("a").style.color = "#ffffff";
      });
      item.addEventListener("mouseleave", function () {
          item.style.backgroundColor = "#f5f5f5";
          item.querySelector("a").style.color = "#000000";
      });
  });
});
// titulo //
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var scrollTop = window.scrollY;
    var container = document.getElementById("container");

    if (container) {
      if (scrollTop > 50) {
        container.classList.add("hidden");
      } else {
        container.classList.remove("hidden");
      }
    }
  });
});
// banner //
var video = document.getElementById('miVideo');
if (video) {
  video.setAttribute('playsinline', '');

  video.addEventListener('canplay', function() {
    video.play();
  });

  var source = document.createElement('source');
  source.src = 'imagenes/banner.mp4';
  source.type = 'video/mp4';

  video.appendChild(source);
}
// carrusel //
let indiceActual = 0;

function mostrarTarjeta(indice) {
  const envoltura = document.querySelector('.envoltura-carrusel');
  const anchoItem = document.querySelector('.item-carrusel') ? document.querySelector('.item-carrusel').offsetWidth : 0;
  const nuevaPosicion = -indice * anchoItem;
  if (envoltura) {
    envoltura.style.transition = 'transform 0.5s ease-in-out';
    envoltura.style.transform = `translateX(${nuevaPosicion}px)`;

    const tarjetas = document.querySelectorAll('.item-carrusel');
    tarjetas.forEach((tarjeta, i) => {
      const escala = (i === indice) ? 1 : 0.8;
      const zIndex = (i === indice) ? 1 : 0;
      const aumentoAltura = (i === indice) ? 1.2 : 1;
      if (tarjeta) {
        tarjeta.style.transition = 'transform 0.5s ease-in-out';
        tarjeta.style.transform = `scale(${escala})`;
        tarjeta.style.zIndex = zIndex;
      }
    });
  }
}
function siguienteTarjeta() {
  indiceActual = (indiceActual + 1) % 6;
  mostrarTarjeta(indiceActual);
}
function anteriorTarjeta() {
  indiceActual = (indiceActual - 1 + 6) % 6;
  mostrarTarjeta(indiceActual);
}
window.addEventListener('resize', () => {
  mostrarTarjeta(indiceActual);
});
document.addEventListener('DOMContentLoaded', function () {
  mostrarTarjeta(indiceActual);
});
// escuelas //
function abrirVentana() {
  document.getElementById("miVentana").style.display = "block";
  document.getElementById("miIframe").src = "escuelas.html";
}

function cerrarVentana() {
  document.getElementById("miVentana").style.display = "none";
  document.getElementById("miIframe").src = "";
}