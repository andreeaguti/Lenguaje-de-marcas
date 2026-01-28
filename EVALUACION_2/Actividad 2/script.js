document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Mensaje de bienvenida ---
    alert("Página lista");

    // --- 2. Cambiar texto automáticamente ---
    const titulo = document.getElementById('titulo');
    titulo.textContent = "Contenido cargado correctamente";


    // --- 3. Contador básico ---
    let cuenta = 0;
    const btnContador = document.getElementById('btnContador');
    const spanContador = document.getElementById('contador');

    btnContador.addEventListener('click', () => {
        cuenta++;
        spanContador.textContent = cuenta;
    });

    // --- 4. Cambiar color de fondo ---
    const btnColor = document.getElementById('btnColor');
    const cajaColor = document.getElementById('cajaColor');

    btnColor.addEventListener('click', () => {
        // Cambia a un color aleatorio o uno fijo
        cajaColor.style.backgroundColor = cajaColor.style.backgroundColor === 'lightgreen' ? 'lightblue' : 'lightgreen';
    });


    // --- 5 y 6. Eventos de ratón (Mouseover y Mouseout) ---
    const zonaHover = document.getElementById('zonaHover');
    
    zonaHover.addEventListener('mouseover', () => {
        zonaHover.textContent = "Dentro del área";
        zonaHover.style.backgroundColor = "#ddd";
    });

    zonaHover.addEventListener('mouseout', () => {
        zonaHover.textContent = "Fuera del área";
        zonaHover.style.backgroundColor = "#eee";
    });


    // --- 7. Mostrar lo que escribe el usuario (Input) ---
    const inputTexto = document.getElementById('texto');
    const spanEco = document.getElementById('eco');

    inputTexto.addEventListener('input', (event) => {
        spanEco.textContent = event.target.value;
    });


    // --- 8. Confirmar cambio (Change) ---
    const inputConfirm = document.getElementById('textoConfirm');
    const confirmMsg = document.getElementById('confirmMsg');

    inputConfirm.addEventListener('change', () => {
        confirmMsg.textContent = "Valor confirmado: " + inputConfirm.value;
    });


    // --- 9. Detectar pulsación de tecla ---
    const teclaMsg = document.getElementById('teclaMsg');

    document.addEventListener('keydown', (event) => {
        teclaMsg.textContent = `Tecla pulsada: ${event.key} (Código: ${event.code})`;
    });


    // --- 10. Ejercicio mixto (Activar botón) ---
    const btnBloqueado = document.getElementById('btnBloqueado');
    const bloqueadoMsg = document.getElementById('bloqueadoMsg');

    // Estado inicial
    btnBloqueado.disabled = true;

    btnBloqueado.addEventListener('mouseover', () => {
        btnBloqueado.disabled = false;
        btnBloqueado.textContent = "¡Haz clic ahora!";
    });

    btnBloqueado.addEventListener('click', () => {
        bloqueadoMsg.textContent = "¡Botón activado y pulsado con éxito!";
    });

});