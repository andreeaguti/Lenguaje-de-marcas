const tarjetas = document.querySelectorAll(".card");



const listaVacia = document.getElementById("cartContainer");

const listaCarrito = document.getElementById("cartList");

const precioTotal = document.getElementById("totalPrice");
const descuentoForm = document.getElementById("discountForm");
const codigoDescuento = document.getElementById("discountCode");

const botonAplicarDescuento= descuentoForm?.querySelector('button[type="submit"]');


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

tarjetas.forEach((tarjeta, index) => {
    // Buscamos el botón dentro de la tarjeta (sea cual sea su clase o data)
    const botonAnadir = document.querySelectorAll(".productos .btn");
 
    if (botonAnadir) {
        botonAnadir.addEventListener("click", (e) => {
            e.preventDefault();
            // Si no tienes data-attributes en el HTML, los sacamos del contenido:
            const id = tarjeta.dataset.id || index + 1;
            const nombre = tarjeta.dataset.name || tarjeta.querySelector("h3").textContent;
            const precioTexto = tarjeta.dataset.price || tarjeta.querySelector(".precio").textContent;
            const precio = parseFloat(precioTexto.replace("€", ""));
     
            anadirAlCarrito(id, nombre, precio);
        });
    }
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

if (descuentoForm) {
    descuentoForm.addEventListener("submit", function(evento){
        evento.preventDefault();
        const codigo = codigoDescuento.value.trim().toUpperCase();
 
        if (codigo === "PIZZA25") {
            const loginCorrecto = pedirDatos();

            if(loginCorrecto){
                descuentoAplicado = 25;
                alert("Código aplicado correctamente, para continuar inicie sesión.")
            } else{
                descuentoAplicado = 0;
                alert("Login incorrecto. No se aplicó el descuento.");
            }
        }
        else {
            descuentoAplicado = 0;
            alert("Código de descuento no válido");
        }
        calcularTotal();
    });
};
 
mostrarCarrito(); //NUEVO Y AÑADIDO