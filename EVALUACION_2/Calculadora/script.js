//Inputs donde el usuario escribe los números
const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");

//Botones de operaciones
const btnSumar = document.getElementById("btnSumar");
const btnRestar = document.getElementById("btnRestar");
const btnMultiplicar = document.getElementById("btnMultiplicar");
const btnDividir = document.getElementById("btnDividir");
const btnLimpiar = document.getElementById("btnLimpiar");

//Zona donde mostraremos resultados y mensajes
const salidaResultado = document.getElementById("resultado");
const salidaMensaje = document.getElementById("mensaje");

//PASO 2: FUNCIÓN PARA LEER Y COMPROBAR LOS NUMEROS INTRODUCIDOS

function leerNumeros(){
//Convertimos los valores de texto en números
const n1 = Number(inputNum1.value);
const n2 = Number(inputNum2.value);

//Comprobamos si alguno NO es un número válido
if(isNaN(n1) || isNaN(n2)) {

    //Si hay error devolvemos null
    return null;
}

//Si todo está correcto, devolvemos ambos números
return {
    n1: n1,
    n2: n2
    }
};

//PASO 3
//Función suma 
function sumar (a, b) {
    return a+b;
}

//Función resta
function restar (a, b) {
    return a-b;
}
//Función multiplicar
function multiplicar (a, b) {
    return a*b;
}
//Función división (con control del 0)
function dividir (a, b) {
    //no se puede dividir entre 0
    if (b === 0) {
        return null;
    }
    return a/b;
}

//PASO 4
//`Para mostrar datos en pantalla

function mostrarSalida(valor, mensaje) {

    //si no nos pasan mensaje, usamos texto vacio
    if(mensaje === undefined) {
        mensaje = "";
    }
    //mostramos el resultado 
    salidaResultado.textContent = valor;

    //mostramos el mensaje
    salidaMensaje.textContent = mensaje;
}

//PASO 5

function ejecutarOperacion(operacion){

    //leemos los números
    const datos = leerNumeros();

    //Si hay error al leer
    if (datos === null) {

        mostrarSalida("-", "Debes introducir dos números váldos");
        //salimos de la funcion
        return;
    }

    //Sacamos los valores del objeto
    const n1 = datos.n1;
    const n2= datos.n2;

    
    let resultado = operacion(n1, n2);
    //Si la operación devuelve null (error)
    if (resultado === null){

        mostrarSalida("-", "No se puede realizar esta operación");

        return;
    }

    // Comprobamos si el número tiene decimales
    if (resultado % 1 !== 0) {
        resultado = resultado.toFixed(2);
    }

    //SI todo ha ido bien
    mostrarSalida(resultado, "Operación realizada correctamente.")
}

//PASO 6:PROGRAGAMOS LOS EVENTOS DE LOS BOTONES

//BOTÓN SUMAR
btnSumar.addEventListener("click", function (){

    ejecutarOperacion(sumar);

});

//BOTÓN RESTAR
btnRestar.addEventListener("click", function (){

    ejecutarOperacion(restar);

});

//BOTÓN MULTIPLICAR
btnMultiplicar.addEventListener("click", function (){

    ejecutarOperacion(multiplicar);
});

//BOTÓN SUMAR
btnDividir.addEventListener("click", function (){

    ejecutarOperacion(dividir);
});

// BOTÓN POTENCIA
btnPotencia.addEventListener("click", function () {
    ejecutarOperacion(potencia);
});

// BOTÓN MÓDULO
btnModulo.addEventListener("click", function () {
    ejecutarOperacion(modulo);
});


//PASO 7: BOTÓN LIMPIAR

btnLimpiar.addEventListener("click", function (){
    
    //VACIAR INPUTS
    inputNum1.value = "";
    inputNum2.value = "";

    //LIMPIAR SALIDA
    mostrarSalida("-", "");
    
    //COLOCAR EL CURSOR EN EL PRIMER INPUT
    inputNum1.focus();
    });

    //PASO 8
    mostrarSalida("-", "Introduce dos números y selecciona una operación.");

    /*AÑADIR:
Redondeo: si el resultado tiene muchos decimales, mostrar solo 2:
Pista: resultado.toFixed(2)
Añadir potencia:
a ** b
Añadir módulo:
a % b*/
// Función potencia
function potencia(a, b) {
    return a ** b;
}

// Función módulo (resto de la división)
function modulo(a, b) {
    if (b === 0) return null;
    return a % b;
}


