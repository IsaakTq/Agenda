// Función para mostrar/ocultar el menú en móviles
function toggleMenu() {
    var menu = document.getElementById("mobile-menu");
    if (menu.classList.contains("w3-hide")) {
        menu.classList.remove("w3-hide");
        menu.classList.add("w3-show");
    } else {
        menu.classList.remove("w3-show");
        menu.classList.add("w3-hide");
    }
}

// Función para mostrar/ocultar el menú en móviles
function toggleMenu() {
    var menu = document.getElementById("mobile-menu");
    menu.classList.toggle("w3-show");
}