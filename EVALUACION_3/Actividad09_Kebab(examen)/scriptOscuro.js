const body = document.body;
const toggle = document.getElementById("toggleModo");


if (toggle){
toggle.addEventListener("click", () => {
    //cambiamos el fondo de la pagina
    body.classList.toggle("light");

    console.log("Clases del body ahora:", body.className);

    if (body.classList.contains("light")){
        toggle.textContent = "🌙";
    }
    else{
        toggle.textContent = "🌙";
    }
});
}

