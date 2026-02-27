// 1. CAPTURA DE ELEMENTOS DOM
//HTML es un edificio y Java Script el administrador...
//Lo capturas para añadirle un "escuchador" (addEventListener). Así, cuando el usuario intente enviar los datos, JavaScript puede detener el envío, revisar que todo esté bien y decidir si lo deja pasar o no.
const form = document.getElementById('formRegistro');

//Si el usuario pone un teléfono de 5 dígitos, tú crearás un mensaje que diga "El teléfono debe tener 9 dígitos" y lo meterás dentro de esa listaErrores para que aparezca en pantalla
const listaErrores = document.getElementById('listaErrores');

//Capturas este elemento para que, cuando el usuario pulse el botón de enviar, JavaScript cambie ese texto a "Registro completado con éxito" (en verde) o "Errores en el formulario" (en rojo).
const estadoTexto = document.getElementById('estadoTexto');


// 2. FUNCIONES DE LECTURA (PUNTO 6)

// Devuelve el valor limpio (sin espacios) de un input de texto.
const leerCampoTexto = (id) => document.getElementById(id).value.trim();

// Devuelve true o false según esté marcado.
const leerCheckbox = (id) => document.getElementById(id).checked; 

//Devuelve el valor seleccionado.
const leerSelect = (id) => document.getElementById(id).value; 


// 3. FUNCIONES DE INTERFAZ
function mostrarError(idError, mensaje){
    const pError = document.getElementById(idError);
    if(pError) pError.textContent = mensaje; 
}

function limpiarError(idError){
    const pError = document.getElementById(idError);
    if(pError) pError.textContent = "";
}

function actualizarEstadoGeneral(texto, correcto){
    estadoTexto.textContent = texto; 
    const panelEstado = document.getElementById('estadoGeneral');
    if(panelEstado) {
        panelEstado.style.backgroundColor = correcto ? "#e6fffa" : "#fff1f0";
        panelEstado.style.borderColor = correcto ? "#38a169" : "#e53e3e";
    }
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

function validarApellidos() { // Corregido a plural según el PDF
    const valor = leerCampoTexto('apellidos');
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; //Patrón que tiene que seguir el apellido
    // Si lo que se introduce es menor a dos o mayor a 60 o no cumple con el regex, muestra mensaje de error
    if (valor.length < 2 || valor.length > 60 || !regex.test(valor)) {
        mostrarError('errorApellidos', "Apellido no válido (2-60 caracteres, solo letras).");
        return false; //Si da error, termina el programa
    }
    limpiarError('errorApellidos');//si el código llega aquí, significa que el apellido es correcto, se borra el mensaje de error.
    return true;
}

function validarEmail() {
    const valor = leerCampoTexto('email');
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //Patrón que tiene que seguir el email
    if (!regex.test(valor)) {
        mostrarError('errorEmail', "Email no válido (Ej: usuario@dominio.com).");
        return false; //Si da error, termina el programa
    }
    limpiarError('errorEmail');
    return true;
}

function validarTelefono() {
    const valor = leerCampoTexto('telefono');
    const regex = /^\d{9}$/; //Patrón que tiene que seguir el numero de telefono: exactamente 9 dígitos
    if (!regex.test(valor)) {
        mostrarError('errorTelefono', "Telefono no válido (Deben ser exactamente 9 números).");
        return false; //Si da error, termina el programa
    }
    limpiarError('errorTelefono');//si el código llega aquí, significa que el apellido es correcto, se borra el mensaje de error.
    return true;
}

function validarFecha() {
    const valor = leerCampoTexto('fechaNacimiento'); // Asegúrate que el ID coincida con tu HTML
    if (!valor) {
        mostrarError('errorFecha', "La fecha de nacimiento es obligatoria."); // Añadido mensaje
        return false;
    }

    // Lógica para calcular si es mayor de 18 años
    const fechaNacimiento = new Date(valor);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    if (edad < 18) {
        mostrarError('errorFecha', "Fecha no válida, ¡debes ser mayor de edad!");
        return false; //Si da error, termina el programa
    }
    limpiarError('errorFecha');
    return true;
}

function validarProvincia() {
    const valor = leerSelect('provincia');
    // La provincia no puede estar vacía
    if (valor === "") {
        mostrarError('errorProvincia', "Provincia no puede estar vacía.");
        return false; //Si da error, termina el programa
    }
    limpiarError('errorProvincia');
    return true;
}

function validarPassword() {
    const valor = leerCampoTexto('password');
    // Mínimo 8 caracteres, 1 mayús, 1 minús, 1 número y 1 símbolo
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/; 
    if (!regex.test(valor)) {
        mostrarError('errorPassword', "Contraseña no válida (mínimo 8 caracteres, mayúscula, minúscula, número y símbolo).");
        return false; //Si da error, termina el programa
    }
    limpiarError('errorPassword');
    return true;
}

function validarPassword2() {
    const valor = leerCampoTexto('password');
    const valor2 = leerCampoTexto('password2');
    
    // Debe coincidir con la contraseña
    if (valor !== valor2 || valor2 === "") {
        mostrarError('errorPassword2', "Las contraseñas no coinciden");
        return false; //Si da error, termina el programa
    }
    limpiarError('errorPassword2');
    return true;
}

function validarObservaciones() {
    const valor = leerCampoTexto('observaciones');
    // Regla: Máximo 200 caracteres (es opcional)
    if (valor.length > 200) {
        mostrarError('errorObs', "Observación no válida, máximo 200 carácteres.");
        return false; //Si da error, termina el programa
    }
    limpiarError('errorObs');
    return true;
}

function validarTerminos() {
    // el elemento (el checkbox), no su texto
    const marcado = leerCheckbox('terminos');

    // 2. Comprobamos si NO está marcado (usando el signo !)
    if (!marcado) {
        mostrarError('errorTerminos', "Debes aceptar los términos y condiciones.");
        return false;
    }
    limpiarError('errorTerminos');
    return true;
}

function limpiarFormulario() {
    // Limpiamos mensajes individuales
    const mensajes = document.querySelectorAll('.error');
    mensajes.forEach(msg => msg.textContent = "");

    // Limpiamos el resumen y estado
    listaErrores.innerHTML = "<li>—</li>";
    actualizarEstadoGeneral("Pendiente de validación", true);
    
    const panelEstado = document.getElementById('estadoGeneral');
    if(panelEstado) {
        panelEstado.style.backgroundColor = "";
        panelEstado.style.borderColor = "";
    }
    console.log("Formulario limpiado.");
}


// 5. FUNCIONES GENERALES
function validarFormulario() {
    // Ejecutamos todas y guardamos resultados
    const resultados = {
        nombre: validarNombre(),
        apellidos: validarApellidos(),
        email: validarEmail(),
        telefono: validarTelefono(),
        fecha: validarFecha(),
        provincia: validarProvincia(),
        pass: validarPassword(),
        pass2: validarPassword2(),
        obs: validarObservaciones(),
        terms: validarTerminos()
    };

    // Verificamos si hay algún false
    const esValido = Object.values(resultados).every(val => val === true);

    if (esValido) {
        actualizarEstadoGeneral("¡Formulario correcto! Enviando...", true);
        listaErrores.innerHTML = "<li>Ningún error detectado</li>";
    } else {
        actualizarEstadoGeneral("Hay errores en el formulario.", false);
        generarResumenErrores(resultados); // Pasamos los resultados para no re-validar
    }
    return esValido;
}

function generarResumenErrores(resultados) {
    listaErrores.innerHTML = ""; 
    
    const dicErrores = {
        nombre: "Nombre: Entre 2 y 30 letras.",
        apellidos: "Apellidos: Entre 2 y 60 letras.",
        email: "Email: Formato usuario@dominio.ext.",
        telefono: "Teléfono: Exactamente 9 dígitos.",
        fecha: "Fecha: Debes ser mayor de 18 años.",
        provincia: "Provincia: No puede estar vacía.",
        pass: "Seguridad: La contraseña no cumple los requisitos.",
        pass2: "Contraseña: Las claves no coinciden.",
        obs: "Observaciones: Máximo 200 caracteres.",
        terms: "Términos: Debes aceptar las condiciones."
    };

    // Solo añadimos al resumen los que han fallado (false)
    for (const [campo, esCorrecto] of Object.entries(resultados)) {
        if (!esCorrecto) {
            const li = document.createElement('li');
            li.textContent = dicErrores[campo];
            listaErrores.appendChild(li);
        }
    }
}


// 6. GESTIÓN DE EVENTOS
form.addEventListener('submit', function(event) {
    // 1. Ejecutamos la validación general
    const esValido = validarFormulario();

    // 2. Si hay errores (esValido es false), cancelamos el envío real
    if (!esValido) {
        event.preventDefault(); // Esta línea es la que evita que el formulario se "reinicie" 
        console.warn("Envío bloqueado: revisa los errores en el formulario.");
    } else {
        // Si todo está bien, podrías también usar event.preventDefault() 
        // para ver el mensaje de "¡Formulario correcto!" sin que se borre.
        event.preventDefault(); 
        console.log("¡Todo correcto! Los datos están listos para enviarse.");
    }
});

form.addEventListener('reset', function() {
    limpiarFormulario();
});