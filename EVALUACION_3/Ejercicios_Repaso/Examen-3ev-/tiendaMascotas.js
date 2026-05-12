/* Implementa una función para que al hacer clic sobre el título de la página, se muestre
una breve descripción de la misma.
- Implementa funcionalidad al apartado “¡Hazte socio!, donde tras pulsar ese botón,
solicitará al usuario 3 parámetros: Nombre, Apellidos y Edad. */
/*Agrega un script que emita una señal de alerta cuando se sobrepase la zona de color
rojo “solo para socios”.*/
const zonaSocios = document.querySelector('.membership');

// Creas la función que te dieron
function showAlert() {
    alert("¡Zona restringida! Solo para socios.");
}

// La conectas al evento de "pasar el ratón"
zonaSocios.addEventListener('mouseenter', showAlert);

/* Agrega un botón que tras ser pulsado, solicite al usuario el importe de una donación y
después muestre un mensaje que diga “Ha donado usted (importe) euros para nuestra
organización, ¡Muchas gracias!”.*/
const donacion =document.querySelector('btn-donacion');
function donacion() {
    var amount = prompt("Introduce el importe:");
    alert("Ha donado usted: " + amount + "euros");
}

