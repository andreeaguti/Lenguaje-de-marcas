const body = document.body;
const toggle = document.getElementById("themeToggle");

/*cambio de color sin boton
toggle.addEventListener("click", () => {
    //cambiamos el fondo de la pagina
    body.classList.toggle("light");

    console.log("Clases del body ahora:", body.className);

    if (body.classList.contains("light")){
        toggle.textContent = "Modo oscuro";
    }
    else{
        toggle.textContent = "Modo claro";
    }
});*/

//cambio de color con boton
toggle.addEventListener("click", () => {
    // 1. Cambiamos el fondo de la página
    body.classList.toggle("light");

    // 2. CAMBIO DEL BOTÓN: Movemos la "bolita"
    // Usamos toggle para que ponga/quite la clase 'is-dark'
    toggle.classList.toggle("is-dark");

    // 3. CAMBIO DE TEXTO: Lógica inversa para el usuario
    if (body.classList.contains("light")) {
        // Si la página está en claro, el botón ofrece volver a oscuro
        toggle.querySelector(".toggle__label").textContent = "Modo oscuro";
    } else {
        // Si está en oscuro, el botón ofrece pasar a claro
        toggle.querySelector(".toggle__label").textContent = "Modo claro";
    }
});