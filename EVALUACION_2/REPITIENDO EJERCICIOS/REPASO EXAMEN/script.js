/* === HERRAMIENTAS BÁSICAS === */
// Capturamos el panel donde se verán los resultados
const mensaje = document.getElementById('mensaje'); 

// Función para escribir en pantalla de forma rápida
function imprimir(texto) {
    mensaje.textContent = texto; 
}

// Variable global para el contador del Ejercicio 14
let clics = 0; 

/* === BLOQUE 1: EJERCICIOS 1 AL 14 === */

// EJERCICIO 1: Mostrar un saludo simple de bienvenida en pantalla.
document.getElementById('boton1').addEventListener('click', () => {
    imprimir("¡Hola! Estás listo para el examen de DAW.");
});

// EJERCICIO 2: Pedir dos números por prompt, sumarlos y mostrar el resultado (usando parseFloat para números decimales).
document.getElementById('boton2').addEventListener('click', () => {
    let n1 = prompt("Introduce el primer número:");
    let n2 = prompt("Introduce el segundo número:");
    let suma = parseFloat(n1) + parseFloat(n2);
    imprimir("La suma total es: " + suma);
});

// EJERCICIO 3: Calcular el área de un cuadrado pidiendo la medida de un lado al usuario.
document.getElementById('boton3').addEventListener('click', () => {
    let lado = prompt("¿Cuánto mide el lado del cuadrado?");
    let area = parseFloat(lado) * parseFloat(lado);
    imprimir("El área del cuadrado es: " + area);
});

// EJERCICIO 4: Determinar si un número introducido es par o impar utilizando el operador de módulo (%).
document.getElementById('boton4').addEventListener('click', () => {
    let num = prompt("Introduce un número:");
    if (parseInt(num) % 2 === 0) {
        imprimir("El número " + num + " es PAR.");
    } else {
        imprimir("El número " + num + " es IMPAR.");
    }
});

// EJERCICIO 5: Calcular el precio final de un producto sumándole el 21% de IVA y mostrarlo con dos decimales.
document.getElementById('boton5').addEventListener('click', () => {
    let precio = prompt("Introduce el precio base:");
    let total = parseFloat(precio) * 1.21;
    imprimir("Precio con IVA: " + total.toFixed(2) + "€");
});

// EJERCICIO 6: Pedir una cadena de texto y transformarla completamente a letras mayúsculas.
document.getElementById('boton6').addEventListener('click', () => {
    let texto = prompt("Escribe algo en minúsculas:");
    imprimir("TEXTO EN GRANDE: " + texto.toUpperCase());
});

// EJERCICIO 7: Clasificar una nota académica: menos de 5 es suspenso, entre 5 y 8.9 es aprobado, y 9 o más es sobresaliente.
document.getElementById('boton7').addEventListener('click', () => {
    let nota = parseFloat(prompt("Introduce tu nota (0-10):"));
    if (nota < 5) imprimir("Suspenso ❌");
    else if (nota < 9) imprimir("Aprobado ✅");
    else imprimir("Sobresaliente 🌟");
});

// EJERCICIO 8: Generar y mostrar un número entero aleatorio entre 1 y 100.
document.getElementById('boton8').addEventListener('click', () => {
    let azar = Math.floor(Math.random() * 100) + 1;
    imprimir("Tu número aleatorio es: " + azar);
});

// EJERCICIO 9: Pedir una palabra al usuario y mostrarla escrita al revés (invertida).
document.getElementById('boton9').addEventListener('click', () => {
    let palabra = prompt("Introduce una palabra:");
    let invertida = palabra.split("").reverse().join("");
    imprimir("Palabra al revés: " + invertida);
});

// EJERCICIO 10: Convertir una distancia dada en kilómetros a millas (usando el factor 0.621371).
document.getElementById('boton10').addEventListener('click', () => {
    let km = prompt("Kilómetros a convertir:");
    let millas = parseFloat(km) * 0.621371;
    imprimir(km + " km son " + millas.toFixed(2) + " millas.");
});

// EJERCICIO 11: Contar cuántos caracteres tiene una frase introducida por el usuario (incluyendo espacios).
document.getElementById('boton11').addEventListener('click', () => {
    let frase = prompt("Introduce una frase:");
    imprimir("La frase tiene " + frase.length + " caracteres.");
});

// EJERCICIO 12: Cambiar dinámicamente el color de fondo (background) de la página a color amarillo.
document.getElementById('boton12').addEventListener('click', () => {
    document.body.style.backgroundColor = '#ffe600'; 
    imprimir("¡Color de fondo cambiado!");
});

// EJERCICIO 13: Pedir la edad al usuario y verificar si es mayor o igual a 18 años para determinar su mayoría de edad.
document.getElementById('boton13').addEventListener('click', () => {
    let edad = prompt("¿Qué edad tienes?");
    if (parseInt(edad) >= 18) imprimir("Eres mayor de edad.");
    else imprimir("Eres menor de edad.");
});

// EJERCICIO 14: Crear un contador de clics que se incremente y muestre el total acumulado cada vez que se pulsa el botón.
document.getElementById('boton14').addEventListener('click', () => {
    clics++; 
    imprimir("Has pulsado este botón " + clics + " veces.");
});

/* === BLOQUE 2: EJERCICIOS 15 AL 28 === */

// EJERCICIO 15: Calcular el perímetro de un rectángulo pidiendo la base y la altura.
document.getElementById('boton15').addEventListener('click', () => {
    let base = parseFloat(prompt("Base del rectángulo:"));
    let altura = parseFloat(prompt("Altura del rectángulo:"));
    imprimir("El perímetro es: " + (2 * (base + altura)));
});

// EJERCICIO 16: Verificar si un número entero es múltiplo de 5 utilizando el operador de resto (%).
document.getElementById('boton16').addEventListener('click', () => {
    let num = parseInt(prompt("Introduce un número:"));
    if (num % 5 === 0) imprimir(num + " es múltiplo de 5.");
    else imprimir(num + " NO es múltiplo de 5.");
});

// EJERCICIO 17: Convertir un peso dado en libras a kilogramos (1 libra ≈ 0.453592 kg).
document.getElementById('boton17').addEventListener('click', () => {
    let libras = prompt("Peso en libras:");
    let kilos = parseFloat(libras) * 0.453592;
    imprimir(libras + " lbs son " + kilos.toFixed(2) + " kg.");
});

// EJERCICIO 18: Contar cuántas palabras contiene una frase (separadas por espacios).
document.getElementById('boton18').addEventListener('click', () => {
    let frase = prompt("Escribe una frase:").trim();
    let palabras = frase.split(/\s+/).length; 
    imprimir("La frase tiene " + palabras + " palabras.");
});

// EJERCICIO 19: Obtener la fecha actual del sistema y mostrarla en formato local.
document.getElementById('boton19').addEventListener('click', () => {
    let hoy = new Date();
    imprimir("Hoy es: " + hoy.toLocaleDateString());
});

// EJERCICIO 20: Simular el lanzamiento de una moneda (50% de probabilidad para Cara o Cruz).
document.getElementById('boton20').addEventListener('click', () => {
    let moneda = Math.random() < 0.5 ? "CARA" : "CRUZ";
    imprimir("Resultado: " + moneda);
});

// EJERCICIO 21: Calcular el factorial de un número entero positivo usando un bucle.
document.getElementById('boton21').addEventListener('click', () => {
    let num = parseInt(prompt("Número para factorial:"));
    let resultado = 1;
    for (let i = 1; i <= num; i++) { resultado *= i; }
    imprimir("El factorial es: " + resultado);
});

// EJERCICIO 22: Cambiar el estilo CSS del panel de mensajes para aumentar el tamaño de la letra.
document.getElementById('boton22').addEventListener('click', () => {
    mensaje.style.fontSize = "2rem"; 
    imprimir("¡Tamaño de fuente aumentado!");
});

// EJERCICIO 23: Pedir una palabra y verificar si comienza específicamente con la letra "A" (sin importar mayúsculas).
document.getElementById('boton23').addEventListener('click', () => {
    let palabra = prompt("Escribe una palabra:").toUpperCase();
    if (palabra.startsWith("A")) imprimir("¡Empieza por A!");
    else imprimir("No empieza por A.");
});

// EJERCICIO 24: Calcular la edad de un perro en "años humanos" multiplicando su edad real por 7.
document.getElementById('boton24').addEventListener('click', () => {
    let edad = prompt("Edad de tu perro:");
    imprimir("En años humanos son: " + (parseInt(edad) * 7));
});

// EJERCICIO 25: Verificar si un número introducido se encuentra dentro del rango numérico entre 10 y 50 inclusive.
document.getElementById('boton25').addEventListener('click', () => {
    let num = parseFloat(prompt("Introduce un número:"));
    if (num >= 10 && num <= 50) imprimir("Dentro del rango (10-50).");
    else imprimir("Fuera de rango.");
});

// EJERCICIO 26: Pedir tres palabras distintas y unirlas en una sola cadena separadas por guiones.
document.getElementById('boton26').addEventListener('click', () => {
    let p1 = prompt("Palabra 1:");
    let p2 = prompt("Palabra 2:");
    let p3 = prompt("Palabra 3:");
    imprimir("Unión: " + p1 + "-" + p2 + "-" + p3);
});

// EJERCICIO 27: Restaurar el color de fondo de la página al color predeterminado definido originalmente.
document.getElementById('boton27').addEventListener('click', () => {
    document.body.style.backgroundColor = "#fdfbfb"; 
    imprimir("Fondo restaurado.");
});

// EJERCICIO 28: Convertir una cantidad de horas introducida por el usuario a su equivalente en minutos.
document.getElementById('boton28').addEventListener('click', () => {
    let horas = prompt("Introduce horas:");
    imprimir(horas + " horas son " + (parseInt(horas) * 60) + " minutos.");
});

// EJERCICIO 29: Cambiar el color de fondo de la página de forma aleatoria eligiendo un color de una lista predefinida.
document.getElementById('boton29').addEventListener('click', () => {
    const colores = ['#ff9999', '#99ff99', '#9999ff', '#ffff99'];
    
    // Obtenemos un color aleatorio del array
    let nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    
    // Cambiamos el fondo del body directamente
    document.body.style.backgroundColor = nuevoColor;
    
    imprimir("Fondo cambiado a color aleatorio: " + nuevoColor);
});
// EJERCICIO 44: Modo Oscuro Alternable (Toggle).
// Requisito: Cambiar fondo, texto y elementos necesarios para legibilidad.
document.getElementById('boton30').addEventListener('click', () => {
    // Capturamos los elementos que necesitan cambio visual
    const cuerpo = document.body;
    const contenedor = document.querySelector('.main-container');
    const titulo = document.querySelector('h1');

    // LÓGICA DE ALTERNANCIA:
    // Comprobamos si el color de fondo actual es el oscuro (usamos RGB porque el navegador lo lee así)
    if (cuerpo.style.backgroundColor === "rgb(31, 42, 55)") {
        
        // --- VOLVER A MODO CLARO ---
        cuerpo.style.backgroundColor = "#a1c4fd"; // Color original del CSS
        cuerpo.style.color = "#1f2a37";           // Texto original oscuro
        contenedor.style.backgroundColor = "rgba(255, 255, 255, 0.95)"; // Fondo blanco del panel
        titulo.style.color = "#ff0844";           // Título rojo original
        
        imprimir("Modo Claro activado ☀️");

    } else {
        
        // --- ACTIVAR MODO OSCURO ---
        cuerpo.style.backgroundColor = "#1f2a37"; // Gris muy oscuro (casi negro)
        cuerpo.style.color = "#ffffff";           // Texto blanco para legibilidad
        contenedor.style.backgroundColor = "#374151"; // Gris medio para el panel central
        titulo.style.color = "#ffb199";           // Rosa suave para que resalte en oscuro
        
        imprimir("Modo Oscuro activado 🌙");
    }
});