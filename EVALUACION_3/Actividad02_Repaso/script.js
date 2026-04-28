// 1. SELECTORES
const tarjetas = document.querySelectorAll(".card");
const listaCarrito = document.querySelector("#cartList");
const totalPrecio = document.querySelector("#totalPrice");
const formularioDescuento = document.querySelector("#discountForm");
const inputDescuento = document.querySelector("#discountCode");

// 2. ESTADO INICIAL (Cargar de LocalStorage)
let carrito = JSON.parse(localStorage.getItem("super_carrito")) || [];
let descuentoActivo = 0; // Porcentaje de descuento

// 3. FUNCIONES

function anadirAlCarrito(id, nombre, precio) {
    // Buscamos si el producto ya está en el carrito
    const existente = carrito.find(p => p.id === id);

    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({ id, nombre, precio, cantidad: 1 });
    }

    guardarYActualizar();
    alert(nombre + " añadido al carrito.");
}

function eliminarDelCarrito(id) {
    const indice = carrito.findIndex(p => p.id === id);

    if (indice !== -1) {
        if (carrito[indice].cantidad > 1) {
            carrito[indice].cantidad--;
        } else {
            carrito.splice(indice, 1);
        }
    }
    guardarYActualizar();
}

function guardarYActualizar() {
    localStorage.setItem("super_carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

function mostrarCarrito() {
    // Si no estamos en la página del carrito, no hacemos nada
    if (!listaCarrito) return;

    listaCarrito.innerHTML = "";

    carrito.forEach(prod => {
        listaCarrito.innerHTML += `
            <li class="cart__item">
                <span>${prod.nombre}</span>
                <span>${prod.precio.toFixed(2)}€</span>
                <span>x${prod.cantidad}</span>
                <button class="btn-eliminar" data-id="${prod.id}">Eliminar</button>
            </li>
        `;
    });

    // Asignar eventos a los botones de eliminar recién creados
    const botonesEliminar = document.querySelectorAll(".btn-eliminar");
    botonesEliminar.forEach(btn => {
        btn.addEventListener("click", () => eliminarDelCarrito(btn.dataset.id));
    });

    calcularTotal();
}

function calcularTotal() {
    let total = 0;
    carrito.forEach(p => total += p.precio * p.cantidad);

    // Aplicar descuento si existe
    if (descuentoActivo > 0) {
        total = total * (1 - descuentoActivo / 100);
    }

    if (totalPrecio) {
        totalPrecio.textContent = total.toFixed(2) + " €";
    }
}

// 4. EVENTOS

// Evento para los botones de las tarjetas (Catálogo)
tarjetas.forEach(tarjeta => {
    const btn = tarjeta.querySelector('[data-action="add"]');
    btn.addEventListener("click", () => {
        const id = tarjeta.dataset.id;
        const nombre = tarjeta.dataset.name;
        const precio = parseFloat(tarjeta.dataset.price);
        anadirAlCarrito(id, nombre, precio);
    });
});

// Evento para el formulario de descuento
if (formularioDescuento) {
    formularioDescuento.addEventListener("submit", (e) => {
        e.preventDefault();
        const codigo = inputDescuento.value.trim().toUpperCase();

        if (codigo === "SUPER10") {
            descuentoActivo = 10;
            alert("Descuento del 10% aplicado");
        } else {
            descuentoActivo = 0;
            alert("Código no válido");
        }
        calcularTotal();
    });
}

// Carga inicial
mostrarCarrito();