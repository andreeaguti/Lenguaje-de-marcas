// --- 1. CAPTURA DE ELEMENTOS ---
// Usamos ID para elementos únicos

const btnPedir = document.getElementById('btn-pedir');
const selectCarne = document.getElementById('select-carne');
const burgerImg = document.getElementById('burger-img');
const displayPrecio = document.getElementById('precio-total');
const titulo = document.getElementById('main-title');
const btnDonar = document.getElementById('btn-donar');
const btnSocio = document.getElementById('btn-socio');
const zonaVip = document.getElementById('zona-vip');

// Usamos querySelectorAll para los checkboxes (la red para pescar varios)
const extras = document.querySelectorAll('.extra');


// --- 3. FUNCIONALIDAD: CAMBIO DE IMAGEN ---
// Cuando el usuario cambia la carne, cambia la foto
if (selectCarne) {
    selectCarne.addEventListener('change', () => {
        if (selectCarne.value === "0") {
            burgerImg.src = "https://img.freepik.com/foto-gratis/hamburguesa-carne-queso-derretido-tomate-generada-ia_188544-18157.jpg";
        } else {
            // Imagen de burger gourmet si elige carne cara
            burgerImg.src = "https://img.freepik.com/foto-gratis/hamburguesa-deliciosa-aislada-blanco_23-2150384401.jpg";
        }
    });
}

// --- 4. FUNCIONALIDAD: CÁLCULO DEL PRECIO (EL MÁS IMPORTANTE) ---
if (btnPedir) {
    btnPedir.addEventListener('click', () => {
        let precioFinal = 8; // Precio base

        // Sumamos el valor del SELECT (convertido a número)
        precioFinal += parseFloat(selectCarne.value);

        // Sumamos los CHECKBOXES recorriéndolos con un bucle
        extras.forEach(item => {
            if (item.checked) {
                precioFinal += parseFloat(item.value);
            }
        });

        // Mostramos el resultado en el HTML y en un alert
        displayPrecio.textContent = precioFinal.toFixed(2);
        alert("Total a pagar: " + precioFinal.toFixed(2) + "€");
    });
}

// --- 5. FUNCIONALIDAD: ZONA VIP (MOUSEOVER) ---
if (zonaVip) {
    zonaVip.addEventListener('mouseover', () => {
        zonaVip.style.backgroundColor = "black";
        zonaVip.style.color = "gold";
        zonaVip.innerHTML = "<h3>CÓDIGO: BURGER2024</h3>";
    });

    zonaVip.addEventListener('mouseout', () => {
        zonaVip.style.backgroundColor = "gold";
        zonaVip.style.color = "black";
        zonaVip.innerHTML = "<h3>ZONA EXCLUSIVA VIP</h3><p>Pasa el ratón...</p>";
    });
}

// --- 6. FUNCIONALIDAD: DONACIÓN Y SOCIOS (PROMPT) ---
if (btnDonar) {
    btnDonar.addEventListener('click', () => {
        const propina = prompt("¿Cuánto quieres dejar de propina?");
        if (propina > 5) {
            alert("¡Guau! Muchas gracias por tu generosidad.");
        } else if (propina > 0) {
            alert("Gracias por el detalle.");
        }
    });
}

if (btnSocio) {
    btnSocio.addEventListener('click', () => {
        const nombre = prompt("Nombre:");
        const edad = prompt("Edad:");
        if (nombre && edad) {
            alert("Bienvenido " + nombre + ". Tienes " + edad + " años, ¡eres un socio Master!");
        }
    });
}

// --- 7. CLIC EN TÍTULO ---
if (titulo) {
    titulo.addEventListener('click', () => {
        alert("Burger Master fundada en 2024. Las mejores hamburguesas de la ciudad.");
    });
}