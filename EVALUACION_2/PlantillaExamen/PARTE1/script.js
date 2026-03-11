// Capturamos el panel donde se verán los resultados
const mensaje = document.getElementById('mensaje'); 

// Función para escribir en pantalla de forma rápida
function imprimir(texto) {
    mensaje.textContent = texto; 
}

// EJERCICIO 1: Registro de notas
document.getElementById('boton1').addEventListener('click', () => {

let contadorAprobados = 0;
let contadorSuspensos = 0;
for (let i = 0; i < 10; i++) {
const numero = parseFloat(prompt(`Introduce la nota ${i + 1}:`));
if (numero > 5) {
contadorAprobados++;
} else if (numero < 5) {
contadorSuspensos++;
}
}


mensaje.textContent = `Números Aprobados: ${contadorAprobados}, Números Suspensos: ${contadorSuspensos}`; 
});



// EJERCICIO 5: Analisis de una frase
document.getElementById('boton5').addEventListener('click', () => {

    let frase = prompt("Introduce una frase:");
    let palabras = frase.split(/\s+/).length; 
    imprimir("La frase tiene " + frase.length + " caracteres " + "y " + palabras + "palabras");
});

