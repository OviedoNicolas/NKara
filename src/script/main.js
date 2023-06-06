// const btnAbrir = document.getElementById ("btnMenuAbrir");
// const btnCerrar = document.getElementById ("btnMenuCerrar");
// const navbar = document.getElementById ("navbar")


// const btn_menuAbrir = () =>{
//     navbar.classList.add ("active")
// }

// const btn_menuCerrar = () =>{
//     navbar.classList.remove ("active")
// }


// function cambiarSeccion(seccionId) {
//     let seccion = document.getElementById(seccionId);
//     if (seccion) {
//         seccion.scrollIntoView({ behavior: 'smooth' });
//         history.replaceState({ seccionId: seccionId }, '', '#' + seccionId);
//     }
// }

// function handleClick(event) {
//     event.preventDefault();
//     let seccionId = event.target.getAttribute('href').substring(1);
//     cambiarSeccion(seccionId);
// }

// let enlacesNavegacion = document.querySelectorAll('a[href^="#"]');
//     for (let i = 0; i < enlacesNavegacion.length; i++) {
//     enlacesNavegacion[i].addEventListener('click', handleClick);
// }

// window.addEventListener('popstate', function(event) {
//     if (event.state && event.state.seccionId) {
//         cambiarSeccion(event.state.seccionId);
//     }
// });

// window.addEventListener('popstate', function(event) {
//     if (event.state && event.state.seccionId) {
//         let seccionActual = document.getElementById(event.state.seccionId);
//         if (seccionActual && window.pageYOffset > 0) {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//         } else {
//         window.history.back();
//         }
//     }
// });

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
}

window.addEventListener("popstate", function (event) {
  if (event.state && event.state.seccionId) {
    cambiarSeccion(event.state.seccionId);
  }
});

// Deshabilitar la restauración automática de desplazamiento
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

// Función para manejar el evento de antes de descargar la página
window.addEventListener("beforeunload", function () {
  // Volver a la parte superior de la página al salir
  window.scrollTo({ top: 0 });
});

// Función para manejar el evento de clic en el botón de atrás del navegador
window.addEventListener("popstate", function (event) {
  if (event.state && event.state.seccionId) {
    var seccionActual = document.getElementById(event.state.seccionId);
    if (seccionActual && window.pageYOffset > 0) {
      // Si no está en la parte superior de la página, desplázate hacia arriba
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
});
