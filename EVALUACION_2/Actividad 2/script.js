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
    console.log('el boton3 ha sido pulsado');
    for (i = 0; i < 11; i++){
        console.log(i);
    }
});