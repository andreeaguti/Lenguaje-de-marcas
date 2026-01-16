console.log("el script funciona chat");

const textopantalla = document.getElementById('mensaje');

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
const boton14 = document.getElementById('boton13');

//Primer ejercicio

boton1.addEventListener('click', () => {
    console.log('el boton1 ha sido pulsado');

    textopantalla.textContent = '¡Buenos Dias chat!';
});

//Segundo ejercicio

boton2.addEventListener('click', () => {
    console.log('el boton2 ha sido pulsado');

    var lado = 5;
    textopantalla.textContent = 'El area de un cuadrado de ' + lado + ' de lado es: ' + lado * lado;
});

//Tercer ejercicio

boton3.addEventListener('click', () => {
    console.log('el boton3 ha sido pulsado');

    var ladoCuadrado = prompt("Introduce el lado del cuadrado");
    textopantalla.textContent = 'El area de un cuadrado de ' + ladoCuadrado + ' de lado es: ' + ladoCuadrado * ladoCuadrado;
});

//Cuarto ejercicio

boton4.addEventListener('click', () => {
    console.log('el boton4 ha sido pulsado');

    var num1 = parseInt(prompt("Introduce un primer numero"));
    var num2 = parseInt(prompt("Introduce un segundo numero"));

    var suma = num1 + num2;
    var resta = num1 - num2;
    var producto = num1 * num2;
    var division = num1 / num2;

    textopantalla.textContent = 'Suma: ' + suma + ' Resta: ' + resta + ' Producto: ' + producto + ' División: ' + division;

});

//Quinto ejercicio

boton5.addEventListener('click', () => {
    console.log('el boton5 ha sido pulsado');

    var radio = parseInt(prompt("Introduce el radio del circulo"));

    var longCircunferencia = 2 * Math.PI * radio;
    var areaCirculo = Math.PI * (radio * radio);
    var volumenEsfera = (4 / 3) * Math.PI * (radio * radio * radio);

    textopantalla.textContent = 'Longitud Circunferencia: ' + longCircunferencia + ' Area del circulo: ' + areaCirculo + ' Volumen de la esfera: ' + volumenEsfera;
});

//Sexto ejercicio

boton6.addEventListener('click', () => {
    console.log('el boton6 ha sido presionado');

    var precioArticulo = prompt("Introduce el precio de un articulo revajado");
    var precioReal = prompt("Intduce el precio real de un articulo");

    var descuento = (1 - (precioArticulo / precioReal)) * 100;
    
    textopantalla.textContent = 'El descuento es de un: ' + descuento + '%';
});

//Septimo ejercicio

boton7.addEventListener('click', () => {
    console.log('El boton7 ha sido presionado');

    var millas = prompt("Introduce una distancia en millas marinas");
    var metros = millas * 1852;

    textopantalla.textContent = 'La distancia en metros son: ' + metros + 'm';
});

//Octavo ejercicio

boton8.addEventListener('click', () => {
    console.log('El boton8 ha sido presionado');

    var num3 = prompt("Introduce el primer numero");
    var num4 = prompt("Introduce el segundo numero");

    if (num3 > num4) {
        textopantalla.textContent = num4 + ' - ' + num3;
    } else {
        textopantalla.textContent = num3 + ' - ' + num4;
    }

});

//Noveno ejercicio

boton9.addEventListener('click', () => {
    console.log('El boton9 ha sido presionado');

    var numero1 = prompt("Introduce el primer numero");
    var numero2 = prompt("Introduce el segundo numero");

    if (numero1 > numero2) {
        textopantalla.textContent = 'El numero ' + numero1 + ' es menor que ' + numero2;
    } else if (numero1 < numero2) {
        textopantalla.textContent = 'El numero ' + numero1 + ' es mayor que ' + numero2;
    } else {
        textopantalla.textContent = 'El numero ' + numero1 + ' es igual que ' + numero2;
    }

});

//Decimo ejercicio

boton10.addEventListener('click', () => {
    console.log('El boton10 ha sido presionado');

    var num5 = parseInt(prompt("Introduce un numero"));
    var num6 = parseInt(prompt("Introduce un numero"));
    var num7 = parseInt(prompt("Introduce un numero"));

    textopantalla.textContent = 'El numero más grande es el ' + Math.max(num5, num6, num7);
});

//Onceavo ejercicio

boton11.addEventListener('click', () => {
    console.log('El boton11 ha sido presionado');

    var num8 = parseInt(prompt("Introduce un primer numero"));
    var num9 = parseInt(prompt("Introduce un segundo numero"));

    if (num9 = 0) {
        textopantalla.textContent = 'No se puede poner el 0 como divisor';
    } else {
        var suma = num8 + num9;
        var resta = num8 - num9;
        var producto = num8 * num9;
        var division = num8 / num9;

        textopantalla.textContent = 'Suma: ' + suma + ' Resta: ' + resta + ' Producto: ' + producto + ' División: ' + division;
    }

});

//Doceavo ejercicio

boton12.addEventListener('click', () => {
    console.log('El boton12 ha sido presionado');

    var num10 = parseInt(prompt("Introduce el primer numero"));
    var num11 = parseInt(prompt("Introduce el segundo numero"));

    textopantalla.textContent = 'El numero más grande es el ' + Math.max(num10, num11);

});

//Decimotercer ejercicio

boton13.addEventListener('click', () => {
    console.log('El boton13 ha sido presionado');

    var num12 = parseInt(prompt("Introduce un numero"));

    if (num12 >= 0) {
        textopantalla.textContent = 'El numero ' + num12 + ' es positivo';
    } else {
        textopantalla.textContent = 'El numero ' + num12 + ' es negativo';
    }
});
