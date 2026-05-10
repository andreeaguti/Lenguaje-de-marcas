//para el inicio de sesion
const email = document.getElementById("email");
const contrasena = document.getElementById("password");

function validarLogin() {
    const correoUsuario = email.value.trim();
    const passUsuario = contrasena.value.trim();

    // Definimos los datos "correctos"
    const EMAIL_CORRECTO = "admin";
    const PASS_CORRECTA = "1234";

    if (correoUsuario === EMAIL_CORRECTO && passUsuario === PASS_CORRECTA) {
        alert("¡Acceso aceptado, continue con el pago!");
        window.location.href = "index.html"; // Rediriges al catálogo
    } else {
        alert("Email o contraseña incorrectos.");
    }
}

// 1. Capturamos el formulario (usa querySelector porque es por clase)
const loginForm = document.querySelector(".form");

// 2. Creamos el evento
if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // <--- ESTO ES VITAL: Detiene la recarga
        
        // Llamamos a la lógica de validación
        validarLogin();
    });
}