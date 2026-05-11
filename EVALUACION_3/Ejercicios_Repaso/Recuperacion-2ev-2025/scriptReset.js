const reset = document.getElementById("btnReset");

if (reset) {
    reset.addEventListener("click", () => {
        // 1. Usamos .remove() para asegurarnos de que se limpian
        // 2. Quitamos la clase "light" (que es la que cambia los colores)
        
        document.body.classList.remove("light"); // Quita el color del fondo
        encabezado.classList.remove("light");    // Quita el color del header
        
        // 3. Opcional: Devolver el texto original a los botones
        toggleh.textContent = "Color Header";
        
        console.log("Estilos restaurados a los valores predeterminados");
    });
}