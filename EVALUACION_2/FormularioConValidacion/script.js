// 1. CAPTURA DE ELEMENTOS 
const form = document.getElementById('formRegistro');
/*Estás creando una "conexión" entre tu código JavaScript y la etiqueta <form> de tu HTML que tiene el ID formRegistro. Esto te permitirá, más adelante, detectar cuándo el usuario intenta enviar el formulario para poder validarlo.*/
const listaErrores = document.getElementById('listaErrores');
/*Aquí capturas el elemento <ul> (lista desordenada) donde se mostrará el Resumen de validación. Gracias a esta constante, podrás añadir elementos <li> con los errores detectados de forma dinámica.*/
const estadoTexto = document.getElementById('estadoTexto');
//Con esta constante podré cambiar el texto a "Formulario correcto" o "Existen errores"


// 2. FUNCIONES DE LECTURA (PUNTO 6)
const leerCampoTexto = (id) => document.getElementById(id).value.trim();
// Devuelve el valor limpio (sin espacios) de un input de texto. 
const leerCheckbox = (id) => document.getElementById(id).checked; 
// Devuelve true o false según esté marcado.
const leerSelect = (id) => document.getElementById(id).value; 
//Devuelve el valor seleccionado.


function mostrarError(idError, mensaje){
    const pError = document.getElementById(idError);
    pError.textContent = mensaje; 
}

function limpiarError(idError){
    document.getElementById(idError).textContent = "";
}
function actualizarEstadoGeneral(texto, correcto){
    estadoTexto.textContent = texto; 
    const panelEstado = document.getElementById('estadoGeneral');
    panelEstado.style.backgroundColor = correcto ? "#e6fffa" : "#fff1f0";
    panelEstado.style.borderColor = correcto ? "#38a169" : "#e53e3e";
}

// 4. FUNCIONES DE VALIDACIÓN POR CAMPO
function validarNombre() {
    const valor = leerCampoTexto('nombre');
    const regex = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/;
    // Entre 2 y 30 caracteres, solo letras y espacios 
    if (valor.length < 2 || valor.length > 30 || !regex.test(valor)) {
        mostrarError('errorNombre', "Nombre no válido (2-30 caracteres, solo letras).");
        return false;
    }
    limpiarError('errorNombre');
    return true;
}