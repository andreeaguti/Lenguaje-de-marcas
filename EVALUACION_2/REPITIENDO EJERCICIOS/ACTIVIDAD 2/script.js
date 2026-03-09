
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

//Escribe un programa que calcule el área de un cuadrado de lado 5.
boton2.addEventListener('click', () => {  
    const lado = 5;
const resultadoArea = lado * lado;

mensaje.textContent = '¡El resultado es: ' + resultadoArea + '!';
console.log('Acaba de dar los buenos dias'); 
});

//Escribe un programa que calcule el área de un cuadrado cuyo lado se introduce por teclado.
boton3.addEventListener('click', () => {
    const lado = parseFloat(prompt('Introduce el lado del cuadrado:'));
const resultadoArea = lado * lado;

mensaje.textContent = '¡El resultado es: ' + resultadoArea + '!';
console.log('Acaba de calcular el área del cuadrado'); 
});

//Escribe un programa que lea dos números, calcule y muestre el valor de sus suma, resta, producto y división.
boton4.addEventListener('click', () => {
const lado1 = parseFloat(prompt('Introduce el primer numero:'));
const lado2 = parseFloat(prompt('Introduce el lado del cuadrado:'));
const resultadoSuma = lado1 + lado2;
const resultadoResta = lado1 - lado2;
const resultadoProducto = lado1 * lado2;
const resultadoDivision = lado1 / lado2;

mensaje.textContent = '¡El resultado de la suma es: ' + resultadoSuma + '!';
mensaje.textContent = '¡El resultado de la resta es: ' + resultadoResta + '!';
mensaje.textContent = '¡El resultado del producto es: ' + resultadoProducto + '!';
mensaje.textContent = '¡El resultado de la división es: ' + resultadoDivision + '!';

console.log('Acaba de calcular las operaciones'); 
});

//Escribe un programa que toma como dato de entrada un número que corresponde a la longitud de un radio y nos escribe la longitud de la circunferencia, 
// el área del círculo y el volumen de la esfera que corresponden con dicho radio.
boton5.addEventListener('click', () => {
    const radio = parseFloat(prompt('Introduce la longitud del radio:'));
    const longitudCircunferencia = 2 * Math.PI * radio;
    const areaCirculo = Math.PI * radio ** 2;
    const volumenEsfera = (4/3) * Math.PI * radio ** 3;

    mensaje.textContent = 'Longitud de la circunferencia: ' + longitudCircunferencia.toFixed(2);
    mensaje.textContent += '\nÁrea del círculo: ' + areaCirculo.toFixed(2);
    mensaje.textContent += '\nVolumen de la esfera: ' + volumenEsfera.toFixed(2);

    console.log('Acaba de calcular los valores de la circunferencia, el área del círculo y el volumen de la esfera'); 
});

//Escribe un programa que dado el precio de un artículo y el precio de venta real nos muestre el porcentaje de descuento realizado.
boton6.addEventListener('click', () => {
    const precioArticulo = parseFloat(prompt('Introduce el precio del artículo:'));
    const precioVenta = parseFloat(prompt('Introduce el precio de venta real:'));
    const descuento = precioArticulo - precioVenta;
    const porcentajeDescuento = (descuento / precioArticulo) * 100;

    mensaje.textContent = 'El porcentaje de descuento realizado es: ' + porcentajeDescuento.toFixed(2) + '%';
    console.log('Acaba de calcular el porcentaje de descuento'); 
});

//Escribe un programa que lea un valor correspondiente a una distancia en millas marinas y escriba la distancia en metros. 
// Sabiendo que una milla marina equivale a 1.852 metros.
boton7.addEventListener('click', () => {
    const millasMarinas = parseFloat(prompt('Introduce la distancia en millas marinas:'));
    const metros = millasMarinas * 1852;

    mensaje.textContent = 'La distancia en metros es: ' + metros.toFixed(2) + ' metros';
    console.log('Acaba de convertir millas marinas a metros'); 
});

//Escribe un programa que lee dos números y los visualiza en orden ascendente.
boton8.addEventListener('click', () => {
    const numero1 = parseFloat(prompt('Introduce el primer número:'));
    const numero2 = parseFloat(prompt('Introduce el segundo número:'));

    if (numero1 < numero2) {
        mensaje.textContent = 'Los números en orden ascendente son: ' + numero1 + ' y ' + numero2;
    } else {
        mensaje.textContent = 'Los números en orden ascendente son: ' + numero2 + ' y ' + numero1;
    }
    console.log('Acaba de ordenar los números en orden ascendente');
});

//Escribe un programa que lee dos números y nos dice cuál es el mayor o si son iguales.
boton9.addEventListener('click', () => {
    const numero1 = parseFloat(prompt('Introduce el primer número:'));
    const numero2 = parseFloat(prompt('Introduce el segundo número:'));

    if (numero1 > numero2) {
        mensaje.textContent = 'El número mayor es: ' + numero1;
    } else if (numero2 > numero1) {
        mensaje.textContent = 'El número mayor es: ' + numero2;
    } else {
        mensaje.textContent = 'Los números son iguales.';
    }
    console.log('Acaba de comparar los números para determinar cuál es mayor o si son iguales');
});

//Escribe un programa que lea tres números distintos y nos diga cuál es el mayor.
boton10.addEventListener('click', () => {
    const numero1 = parseFloat(prompt('Introduce el primer número:'));
    const numero2 = parseFloat(prompt('Introduce el segundo número:'));
    const numero3 = parseFloat(prompt('Introduce el tercer número:'));

    let mayor = numero1;

    if (numero2 > mayor) {
        mayor = numero2;
    }

    if (numero3 > mayor) {
        mayor = numero3;
    }

    mensaje.textContent = 'El número mayor es: ' + mayor;
    console.log('Acaba de comparar los números para determinar cuál es el mayor');
});

//Escribe un programa que lee dos números, calcula y muestra el valor de su suma, resta, producto y división. 
// (Ten en cuenta la división por cero).
boton11.addEventListener('click', () => {
    const numero1 = parseFloat(prompt('Introduce el primer número:'));
    const numero2 = parseFloat(prompt('Introduce el segundo número:'));

    const suma = numero1 + numero2;
    const resta = numero1 - numero2;
    const producto = numero1 * numero2;
    let division;

    if (numero2 !== 0) {
        division = numero1 / numero2;
    } else {
        division = 'No se puede dividir por cero';
    }

    mensaje.textContent = 'Suma: ' + suma + '\nResta: ' + resta + '\nProducto: ' + producto + '\nDivisión: ' + division;
    console.log('Acaba de calcular la suma, resta, producto y división de los números');
});

//Escribe un programa que lee 2 números y muestra el mayor.
boton12.addEventListener('click', () => {
    const numero1 = parseFloat(prompt('Introduce el primer número:'));
    const numero2 = parseFloat(prompt('Introduce el segundo número:'));

    if (numero1 > numero2) {
        mensaje.textContent = 'El número mayor es: ' + numero1;
    } else {
        mensaje.textContent = 'El número mayor es: ' + numero2;
    }
    console.log('Acaba de comparar los números para determinar cuál es el mayor');
});

//Escribe un programa que lee un número y me dice si es positivo o negativo consideraremos el cero como positivo.
boton13.addEventListener('click', () => {
    const numero = parseFloat(prompt('Introduce un número:'));

    if (numero >= 0) {
        mensaje.textContent = 'El número es positivo.';
    } else {
        mensaje.textContent = 'El número es negativo.';
    }
    console.log('Acaba de determinar si el número es positivo o negativo');
});