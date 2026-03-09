
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
const boton14 = document.getElementById('boton14'); 

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
console.log(boton14);



const mensaje = document.getElementById('mensaje');
console.log(mensaje); 

//Escribe un programa que pide la edad por teclado y nos muestra el mensaje de “Eres mayor de edad” solo si lo somos.
boton1.addEventListener('click', () => {
 const edad = parseFloat(prompt('Introduce la edad:'));  
if (edad >= 18) {
mensaje.textContent = '¡ERES MAYOR DE EDAD!'; 
}    //muestra el mensaje al usuario
console.log('Acaba de comprobar si es mayor de edad'); 
});

//Escribe un programa que pide la edad por teclado y nos muestra el mensaje de “eres mayor de edad” o el mensaje de “eres menor de edad”.
boton2.addEventListener('click', () => {  
const edad = parseFloat(prompt('Introduce la edad:'));  
if (edad >= 18) {
mensaje.textContent = '¡ERES MAYOR DE EDAD!'; 
} else{
mensaje.textContent = '¡ERES MENOR DE EDAD!';
}   //muestra el mensaje al usuario
console.log('Acaba de comprobar si es mayor de edad o menor de edad'); 
});

//Realiza un programa que muestre por pantalla los 20 primeros números naturales (1, 2, 3... 20).
boton3.addEventListener('click', () => {
let numeros = '';
for (let i = 1; i <= 20; i++) {
numeros += i + ' ';
}
mensaje.textContent = numeros.trim(); 
console.log('Acaba de mostrar los 20 primeros números naturales'); 
});

//Realiza un programa que muestre los números pares comprendidos entre el 1 y el 200. Para ello utiliza un contador y suma de 2 en 2
boton4.addEventListener('click', () => {
let numerosPares = '';
for (let i = 2; i <= 200; i += 2) {
numerosPares += i + ' ';
}
mensaje.textContent = numerosPares.trim(); 
console.log('Acaba de mostrar los números pares entre 1 y 200'); 
});

//Realiza un programa que muestre los números pares comprendidos entre el 1 y el 200. Esta vez utiliza un contador sumando de 1 en 1.
boton5.addEventListener('click', () => {
let numerosPares = '';
for (let i = 1; i <= 200; i++) {
if (i % 2 === 0) {
numerosPares += i + ' ';
}
}
mensaje.textContent = numerosPares.trim(); 
console.log('Acaba de mostrar los números pares entre 1 y 200 utilizando un contador sumando de 1 en 1'); 
});

//Realiza un programa que muestre los números desde el 1 hasta un número N que se introducirá por teclado.
boton6.addEventListener('click', () => {
const N = parseInt(prompt('Introduce un número N:'));  
let numeros = '';
for (let i = 1; i <= N; i++) {
numeros += i + ' ';
}
mensaje.textContent = numeros.trim(); 
console.log('Acaba de mostrar los números desde el 1 hasta el número N introducido por teclado'); 
});

//Escribe un programa que lea una calificación numérica entre 0 y 10 y la transforma en calificación alfabética, escribiendo el resultado.
//de 0 a <3 Muy Deficiente.
//de 3 a <5 Insuficiente.
//de 5 a <6 Bien.
//de 6 a <9 Notable
//de 9 a 10 Sobresaliente
boton7.addEventListener('click', () => {
const calificacion = parseFloat(prompt('Introduce una calificación numérica entre 0 y 10:'));  
let resultado = '';
if (calificacion >= 0 && calificacion < 3) {
resultado = 'Muy Deficiente';
} else if (calificacion >= 3 && calificacion < 5) {
resultado = 'Insuficiente';
} else if (calificacion >= 5 && calificacion < 6) {
resultado = 'Bien';
} else if (calificacion >= 6 && calificacion < 9) {
resultado = 'Notable';
} else if (calificacion >= 9 && calificacion <= 10) {
resultado = 'Sobresaliente';
} else {
resultado = 'Calificación inválida';
}
mensaje.textContent = resultado; 
console.log('Acaba de transformar la calificación numérica en alfabética'); 
});

//Realiza un programa que lea un número positivo N y calcule y visualice su factorial N! Siendo el factorial:
//0! = 1
//1! = 1
//2! = 2 * 1
//3! = 3 * 2* 1
//N! = N * (N-1) * (N-2)........* 3*2*1
boton8.addEventListener('click', () => {
const N = parseInt(prompt('Introduce un número positivo N:'));  
let factorial = 1;
for (let i = 1; i <= N; i++) {
factorial *= i;
}
mensaje.textContent = `El factorial de ${N} es ${factorial}`; 
console.log('Acaba de calcular y mostrar el factorial de un número positivo N'); 
});

//Escribe un programa que recibe como datos de entrada una hora expresada en horas, minutos y segundos que nos calcula y escribe la hora, minutos y segundos que serán, transcurrido un segundo.
boton9.addEventListener('click', () => {
let horas = parseInt(prompt('Introduce las horas (0-23):'));  
let minutos = parseInt(prompt('Introduce los minutos (0-59):'));  
let segundos = parseInt(prompt('Introduce los segundos (0-59):'));  
segundos += 1;
if (segundos === 60) {
segundos = 0;
minutos += 1;
}
if (minutos === 60) {
minutos = 0;
horas += 1;
}
if (horas === 24) {
horas = 0;
}
mensaje.textContent = `La hora transcurrido un segundo será: ${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`; 
console.log('Acaba de calcular y mostrar la hora transcurrido un segundo'); 
});

//Realiza un programa que lea 10 números no nulos y luego muestre un mensaje de si ha leído algún número negativo o no.
boton10.addEventListener('click', () => {
let haLeidoNegativo = false;
for (let i = 0; i < 10; i++) {
const numero = parseFloat(prompt(`Introduce el número ${i + 1}:`));
if (numero < 0) {
haLeidoNegativo = true;
}
}
if (haLeidoNegativo) {
mensaje.textContent = 'Ha leído algún número negativo.';
} else {
mensaje.textContent = 'No ha leído ningún número negativo.';
}
console.log('Acaba de verificar si se han leído números negativos.'); 
});

//Realiza un programa que lea 10 números no nulos y luego muestre un mensaje indicando cuántos son positivos y cuantos negativos.
boton11.addEventListener('click', () => {
let contadorPositivos = 0;
let contadorNegativos = 0;
for (let i = 0; i < 10; i++) {
const numero = parseFloat(prompt(`Introduce el número ${i + 1}:`));
if (numero > 0) {
contadorPositivos++;
} else if (numero < 0) {
contadorNegativos++;
}
}
mensaje.textContent = `Números positivos: ${contadorPositivos}, Números negativos: ${contadorNegativos}`; 
console.log('Acaba de contar y mostrar la cantidad de números positivos y negativos.'); 
});

//Realiza un programa que lea una secuencia de números no nulos hasta que se introduzca un 0, y luego muestre si ha leído algún número negativo, cuantos positivos y cuantos negativos.
boton12.addEventListener('click', () => {
let contadorPositivos = 0;
let contadorNegativos = 0;
while (true) {
const numero = parseFloat(prompt('Introduce un número no nulo (0 para terminar):'));
if (numero === 0) {
break;
}
if (numero > 0) {
contadorPositivos++;
} else if (numero < 0) {
contadorNegativos++;
}
}
let mensajeResultado = '';
if (contadorNegativos > 0) {
mensajeResultado += 'Ha leído algún número negativo. ';
} else {
mensajeResultado += 'No ha leído ningún número negativo. ';
}
mensajeResultado += `Números positivos: ${contadorPositivos}, Números negativos: ${contadorNegativos}`;
mensaje.textContent = mensajeResultado; 
console.log('Acaba de leer una secuencia de números y mostrar si se han leído números negativos, así como la cantidad de positivos y negativos.'); 
});

//Realiza un programa que calcule y escriba la suma y el producto de los 10 primeros números naturales.
boton13.addEventListener('click', () => {
let suma = 0;
let producto = 1;
for (let i = 1; i <= 10; i++) {
suma += i;
producto *= i;
}
mensaje.textContent = `Suma: ${suma}, Producto: ${producto}`; 
console.log('Acaba de calcular y mostrar la suma y el producto de los 10 primeros números naturales.'); 
});

//Escribe un programa que calcula el salario neto semanal de un trabajador en función del número de horas trabajadas y la tasa de impuestos de acuerdo a las siguientes hipótesis:
//Las primeras 35 horas se pagan a tarifa normal.
//Las horas que pasen de 35 se pagan a 1,5 veces la tarifa normal.
//Las tasas de impuestos son:
//Los primeros 500 euros son libres de impuestos.
//Los siguientes 400 tienen un 25% de impuestos.
//Los restantes un 45% de impuestos.
//Escribir nombre, salario bruto, tasas y salario neto.
boton14.addEventListener('click', () => {
const nombre = prompt('Introduce el nombre del trabajador:');
const horasTrabajadas = parseFloat(prompt('Introduce el número de horas trabajadas:'));
const tarifaNormal = parseFloat(prompt('Introduce la tarifa normal por hora:'));

let salarioBruto = 0;
if (horasTrabajadas <= 35) {
salarioBruto = horasTrabajadas * tarifaNormal;
} else {
salarioBruto = (35 * tarifaNormal) + ((horasTrabajadas - 35) * tarifaNormal * 1.5);
}

let impuestos = 0;
if (salarioBruto > 900) {
impuestos += (salarioBruto - 900) * 0.45;
impuestos += 400 * 0.25;
} else if (salarioBruto > 500) {
impuestos += (salarioBruto - 500) * 0.25;
}

const salarioNeto = salarioBruto - impuestos;
mensaje.textContent = `Nombre: ${nombre}, Salario Bruto: ${salarioBruto.toFixed(2)} euros, Impuestos: ${impuestos.toFixed(2)} euros, Salario Neto: ${salarioNeto.toFixed(2)} euros`; 
console.log('Acaba de calcular y mostrar el salario neto semanal de un trabajador en función de las horas trabajadas y la tasa de impuestos.'); 
});