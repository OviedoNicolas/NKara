const btnAbrir = document.getElementById ("btnMenuAbrir");
const btnCerrar = document.getElementById ("btnMenuCerrar");
const navbar = document.getElementById ("navbar")


const btn_menuAbrir = () =>{
    navbar.classList.add ("active")
}

const btn_menuCerrar = () =>{
    navbar.classList.remove ("active")
}


function cambiarSeccion(seccionId) {
    let seccion = document.getElementById(seccionId);
    if (seccion) {
        seccion.scrollIntoView({ behavior: 'smooth' });
        history.replaceState({ seccionId: seccionId }, '', '#' + seccionId);
    }
}

function handleClick(event) {
    event.preventDefault();
    let seccionId = event.target.getAttribute('href').substring(1);
    cambiarSeccion(seccionId);
}

let enlacesNavegacion = document.querySelectorAll('a[href^="#"]');
    for (let i = 0; i < enlacesNavegacion.length; i++) {
    enlacesNavegacion[i].addEventListener('click', handleClick);
}

window.addEventListener('popstate', function(event) {
    if (event.state && event.state.seccionId) {
        cambiarSeccion(event.state.seccionId);
    }
});
