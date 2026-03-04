
const boton1 = document.getElementById('boton1'); 
const boton2 = document.getElementById('boton2'); 
const boton3 = document.getElementById('boton3'); 
const boton4 = document.getElementById('boton4'); 
const boton5 = document.getElementById('boton5'); 
const boton6 = document.getElementById('boton6'); 
const boton7 = document.getElementById('boton7'); 
const boton8 = document.getElementById('boton8'); 
const boton9 = document.getElementById('boton9'); 
const boton10 = document.getElementById('boton10'); 
const boton11 = document.getElementById('boton11');
const boton12 = document.getElementById('boton12');  
const boton13 = document.getElementById('boton13'); 

//muestra el botón como un objeto
console.log(boton1);
console.log(boton2);
console.log(boton3);
console.log(boton4);
console.log(boton5);
console.log(boton6);
console.log(boton7);
console.log(boton8);
console.log(boton9);
console.log(boton10);
console.log(boton11);
console.log(boton12);
console.log(boton13);



const mensaje = document.getElementById('mensaje');
console.log(mensaje); 

//Escribe un programa que dé los “buenos días”. 
boton1.addEventListener('click', () => {  //Esto indica que estamos "escuchando" un evento de clic en el botón. 
mensaje.textContent = '¡BUENOS DIAS!';  //muestra el mensaje al usuario
console.log('Acaba de dar los buenos dias'); 
});

boton2.addEventListener('click', () => {  
    const lado = 5;
const resultadoArea = lado * lado;

mensaje.textContent = '¡El resultado es:
console.log('Acaba de dar los buenos dias'); 
});