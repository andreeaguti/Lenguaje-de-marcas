/* === PASO 1: CAPTURA DE ELEMENTOS === */
const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");

const btnSumar = document.getElementById("btnSumar");
const btnRestar = document.getElementById("btnRestar");
const btnMultiplicar = document.getElementById("btnMultiplicar");
const btnDividir = document.getElementById("btnDividir");
// NUEVAS CONSTANTES
const btnPotencia = document.getElementById("btnPotencia");
const btnModulo = document.getElementById("btnModulo");
const btnLimpiar = document.getElementById("btnLimpiar");

const salidaResultado = document.getElementById("resultado");
const salidaMensaje = document.getElementById("mensaje");

/* === PASO 2: FUNCIONES DE LECTURA Y SALIDA === */
function leerNumeros() {
    const n1 = parseFloat(inputNum1.value); // Uso parseFloat por si hay decimales
    const n2 = parseFloat(inputNum2.value);
    if (isNaN(n1) || isNaN(n2)) return null;
    return { n1, n2 };
}

function mostrarSalida(valor, mensaje = " ") {
    salidaResultado.textContent = valor;
    salidaMensaje.textContent = mensaje;
}

/* === PASO 3: FUNCIONES MATEMÁTICAS === */
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b === 0 ? null : a / b;

// NUEVAS FUNCIONES DE LOGICA
function potencia(a, b) { return a ** b; } //
function modulo(a, b) { 
    if (b === 0) return null; // No se puede hacer módulo de cero
    return a % b; //
}

/* === PASO 4: EJECUTAR OPERACIÓN (Con Redondeo) === */
function ejecutarOperacion(operacion) {
    const datos = leerNumeros();
    if (datos === null) {
        mostrarSalida("-", "Introduce dos números válidos.");
        return;
    }

    let resultado = operacion(datos.n1, datos.n2);

    if (resultado === null) {
        mostrarSalida("-", "Error: Operación no permitida (ej: div/0)");
        return;
    }

    // LÓGICA DE REDONDEO: Si tiene decimales, mostramos solo 2
    if (!Number.isInteger(resultado)) {
        resultado = resultado.toFixed(2); //
    }

    mostrarSalida(resultado, "Operación realizada correctamente.");
}

/* === PASO 5: EVENT LISTENERS === */
btnSumar.addEventListener("click", () => ejecutarOperacion(sumar));
btnRestar.addEventListener("click", () => ejecutarOperacion(restar));
btnMultiplicar.addEventListener("click", () => ejecutarOperacion(multiplicar));
btnDividir.addEventListener("click", () => ejecutarOperacion(dividir));

// NUEVOS EVENTOS
btnPotencia.addEventListener("click", () => ejecutarOperacion(potencia));
btnModulo.addEventListener("click", () => ejecutarOperacion(modulo));

btnLimpiar.addEventListener("click", () => {
    inputNum1.value = "";
    inputNum2.value = "";
    mostrarSalida("-", "Cajetines vacíos.");
    inputNum1.focus();
});

// Mensaje inicial
mostrarSalida("-", "Introduce dos números y selecciona una operación.");