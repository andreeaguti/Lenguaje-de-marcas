// 1. CAPTURA DE ELEMENTOS DOM
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

function validarApellido() {
    const valor = leerCampoTexto('apellido');
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]{2,60}$/; //Patrón que tiene que seguir el apellido
    // Si lo que se introduce es menor a dos o mayor a 30 o no cumple con el regex, muestra mensaje de error
    if (valor.length < 2 || valor.length > 60 || !regex.test(valor)) {
        mostrarError('errorApellido', "Apellido no válido (2-60 caracteres, solo letras).");
        return false; //Si da error, termina el programa
    }
    limpiarError('errorApellido');//si el código llega aquí, significa que el apellido es correcto, se borra el mensaje de error.
    return true;
}

function validarEmail() {
    const valor = leerCampoTexto('email');
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //Patrón que tiene que seguir el email
    // Si lo que se introduce es menor a cinco o mayor a 30 o no cumple con el regex, muestra mensaje de error
    if (valor.length < 5 || valor.length > 50 || !regex.test(valor)) {
        mostrarError('errorEmail', "Email no válido (Ej: usuario@dominio.com).");
        return false; //Si da error, termina el programa
    }
    limpiarError('errorEmail');//si el código llega aquí, significa que el apellido es correcto, se borra el mensaje de error.
    return true;
}

function validarTelefono() {
    const valor = leerCampoTexto('telefono');
    const regex = /^[6789]\d{8}$/; //Patrón que tiene que seguir el numero de telefono
    // Si lo que se introduce es menor o mayor a 9 o no cumple con el regex, muestra mensaje de error
    if (valor.length < 9 || valor.length > 9 || !regex.test(valor)) {
        mostrarError('errorTelefono', "Telefono no válido (Ej: 665925763).");
        return false; //Si da error, termina el programa
    }
    limpiarError('errorTelefono');//si el código llega aquí, significa que el apellido es correcto, se borra el mensaje de error.
    return true;
}

function validarFecha() {
    const valor = leerCampoTexto('fecha');
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/; //Patrón que tiene que seguir la fecha
    // Si lo que se introduce no cumple con el regex, muestra mensaje de error
    if (valor < 18) {
        mostrarError('errorFecha', "Fecha no válida, eres menor de edad!! (Ej: 01/03/2026).");
        return false; //Si da error, termina el programa
    }
    limpiarError('errorFecha');//si el código llega aquí, significa que el apellido es correcto, se borra el mensaje de error.
    return true;
}

function validarProvincia() {
    const valor = leerCampoTexto('provincia');
    const regex = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/; //Patrón que tiene que seguir el nombre de la provincia
    // Si lo que se introduce no cumple con el regex, muestra mensaje de error
    if (valor.trim() === "" || !regex.test(valor)) {
        mostrarError('errorProvincia', "Provincia no puede estar vacía y debe cumplir con el regex");
        return false; //Si da error, termina el programa
    }
    limpiarError('errorProvincia');//si el código llega aquí, significa que el apellido es correcto, se borra el mensaje de error.
    return true;
}

function validarPassword() {
    const valor = leerCampoTexto('password');
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/; 
    //Patrón que tiene que seguir el nombre de la provincia
    // Si lo que se introduce no cumple con el regex, muestra mensaje de error
    if (valor.length < 8 || valor.length > 15 || !regex.test(valor)) {
        mostrarError('errorPassword', "Contraseña no válida.");
        return false; //Si da error, termina el programa
    }
    limpiarError('errorContrasena');//si el código llega aquí, significa que el apellido es correcto, se borra el mensaje de error.
    return true;
}

function validarPassword2() {
    const valor = leerCampoTexto('password');
    const valor2 = leerCampoTexto('password2');
    
    if (contraseña1 !== contraseña2) {
        mostrarError('errorPassword', "Las contraseñas no coinciden");
        return false; //Si da error, termina el programa
    }
    limpiarError('errorContrasena');//si el código llega aquí, significa que el apellido es correcto, se borra el mensaje de error.
    return true;
}

function validarObservaciones() {
    const valor = leerCampoTexto('observaciones');
    
    //Patrón que tiene que seguir el nombre de la provincia
    // Si lo que se introduce no cumple con el regex, muestra mensaje de error
    if (valor.length < 1 || valor.length > 200) {
        mostrarError('errorObservaciones', "Observación no válida, tiene que tener menos de 200 carácteres");
        return false; //Si da error, termina el programa
    }
    limpiarError('errorContrasena');//si el código llega aquí, significa que el apellido es correcto, se borra el mensaje de error.
    return true;
}

function validarTerminos() {
    // el elemento (el checkbox), no su texto
    const elemento = document.getElementById('terminos');

    // 2. Comprobamos si NO está marcado (usando el signo !)
    if (!elemento.checked) {
        mostrarError('errorTerminos', "Debes aceptar los términos y condiciones para continuar.");
        return false;
    }
    limpiarError('errorTerminos');
    return true;
}

function validarFormulario() {
    
    const v1 = validarNombre();
    const v2 = validarApellidos();
    const v3 = validarEmail();
    const v4 = validarTelefono();
    const v5 = validarFecha(); 
    const v6 = validarProvincia();
    const v7 = validarPassword();
    const v8 = validarPassword2();
    const v9 = validarObservaciones();
    const v10 = validarTerminos();

    // El formulario es válido solo si todas son true
    const esValido = v1 && v2 && v3 && v4 && v5 && v6 && v7 && v8 && v9 && v10;

    if (esValido) {
        actualizarEstadoGeneral("Formulario correcto. Enviando...", true);
        generarResumenErrores([]); // Vaciar resumen si todo está bien
    } else {
        actualizarEstadoGeneral("Hay errores en el formulario.", false);
        generarResumenErrores(); // Llamar para mostrar la lista de fallos
    }
    return esValido;
}

function generarResumenErrores() {
    // 1. Limpiamos la lista visual antes de empezar
    listaErrores.innerHTML = ""; 
    
    // 2. Array para recolectar los mensajes amigables
    const mensajesDeError = [];
    
    // 3. Ejecutamos validaciones y si fallan, añadimos mensaje al array
    if (!validarNombre()) mensajesDeError.push("Nombre: Debe tener entre 2 y 30 letras.");
    if (!validarApellido()) mensajesDeError.push("Apellidos: Debe tener entre 2 y 60 letras.");
    if (!validarEmail()) mensajesDeError.push("Email: El formato no es válido.");
    if (!validarTelefono()) mensajesDeError.push("Teléfono: Deben ser 9 dígitos numéricos.");
    if (!validarFecha()) mensajesDeError.push("Fecha: Debes ser mayor de 18 años.");
    if (!validarProvincia()) mensajesDeError.push("Provincia: Selecciona una provincia válida.");
    if (!validarPassword()) mensajesDeError.push("Contraseña: No cumple los requisitos de seguridad.");
    if (!validarPassword2()) mensajesDeError.push("Contraseña 2: No coincide con la primera.");
    if (!validarObservaciones()) mensajesDeError.push("Observaciones: Máximo 200 caracteres.");
    if (!validarTerminos()) mensajesDeError.push("Términos: Es obligatorio aceptarlos.");

    //Si hay errores, los inyectamos en el HTML
    if (mensajesDeError.length > 0) {
        mensajesDeError.forEach(msg => {
            const li = document.createElement('li');
            li.textContent = msg;
            listaErrores.appendChild(li);
        });
    }


   
form.addEventListener('submit', function(event) {
    
    const esValido = validarFormulario();

    // Si NO es válido, cancelo el envío
    if (!esValido) {
        console.warn("Envío bloqueado: revisa los errores en el formulario.");
    } else {
        console.log("¡Todo correcto! Enviando datos...");
    }});

   
form.addEventListener('reset', function() {
    // Limpiamos todos los mensajes de error individuales
    // Buscamos todos los elementos cuyo ID empiece por "error"
    const mensajes = document.querySelectorAll('[id^="error"]');
    mensajes.forEach(msg => {
        msg.textContent = "";
    });

    //Limpio el resumen de errores y el estado general
    listaErrores.innerHTML = "";
    actualizarEstadoGeneral("Formulario reiniciado", true);
    
    console.log("Interfaz limpiada correctamente.");
});
}



