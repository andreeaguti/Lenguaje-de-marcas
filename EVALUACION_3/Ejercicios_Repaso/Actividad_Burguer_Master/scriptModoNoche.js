const body = document.body;
const toggle = document.getElementById("btn-modo");

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    console.log("Clases del body ahora:", body.className);

    if(body.classList.contains("dark")){
        toggle.textContent = "Cambiar Modo Día/Noche";
    }
    else{
        toggle.textContent = "Cambiar Modo Día/Noche"
    }
});

