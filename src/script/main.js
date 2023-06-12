const btnAbrir = document.getElementById("btnMenuAbrir");
const btnCerrar = document.getElementById("btnMenuCerrar");
const navbar = document.getElementById("navbar");

const btn_menuAbrir = () => {
  navbar.classList.add("active");
};

const btn_menuCerrar = () => {
  navbar.classList.remove("active");
};

function cambiarSeccion(seccionId) {
  let seccion = document.getElementById(seccionId);
  if (seccion) {
    seccion.scrollIntoView({ behavior: "smooth" });
    history.replaceState({ seccionId: seccionId }, "", "#" + seccionId);
  }
}

function handleClick(event) {
  event.preventDefault();
  let seccionId = event.target.getAttribute("href").substring(1);
  cambiarSeccion(seccionId);
}

let enlacesNavegacion = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < enlacesNavegacion.length; i++) {
  enlacesNavegacion[i].addEventListener("click", handleClick);
};

window.addEventListener("popstate", function (event) {
  if (event.state && event.state.seccionId) {
    var seccionActual = document.getElementById(event.state.seccionId);
    if (seccionActual) {
      if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        cambiarSeccion(event.state.seccionId);
      }
    }
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("beforeunload", function (event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

var scrollTopButton = document.getElementById("scrollTopButton");

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 106 || document.body.scrollTop > 106) {
    scrollTopButton.classList.add("show");
  } else {
    scrollTopButton.classList.remove("show");
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
