
const tarjetas = document.querySelectorAll(".card");
const listaCarrito =  document.querySelector("#cartList");
const totalPrecio = document.querySelector("#totalPrice");
const formularioDescuento = document.querySelector("#discountForm");
const inputDescuento = document.querySelector("#discountCode");

// 2. ESTADO INICIAL 
let carrito = JSON.parse(localStorage.getItem("kebab_carrito")) || [];

let descuentoActivo = 0; 

// 3. FUNCIONES

function anadirAlCarrito(id, nombre, precio) {
    // Busco si el producto ya está en el carrito
    const productoExistente = carrito.find(producto => p.id === id);

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({ id, nombre, precio, cantidad: 1 });
    }
    localStorage.setItem("carrito", JSON.stringify(carrito)); 

    mostrarCarrito(); //NUEVO Y AÑADIDO
    guardarYActualizar();
    alert(nombre + " añadido al carrito.");
}

tarjetas.forEach(tarjeta => {
    const botonAdd = tarjeta.querySelector('[data-action="add"]');
    if (botonAdd) {
        botonAdd.addEventListener("click", () => {
            const id = tarjeta.dataset.id;
            const nombre = tarjeta.dataset.name;
            const precio = parseFloat(tarjeta.dataset.price);

            const productoExistente = carrito.find(item => item.id === id);

            if (productoExistente) {
                productoExistente.cantidad++;
            } else {
                carrito.push({ id, nombre, precio, cantidad: 1 });
            }

            localStorage.setItem("tech_carrito", JSON.stringify(carrito));
            alert(`${nombre} añadido al carrito`);
        });
    }
});

function eliminarDelCarrito(id) {
    const indice = carrito.findIndex(p => p.id === id);

    if (indice !== -1) {
        if (carrito[indice].cantidad > 1) {
            carrito[indice].cantidad--;
        } else {
            carrito.splice(indice, 1);
        }
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

function guardarYActualizar() {
    localStorage.setItem("kebab_carrito", JSON.stringify(carrito));
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
 
    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
    });

    if (descuentoAplicado > 0){
        total = total * 0.25;
    }
    if (totalPrecio) {
        totalPrecio.textContent = total.toFixed(2) + " €";
    }
};

// 4. EVENTOS



// Evento para el formulario de descuento
if (formularioDescuento) {
    formularioDescuento.addEventListener("submit", (e) => {
        e.preventDefault();
        const codigo = inputDescuento.value.trim().toUpperCase();

        if (codigo === "SUPER10") {
            descuentoActivo = 10;
            alert("Descuento del 25% aplicado");
        } else {
            descuentoActivo = 0;
            alert("Código no válido");
        }
        calcularTotal();
    });
}


mostrarCarrito();