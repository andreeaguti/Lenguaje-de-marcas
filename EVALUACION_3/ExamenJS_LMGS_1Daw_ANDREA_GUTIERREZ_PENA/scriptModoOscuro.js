const body = document.body;
const toggle = document.getElementById("toggle-dark-mode");


toggle.addEventListener("click", () => {
    body.classList.toggle("light");
    console.log("Clases del body ahora:", body.className);

    if(body.classList.contains("light")){
        toggle.textContent = "Modo Oscuro";
    }
    else{
        toggle.textContent = "Modo Claro"
    }
});