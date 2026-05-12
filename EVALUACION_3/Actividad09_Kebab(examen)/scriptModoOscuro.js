const body = document.body;
const toggle = document.getElementById("toggleModo");

toggle.addEventListener("click", () => {
    body.classList.toggle("light");
    console.log("Clases del body ahora:", body.className);

    if(body.classList.contains("light")){
        toggle.textContent = "🌙";
    }
    else{
        toggle.textContent = "☀️"
    }
});
