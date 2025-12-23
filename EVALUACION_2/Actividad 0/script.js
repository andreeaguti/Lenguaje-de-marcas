console.log("mi script funciona");

const pepino = document.getElementById('boton'); //document es el html
console.log('pepino'); //esto sirve para ir viendo que funciona

const lechuga = document.getElementById('mensaje')

pepino.addEventListener('click', () => { 
console.log('¡El botón fue presionado!'); 
}); 

pepino.addEventListener('click', () => { 
// Cambiamos el texto del párrafo con un nuevo mensaje 
lechuga.textContent = '¡Este es un mensaje dinámico generado por Andrea Gutiérrez!';
}); 