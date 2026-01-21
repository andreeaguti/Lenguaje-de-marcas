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
const boton14 = document.getElementById('boton14');

//Primer ejercicio
boton1.addEventListener('click', () => {
    console.log('el boton1 ha sido pulsado');
    var edad = prompt("Introduzca la edad ");
    if (edad >= 18){
        textopantalla.textContent = 'Es mayor de edad';
    }
    textopantalla.textContent = 'Tiene ' + edad + ' años ';
});

//Segundo ejercicio
boton2.addEventListener('click', () => {
    console.log('el boton2 ha sido pulsado');
    var edad = prompt("Introduzca la edad ");
    if (edad >= 18){
        textopantalla.textContent = 'Es mayor de edad';
    }
    else {
        textopantalla.textContent = '¡Es menor de edad!';
    };
});

//Tercer ejercicio
boton3.addEventListener('click', () => {
    console.log('Ejercicio 3');
    var texto = "";
    for (i = 0; i < 11; i++){
        texto = texto + i + "";
    }
    textopantalla.textContent = texto;
});

//Cuarto ejercicio
boton4.addEventListener('click', () => {
    console.log('Ejercicio 4');
    var texto = "";
    for (i = 0; i < 202; i = i + 2){
        texto = texto + i + "";
    }
    textopantalla.textContent = texto;
});

//Quinto ejercicio
boton5.addEventListener('click', () => {
    console.log('Ejercicio 5');
    var texto = "";
    for (i = 2; i < 202; i++){
        if (i % 2 == 0)
        texto = texto + i + "";
    }
    textopantalla.textContent = texto;
});

//Sexto ejercicio
boton6.addEventListener('click', () => {
    console.log('Ejercicio 6');
    var numero =parseInt(prompt("Introduzca un número "));
    var texto = "";
    for (i=0; i <= numero; i++) {
        texto = texto + i + "";
    }
    textopantalla.textContent = texto;
});

//Séptimo ejercicio
boton7.addEventListener('click', () => {
    console.log('Ejercicio 7');
    var nota = parseFloat(prompt("Introduzca la calificación"));
    var resultado = "";

    if (num >=0 && num < 3){
        resultado = 'Muy Deficiente';
    }else if (num >= 3 && num < 5){
        resultado = 'Insuficiente';
    }else if (num >= 5 && num < 6){
        resultado = 'Bien';
    }else if (num >= 6 && num < 9){
        resultado = 'Notable';
    }else {
        resultado = 'Sobresaliente';
    }
    textopantalla.textContent = "Calificación: " + resultado;
});

//Octavo ejercicio
boton8.addEventListener('click', () => {
    console.log('Ejercicio 8');
    var num = prompt("Introduce un número");
    var factorial = 1;
    for ( i=1; i <= num; i++ ){
        factorial = factorial * i;
    }
    textopantalla.textContent = 'El factorial es: ' + factorial;
});

//Noveno ejercicio
boton9.addEventListener('click', () => {
    console.log('Ejercicio 9');
    var horas = prompt("Introduce la hora");
    var minutos = prompt("Introduce los minutos");
    var segundos = prompt("Introduce los segundos");
    if (segundos >=60){
        segundos = 0;
        minutos++;
    }else if(minutos >= 60){
        minutos = 0;
        horas ++;
    }else if(horas > 23){
        horas=0;
        minutos =0;
        segundos=0;
        }
        textopantalla.textContent = 'La hora actualizada es ' + horas + ':' + minutos + ':' +segundos;
});

//Décimo ejercicio
boton10.addEventListener('click', () => {
    console.log('Ejercicio 10');
    var negativos = 0;
    var texto = "";
    for (i=1; i <= 10; i++){
        var num = prompt("Introduce 10 números no nulos");
        texto = texto + i + "";
    }
    if(num <= 0){
        negativos ++;
    }
    textopantalla.textContent = 'Hay: ' + negativos + 'numeros negativos';
});
});
