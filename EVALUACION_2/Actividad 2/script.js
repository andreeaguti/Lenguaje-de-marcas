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

//EJERCICIO 1
boton1.addEventListener('click', () => {
    console.log('el boton1 ha sido pulsado');
    var edad = prompt("Introduzca la edad ");
    if (edad >= 18){
        textopantalla.textContent = 'Es mayor de edad';
    }
    textopantalla.textContent = 'Tiene ' + edad + ' años ';
});

//EJERCICIO 2
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

//EJERCICIO 3
boton3.addEventListener('click', () => {
    console.log('Ejercicio 3');
    var texto = "";
    for (i = 0; i < 11; i++){
        texto = texto + i + "";
    }
    textopantalla.textContent = texto;
});

//EJERCICIO 4
boton4.addEventListener('click', () => {
    console.log('Ejercicio 4');
    var texto = "";
    for (i = 0; i < 202; i = i + 2){
        texto = texto + i + "";
    }
    textopantalla.textContent = texto;
});

//EJERCICIO 5
boton5.addEventListener('click', () => {
    console.log('Ejercicio 5');
    var texto = "";
    for (i = 2; i < 202; i++){
        if (i % 2 == 0)
        texto = texto + i + "";
    }
    textopantalla.textContent = texto;
});

//EJERCICIO 6
boton6.addEventListener('click', () => {
    console.log('Ejercicio 6');
    var numero =parseInt(prompt("Introduzca un número "));
    var texto = "";
    for (i=0; i <= numero; i++) {
        texto = texto + i + "";
    }
    textopantalla.textContent = texto;
});

//EJERCICIO 7
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

//EJERCICIO 8
boton8.addEventListener('click', () => {
    console.log('Ejercicio 8');
    var num = prompt("Introduce un número");
    var factorial = 1;
    for ( i=1; i <= num; i++ ){
        factorial = factorial * i;
    }
    textopantalla.textContent = 'El factorial es: ' + factorial;
});

//EJERCICIO 9
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

//EJERCICIO 10
boton10.addEventListener('click', () => {
    console.log('Ejercicio 10');
    
    let negativos = 0;

    for (let i = 1; i <= 10; i++) {
        // Convertimos la entrada a número directamente
        let num = parseFloat(prompt(`Introduce el número ${i} de 10 (no nulo):`));

        // Verificamos si es negativo DENTRO del bucle
        if (num < 0) {
            negativos++;
        }
    }
    // Mostramos el mensaje final según el contador
    if (negativos > 0) {
        textopantalla.textContent = `Se han leído ${negativos} números negativos.`;
    } else {
        textopantalla.textContent = 'No se ha leído ningún número negativo.';
    }
});

//EJERCICIO 11
boton11.addEventListener('click', () => {
    console.log('Ejercicio 11');

    let positivos = 0;
    let negativos = 0;

    for (let i = 1; i <= 10; i++) {
        let num = parseFloat(prompt(`Número ${i} de 10:`));

        // Clasificación del número
        if (num > 0) {
            positivos++;
        } else if (num < 0) {
            negativos++;
        } 
        // Si el número es 0, simplemente no se cuenta en ninguna categoría
    }

    // Resultado por pantalla
    textopantalla.textContent = `Resultado: ${positivos} positivos y ${negativos} negativos.`;
});

//EJERCICIO 12
boton12.addEventListener('click', () => {
    console.log('Ejercicio 12');

    let positivos = 0;
    let negativos = 0;
    let num;

    // Usamos do-while para asegurarnos de que entre al menos una vez al bucle
    do {
        num = parseFloat(prompt("Introduce un número (0 para terminar):"));

        if (num > 0) {
            positivos++;
        } else if (num < 0) {
            negativos++;
        }

    } while (num !== 0); // El bucle se repite mientras el número NO sea 0

    // Determinamos si hubo algún negativo (booleano)
    let huboNegativos = negativos > 0 ? "Sí" : "No";

    // Mostramos el resultado final
    textopantalla.textContent = `¿Hubo negativos?: ${huboNegativos}. 
        Total positivos: ${positivos}. 
        Total negativos: ${negativos}.`;
});

//EJERCICIO 13
boton13.addEventListener('click', () => {
    console.log('Ejercicio 13');

    let suma = 0;
    let producto = 1;

    // Los primeros 10 números naturales son del 1 al 10
    for (let i = 1; i <= 10; i++) {
        suma += i;       // Equivale a: suma = suma + i
        producto *= i;   // Equivale a: producto = producto * i
    }

    // Mostramos los resultados
    textopantalla.textContent = `La suma es: ${suma} y el producto es: ${producto}`;
    
    console.log("Resultado final -> Suma:", suma, "Producto:", producto);
});

//EJERCICIO 14

botonSalario.addEventListener('click', () => {
        console.log('Ejercicio 14');
    // 1. Recogida de datos
    const nombre = prompt("Introduce el nombre del trabajador:");
    const horas = parseFloat(prompt("Horas trabajadas esta semana:"));
    const tarifa = parseFloat(prompt("Tarifa por hora normal (€):"));

    let salarioBruto = 0;
    let tasas = 0;

    // 2. Cálculo del Salario Bruto
    if (horas <= 35) {
        salarioBruto = horas * tarifa;
    } else {
        const horasExtra = horas - 35;
        salarioBruto = (35 * tarifa) + (horasExtra * tarifa * 1.5);
    }

    // 3. Cálculo de Tasas (Impuestos Progresivos)
    if (salarioBruto <= 500) {
        tasas = 0;
    } else if (salarioBruto <= 900) {
        // Los primeros 500 libres, el resto al 25%
        tasas = (salarioBruto - 500) * 0.25;
    } else {
        // Los primeros 500 libres
        // Los siguientes 400 al 25% (400 * 0.25 = 100€)
        // El resto al 45%
        const tramo2 = 400 * 0.25;
        const tramo3 = (salarioBruto - 900) * 0.45;
        tasas = tramo2 + tramo3;
    }

    // 4. Cálculo del Salario Neto
    const salarioNeto = salarioBruto - tasas;

    // 5. Mostrar resultados
    textopantalla.innerHTML = `
        <strong>Resultados para:</strong> ${nombre}<br>
        <strong>Salario Bruto:</strong> ${salarioBruto.toFixed(2)}€<br>
        <strong>Tasas:</strong> ${tasas.toFixed(2)}€<br>
        <strong>Salario Neto:</strong> ${salarioNeto.toFixed(2)}€
    `;
});