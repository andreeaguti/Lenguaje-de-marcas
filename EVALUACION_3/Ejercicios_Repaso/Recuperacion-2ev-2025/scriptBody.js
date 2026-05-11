const body = document.body;
const toggle = document.getElementById("btnBodyColor");

if (toggle){
toggle.addEventListener("click", () => {
    //cambiamos el fondo de la pagina
    body.classList.toggle("light");

    console.log("Clases del body ahora:", body.className);

    if (body.classList.contains("light")){
        toggle.textContent = "Color Fondo";
    }
    else{
        toggle.textContent = "Color Fondo";
    }
});
}

