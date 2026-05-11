// Capturamos el formulario por su ID
const formulario = document.getElementById('formContacto');

if (formulario) {
    formulario.addEventListener('submit', function(evento) {
        // 1. Evitamos que la página se refresque
        evento.preventDefault();
        
        // 2. Aquí podrías recoger los datos si fuera necesario
        console.log("Formulario completado. Redirigiendo...");

        // 3. Redirección automática a la página de agradecimiento
        window.location.href = 'agradecimiento.html';
    });
}