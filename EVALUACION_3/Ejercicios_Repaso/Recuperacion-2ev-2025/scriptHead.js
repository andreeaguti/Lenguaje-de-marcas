// 1. Capturamos los elementos (Header visual y el botón)
const toggleh = document.getElementById("btnHeaderColor");
const encabezado = document.getElementById("mainHeader");

if (toggleh) {
    toggleh.addEventListener("click", () => {
        
        encabezado.classList.toggle("light");

        // 3. Para el log y el if, usamos la misma variable: encabezado
        console.log("Clases del header ahora:", encabezado.className);

        if (encabezado.classList.contains("light")) {
            // Aquí podrías cambiar el texto para dar feedback, ej: "Quitar Color"
            toggleh.textContent = "Color Header";
        } else {
            toggleh.textContent = "Color Header";
        }
    });
}