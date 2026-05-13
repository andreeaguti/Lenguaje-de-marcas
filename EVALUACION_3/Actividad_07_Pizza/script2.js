/**
 * POR QUÉ USAMOS PUNTO (.)
 * Se usa para CLASES (class="..."). 
 * En tu HTML tienes muchas pizzas, todas con class="card". 
 * Como hay varias y quieres TODAS, usas querySelectorAll con punto.
 */
const tarjetas = document.querySelectorAll(".card"); 
/**
 * POR QUÉ USAMOS ALMOHADILLA (#)
 * Se usa para IDs (id="..."). 
 * El ID es único. En tu HTML del carrito tienes <ul id="cartList">.
 * Solo hay una lista de carrito en toda la página, por eso usamos #.
 */
const listaCarrito = document.querySelector("#cartList"); 

/**
 * OTRO EJEMPLO DE ID (#)
 * En tu HTML: <strong id="totalPrice">0,00 €</strong>
 * Como es un elemento único donde vas a volcar el resultado final, usamos #.
 */
const totalPrecio = document.querySelector("#totalPrice");
/**
 * FORMULARIO DE DESCUENTO (#)
 * En tu HTML: <form id="discountForm">
 * Los formularios suelen llevar ID para que JS los identifique sin error.
 */
const formularioDescuento = document.querySelector("#discountForm");
/**
 * INPUT DE DESCUENTO (#)
 * En tu HTML: <input type="text" id="discountCode">
 * Usamos # porque queremos el valor específico que el usuario escribe en ese cuadro.
 */
const inputDescuento = document.querySelector("#discountCode");
 
// 1. CARGA DEL CARRITO (PERSISTENCIA)
// JSON.parse: Convierte el texto del localStorage en un Array manejable.
// localStorage.getItem("carrito"): Busca la clave "carrito" en la memoria del navegador.
// || []: El "Plan B". Si no hay nada guardado (null), inicializa un array vacío para que no de error.
let carrito = JSON.parse(localStorage.getItem("carrito")) || []; 

// 2. CONFIGURACIÓN DE DESCUENTO
// Usamos 'let' porque este valor cambiará de 0 a un número (ej: 0.10) si el código es válido.
let descuentoAplicado = 0;
 
function anadirAlCarrito(id, nombre, precio) {
    const productoExistente = carrito.find(producto => producto.id === id);
 
    if (productoExistente) {
        productoExistente.cantidad++;
    }
    else {
        carrito.push({
            id: id,
            nombre: nombre,
            precio: precio,
            cantidad: 1
        });
    }
    localStorage.setItem("carrito", JSON.stringify(carrito)); //NUEVO Y AÑADIDO
    mostrarCarrito(); //NUEVO Y AÑADIDO
};
 
/**
 * 1. BUCLE DE INICIALIZACIÓN
 * tarjetas: Es el NodeList (lista) que obtuviste con querySelectorAll(".card").
 * Usamos .forEach para entrar en cada pizza una por una y configurarla.
 */
tarjetas.forEach(tarjeta => {
    
    // 2. SELECCIÓN DEL BOTÓN ESPECÍFICO
    // Buscamos DENTRO de la tarjeta actual el botón que tiene el atributo data-action="add".
    // Esto evita que todos los botones de la página hagan lo mismo.
    const botonAnadir = tarjeta.querySelector('[data-action="add"]');
 
    // 3. ASIGNACIÓN DEL EVENTO
    // Escuchamos el "click" solo en ese botón de esa pizza concreta.
    botonAnadir.addEventListener("click", () => {
        
        /**
         * 4. EXTRACCIÓN DE DATOS (Dataset)
         * tarjeta.dataset accede a los atributos que empiezan por "data-" en el HTML.
         * .id extrae "data-id"
         * .name extrae "data-name"
         * parseFloat: Imprescindible para convertir el texto "8.50" en el número 8.5
         */
        const id = tarjeta.dataset.id;
        const nombre = tarjeta.dataset.name;
        const precio = parseFloat(tarjeta.dataset.price);
 
        // 5. EJECUCIÓN
        // Llamamos a la función que ya creamos antes pasando los datos extraídos.
        anadirAlCarrito(id, nombre, precio);
    });
});
 
function mostrarCarrito() {
    if (!listaCarrito) return;
 
    listaCarrito.innerHTML = "";
 
    carrito.forEach(producto => {
        listaCarrito.innerHTML += `
        <li class="cart__item">
            <span>${producto.nombre}</span>
            <span>${producto.precio.toFixed(2)} €</span>
            <span>${producto.cantidad}</span>
            <button class="btn-eliminar" data-id="${producto.id}">Eliminar</button>
        </li>
        `;
    });
 
    const botonesEliminarCarrito = document.querySelectorAll(".btn-eliminar"); //NUEVO DE AQUÍ HACIA ABAJO
 
    botonesEliminarCarrito.forEach(boton => {
        boton.addEventListener("click", () => {
            const id = boton.dataset.id;
            eliminarDelCarrito(id);
        });
    });
 
    calcularTotal();
};
 
function calcularTotal() {
    let total = 0;
 
    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
    });
    if (descuentoAplicado > 0){
        total = total * 0.9;
    }
    if (totalPrecio) {
        totalPrecio.textContent = total.toFixed(2) + " €";
    }
};
 
/**
 * FUNCIÓN PARA ELIMINAR O RESTAR PRODUCTOS
 * Recibe el 'id' del producto que queremos tocar.
 */
function eliminarDelCarrito(id) {
    // 1. LOCALIZAR EL ÍNDICE: .findIndex() busca en qué posición del array [0, 1, 2...] 
    // está el producto cuyo id coincide con el que hemos recibido.
    const posicion = carrito.findIndex(producto => producto.id === id);
 
    // 2. COMPROBAR SI EXISTE: findIndex devuelve -1 si no encuentra nada.
    // Si es distinto de -1, es que el producto está en el carrito.
    if (posicion !== -1) {
        
        // 3. LÓGICA DE CANTIDAD:
        // Si hay más de una unidad, solo restamos 1 a la propiedad 'cantidad'.
        if (carrito[posicion].cantidad > 1){
            carrito[posicion].cantidad--;
        }
        // 4. LÓGICA DE BORRADO:
        // Si solo queda 1 (o menos), usamos .splice(posicion, 1) para 
        // eliminar ese elemento del array por completo.
        else {
            carrito.splice(posicion, 1);
        }
    }

    // 5. PERSISTENCIA: Actualizamos el almacenamiento del navegador con el array modificado.
    localStorage.setItem("carrito", JSON.stringify(carrito)); 
    
    // 6. ACTUALIZAR INTERFAZ: Volvemos a pintar el carrito para que desaparezca el producto o baje el número.
    mostrarCarrito();
}
 
 
 
 
/*tarjetas.forEach(tarjeta => {             PRESCINDIBLE, REUTILIZAR EL DE ARRIBA
    const botonAnadir = tarjeta.querySelector('[data-action="add"]');
    const botonEliminar = tarjeta.querySelector('[data-action="remove"]');
 
    botonAnadir.addEventListener("click", () => {
        const id = tarjeta.dataset.id;
        const nombre = tarjeta.dataset.name;
        const precio = parseFloat(tarjeta.dataset.price);
 
        anadirAlCarrito(id, nombre, precio);
    });
 
    botonEliminar.addEventListener("click", () => {
        const id = tarjeta.dataset.id;
        eliminarDelCarrito(id);
    });
});*/
 
 
if (formularioDescuento) {
    formularioDescuento.addEventListener("submit", function(evento){
        evento.preventDefault();
        const codigo = inputDescuento.value.trim().toUpperCase();
 
        if (codigo === "PIZZA10") {
            descuentoAplicado = 10;
            alert("Código aplicado correctamente: 10% de descuento.")
            window.location.href = "login.html";
        }
        else {
            descuentoAplicado = 0;
            alert("Descuento no válido");
        }
        calcularTotal();
    });
};
 
mostrarCarrito(); //NUEVO Y AÑADIDO