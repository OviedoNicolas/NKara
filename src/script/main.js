const btnAbrir = document.getElementById ("btnMenuAbrir");
const btnCerrar = document.getElementById ("btnMenuCerrar");
const navbar = document.getElementById ("navbar")


const btn_menuAbrir = () =>{
    navbar.classList.add ("active")
}

const btn_menuCerrar = () =>{
    navbar.classList.remove ("active")
}