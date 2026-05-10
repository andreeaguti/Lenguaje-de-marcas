const tarjetas = document.querySelectorAll(".card");



const listaVacia = document.getElementById("cartContainer");

const listaCarrito = document.getElementById("cartList");

const precioTotal = document.getElementById("totalPrice");
const formularioDescuento = document.getElementById("discountForm");
const inputDescuento = document.getElementById("discountCode");

const botonAplicarDescuento= formularioDescuento?.querySelector('button[type="submit"]');


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

// --- BLOQUE CORREGIDO PARA AÑADIR PRODUCTOS ---
tarjetas.forEach((tarjeta) => {
    // Buscamos el botón de añadir DENTRO de esta tarjeta específica
    const botonAnadir = tarjeta.querySelector('[data-action="add"]');
 
    if (botonAnadir) {
        botonAnadir.addEventListener("click", (e) => {
            e.preventDefault();
            
            // Sacamos los datos de los atributos data- que ya tienes en tu HTML
            const id = tarjeta.dataset.id;
            const nombre = tarjeta.dataset.name;
            const precio = parseFloat(tarjeta.dataset.price);
     
            console.log("Intentando añadir:", nombre); // Para que veas en consola si funciona
            anadirAlCarrito(id, nombre, precio);
            alert(`${nombre} añadida al carrito`);
        });
    }
});

function mostrarCarrito() {
    // Si NO existe el elemento en el HTML actual, salimos de la función sin dar error
    if (!listaCarrito) return; 
 
    listaCarrito.innerHTML = "";
    
    // Si el carrito está vacío, podrías poner un mensaje opcional
    if (carrito.length === 0) {
        listaCarrito.innerHTML = "<li>El carrito está vacío</li>";
        if (precioTotal) precioTotal.textContent = "0.00 €";
        return;
    }

    carrito.forEach(producto => {
        listaCarrito.innerHTML += `
        <li class="cart__item">
            <span>${producto.nombre}</span>
            <span>${(producto.precio * producto.cantidad).toFixed(2)} €</span>
            <span>${producto.cantidad}</span>
            <button class="btn-eliminar" data-id="${producto.id}">Eliminar</button>
        </li>
        `;
    });
 
    // Re-asignar eventos a los botones de eliminar que acabamos de crear
    const botonesEliminar = document.querySelectorAll(".btn-eliminar");
    botonesEliminar.forEach(boton => {
        boton.onclick = () => eliminarDelCarrito(boton.dataset.id);
    });
 
    calcularTotal();
}

function calcularTotal() {
    let total = 0;
 
    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
    });
    if (descuentoAplicado === 25){
        total = total * 0.75;
    }
    if (precioTotal) {
        precioTotal.textContent = total.toFixed(2) + " €";
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

if (formularioDescuento) {
    formularioDescuento.addEventListener("submit", function(evento){
        evento.preventDefault();
        const codigo = inputDescuento.value.trim().toUpperCase();
 
        if (codigo === "PIZZA25") {
            let usuario = prompt("Introduce el usuario (examen):");
            let contrasena = prompt("Introduce la contraseña (123456):");

            if (usuario === "examen" && contrasena === "123456") {
                descuentoAplicado = 25;
                alert("¡Acceso correcto! Se ha aplicado el 25% de descuento.");
                sessionStorage.setItem("inicioSesion", "true");
            } else {
                descuentoAplicado = 0;
                alert("Usuario o contraseña incorrectos. No se aplicará descuento.");
            }
        } else {
            descuentoAplicado = 0;
            alert("Código de descuento no válido");
        }
        
        // 3. Recalcular siempre al final
        calcularTotal();
    });
}
 
mostrarCarrito(); //NUEVO Y AÑADIDO