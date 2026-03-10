/* === 1. CAPTURA DE ELEMENTOS DEL DOM === */
// Usamos getElementById para conectar las etiquetas del HTML con variables de JS[cite: 104].
const formulario = document.getElementById('formRegistro'); // El formulario completo para controlar el envío[cite: 104].
const listaErrores = document.getElementById('listaErrores'); // El <ul> donde volcaremos el resumen de fallos[cite: 104].
const estadoTexto = document.getElementById('estadoTexto'); // El <span> que indica si está "Pendiente" o "Correcto"[cite: 93].

/* === 2. FUNCIONES DE LECTURA (Obligatorias según punto 6.1) === */
// leerCampoTexto: Obtiene el texto y usa .trim() para eliminar espacios vacíos accidentales al inicio/final.
function leerCampoTexto(id) { return document.getElementById(id).value.trim(); }

// leerCheckbox: Para campos booleanos (si/no), devuelve true si está marcado[cite: 73].
function leerCheckbox(id) { return document.getElementById(id).checked; }

// leerSelect: Obtiene el 'value' de la opción seleccionada en el desplegable[cite: 74].
function leerSelect(id) { return document.getElementById(id).value; }

/* === 3. FUNCIONES DE INTERFAZ (Obligatorias según punto 6.3) === */
// mostrarError: Inyecta el texto de aviso en el párrafo <p> correspondiente al error[cite: 91].
function mostrarError(idError, mensaje) {
    const contenedor = document.getElementById(idError);
    if (contenedor) contenedor.textContent = mensaje;
}

// limpiarError: Vacía el texto de error cuando el usuario corrige el campo[cite: 92].
function limpiarError(idError) {
    const contenedor = document.getElementById(idError);
    if (contenedor) contenedor.textContent = "";
}

// actualizarEstadoGeneral: Cambia el texto informativo y el color de fondo/borde del panel superior[cite: 93].
function actualizarEstadoGeneral(texto, correcto) {
    if (estadoTexto) {
        estadoTexto.textContent = texto;
        const panel = document.getElementById('estadoGeneral');
        if (panel) {
            // Usamos el operador ternario (condición ? true : false) para asignar colores[cite: 93].
            panel.style.backgroundColor = correcto ? "#e6fffa" : "#fff1f0";
            panel.style.borderColor = correcto ? "#38a169" : "#e53e3e";
        }
    }
}

/* === 4. VALIDACIONES INDIVIDUALES (Punto 6.2) === */
// Cada función comprueba una regla de negocio y devuelve un Booleano (true/false)[cite: 89].

function validarNombre() {
    const v = leerCampoTexto('nombre');
    // Expresión Regular (RegEx): Solo letras (incluyendo tildes y ñ) y espacios[cite: 41].
    const re = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/;
    // Comprobamos longitud (2-30) y formato[cite: 40, 41].
    if (v.length < 2 || v.length > 30 || !re.test(v)) {
        mostrarError('errorNombre', 'Nombre: 2-30 caracteres, solo letras.');
        return false;
    }
    limpiarError('errorNombre');
    return true;
}

function validarApellidos() {
    const v = leerCampoTexto('apellidos');
    // Validación simple de longitud[cite: 43].
    if (v.length < 2 || v.length > 60) {
        mostrarError('errorApellidos', 'Apellidos: 2-60 caracteres.');
        return false;
    }
    limpiarError('errorApellidos');
    return true;
}

function validarEmail() {
    const v = leerCampoTexto('email');
    // Patrón estándar para correos: texto@texto.extension.
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!re.test(v)) {
        mostrarError('errorEmail', 'Formato de email no válido.');
        return false;
    }
    limpiarError('errorEmail');
    return true;
}

function validarTelefono() {
    const v = leerCampoTexto('telefono');
    // Comprobamos que tenga 9 dígitos y que NO sea "NaN" (Not a Number)[cite: 47, 48].
    if (v.length !== 9 || isNaN(v)) {
        mostrarError('errorTelefono', 'El teléfono debe tener 9 números.');
        return false;
    }
    limpiarError('errorTelefono');
    return true;
}

function validarFecha() {
    const v = leerCampoTexto('fechaNacimiento');
    if (!v) { mostrarError('errorFecha', 'Fecha obligatoria.'); return false; }
    // Calculamos la diferencia de años restando el año actual al de la fecha ingresada[cite: 50].
    const edad = new Date().getFullYear() - new Date(v).getFullYear();
    if (edad < 18) {
        mostrarError('errorFecha', 'Debes ser mayor de 18 años.');
        return false;
    }
    limpiarError('errorFecha');
    return true;
}

function validarProvincia() {
    // Si el valor es "" (la opción por defecto), devolvemos error[cite: 52].
    if (leerSelect('provincia') === "") {
        mostrarError('errorProvincia', 'Selecciona una provincia.');
        return false;
    }
    limpiarError('errorProvincia');
    return true;
}

function validarPassword() {
    const v = leerCampoTexto('password');
    // RegEx compleja: (?=.*[letra]) asegura que exista al menos una de cada tipo[cite: 55, 58, 59].
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;
    if (!re.test(v)) {
        mostrarError('errorPassword', 'Contraseña débil (8+ carac, Mayús, Núm y Símbolo).');
        return false;
    }
    limpiarError('errorPassword');
    return true;
}

function validarPassword2() {
    const p1 = leerCampoTexto('password');
    const p2 = leerCampoTexto('password2');
    // Comprobamos igualdad estricta entre las dos claves[cite: 61].
    if (p1 !== p2 || p2 === "") {
        mostrarError('errorPassword2', 'Las contraseñas no coinciden.');
        return false;
    }
    limpiarError('errorPassword2');
    return true;
}

function validarObservaciones() {
    // Campo opcional, solo limitamos la longitud máxima[cite: 35, 66].
    if (leerCampoTexto('observaciones').length > 200) {
        mostrarError('errorObs', 'Máximo 200 caracteres.');
        return false;
    }
    limpiarError('errorObs');
    return true;
}

function validarTerminos() {
    // Si leerCheckbox devuelve false, es que no han aceptado los términos[cite: 68].
    if (!leerCheckbox('terminos')) {
        mostrarError('errorTerminos', 'Debes aceptar los términos.');
        return false;
    }
    limpiarError('errorTerminos');
    return true;
}

/* === 5. FUNCIONES GENERALES (Punto 6.4) === */
function generarResumenErrores() {
    listaErrores.innerHTML = ""; // Limpiamos la lista <ul> antes de empezar[cite: 101].
    // Buscamos todos los elementos con clase .error y los recorremos[cite: 101].
    document.querySelectorAll('.error').forEach(p => {
        if (p.textContent !== "") { // Si el párrafo tiene texto de error...
            const li = document.createElement('li'); // Creamos un elemento de lista <li>[cite: 16].
            li.textContent = p.textContent; // Le asignamos el texto del error.
            listaErrores.appendChild(li); // Lo añadimos al <ul> del resumen[cite: 101].
        }
    });
}

function validarFormulario() {
    // Metemos el resultado de todas las funciones en un Array.
    const res = [
        validarNombre(), validarApellidos(), validarEmail(),
        validarTelefono(), validarFecha(), validarProvincia(),
        validarPassword(), validarPassword2(), validarObservaciones(),
        validarTerminos()
    ];

    // .every() comprueba si TODOS los elementos del array son 'true'.
    const todoCorrecto = res.every(v => v === true);

    if (todoCorrecto) {
        actualizarEstadoGeneral("¡Formulario correcto!", true); // [cite: 15]
        listaErrores.innerHTML = "<li>Ningún error detectado</li>";
        return true;
    } else {
        actualizarEstadoGeneral("Errores en el formulario.", false); // [cite: 15]
        generarResumenErrores(); // Creamos la lista de fallos inferior[cite: 101].
        return false;
    }
}

function limpiarFormulario() {
    // Seleccionamos todos los párrafos de error y les quitamos el texto[cite: 101].
    document.querySelectorAll('.error').forEach(p => p.textContent = "");
    actualizarEstadoGeneral("Pendiente de validación", false); // Reseteamos el estado[cite: 18].
    listaErrores.innerHTML = "<li>—</li>"; // Ponemos el guion por defecto en el resumen.
}

/* === 6. GESTIÓN DE EVENTOS (Punto 8) === */
if (formulario) {
    // Escuchamos el evento 'submit' (cuando se pulsa el botón de enviar)[cite: 115].
    formulario.addEventListener('submit', function(evento) {
        // .preventDefault() detiene el envío real del formulario para que la página no se recargue.
        evento.preventDefault(); 
        validarFormulario(); // Ejecutamos la validación total.
    });

    // Escuchamos el evento 'reset' (botón de borrar)[cite: 116].
    formulario.addEventListener('reset', function() {
        limpiarFormulario(); // Ejecutamos la limpieza de mensajes[cite: 101].
    });
}