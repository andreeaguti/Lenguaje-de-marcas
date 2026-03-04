console.log('¡El archivo JavaScript está funcionando!'); 

// Seleccionamos el botón por su ID 
const boton = document.getElementById('boton'); 

//document.getElementById('boton'): Busca en el archivo HTML el elemento que tiene el atributo id="boton". 
//const boton: Almacenamos el botón en una constante para usarlo más adelante.

console.log(boton); //muestra el botón como un objeto

const mensaje = document.getElementById('mensaje');
//Busca el elemento HTML que tiene el atributo id="mensaje".
//const mensaje: Almacenamos este elemento en una constante para modificar su contenido más adelante.
console.log(mensaje); 

// Añadimos un evento al botón para que reaccione al clic 
boton.addEventListener('click', () => {  //Esto indica que estamos "escuchando" un evento de clic en el botón. 
mensaje.textContent = '¡ACABAS DE PULSAR EL BOTÓN DE EMERGENCIA!';  //muestra el mensaje al usuario
//console.log('¡El botón fue presionado!');: muestra un mensaje en la consola
console.log('He cambiado el mensaje'); 
}); 



//DESAFIO ADICIONAL
const botonColor = document.getElementById('botonColor'); 

const mensaje2 = document.getElementById('mensaje');
//Busca el elemento HTML que tiene el atributo id="mensaje".
//const mensaje: Almacenamos este elemento en una constante para modificar su contenido más adelante.
console.log(mensaje2); 

botonColor.addEventListener('click', () => {  //Esto indica que estamos "escuchando" un evento de clic en el botón. 
    const nuevoColor = '#ffe600'
    document.body.style.backgroundColor = nuevoColor;
//console.log;: muestra un mensaje en la consola
console.log('¡El color ha sido cambiado!');
}); 

