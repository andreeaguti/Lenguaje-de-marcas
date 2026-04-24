const tarjetas = document.querySelectorAll(".card");
const listaCarrito =  document.querySelector("#cartList");
const totalPrecio = document.querySelector("#totalPrice");
const formularioDescuento = document.querySelector("#discountForm");
const inputDescuento = document.querySelector("#discountCode");
 
let carrito = JSON.parse(localStorage.getItem("carrito")) || []; //NUEVO Y AÑADIDO
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
 
tarjetas.forEach(tarjeta => {
    const botonAnadir = tarjeta.querySelector('[data-action="add"]');
 
    botonAnadir.addEventListener("click", () => {
        const id = tarjeta.dataset.id;
        const nombre = tarjeta.dataset.name;
        const precio = parseFloat(tarjeta.dataset.price);
 
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
 
function eliminarDelCarrito(id) {
    const posicion = carrito.findIndex(producto => producto.id === id);
 
    if (posicion !== -1) {
        if (carrito[posicion].cantidad > 1){
            carrito[posicion].cantidad--;
        }
        else {
            carrito.splice(posicion, 1);
        }
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));  //NUEVO Y AÑADIDO
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
        }
        else {
            descuentoAplicado = 0;
            alert("Descuento no válido");
        }
        calcularTotal();
    });
};
 
mostrarCarrito(); //NUEVO Y AÑADIDO
 
 
 
 
/* ACCIONES AÑADIDAS:
    - Script en carrito.html
    - Array en almacenamiento del navegador en los lugares clave (al comienzo, tras añadir y tras eliminar).
    - Añadir botón de eliminar al mostrar carrito, junto con funcionalidad.
    - Foreach sólo para añadir al carrito.
 
*/