const tarjetas = document.querySelectorAll(".product");

const listaVacia = document.getElementById("cartContainer");

const listaCarrito = document.getElementById("cartList");

const precioTotal = document.getElementById("totalPrice");

const formularioDescuento = document.getElementById("discountForm");

const inputDescuento = document.getElementById("discountCode");

const botonAplicarDescuento= formularioDescuento?.querySelector('button[type="submit"]');

let carrito = JSON.parse(localStorage.getItem("carrito")) || []; 
let descuentoAplicado = 0;

function iniciarSesion() {
    let usuario = prompt("Introduce el usuario (examen):");
    let contrasena = prompt("Introduce la contraseña (123456):");
    if (usuario === "examen" && contrasena === "123456") {
                descuentoAplicado = 25;
                alert("¡Acceso correcto! Continue con la compra.");
                sessionStorage.setItem("inicioSesion", "true");
            } else {
                descuentoAplicado = 0;
                alert("Usuario o contraseña incorrectos. Vuelva a intentarlo.");
            }
}

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
    iniciarSesion();
    guardarYActualizar();
    alert(nombre + " añadido al carrito.");
    

};


function guardarYActualizar() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

tarjetas.forEach(tarjeta => {
    const botonAnadir = tarjeta.querySelector('[data-action="add"]');

    botonAnadir.addEventListener("click", (e) => {
        e.preventDefault();
            const nombre = tarjeta.querySelector("h3").textContent.trim();
            const precio = tarjeta.querySelector("p").textContent.trim();
            const id = nombre.toLowerCase().replace(/\s+/g, '-');

        anadirAlCarrito(id, nombre, precio);
    });
});

function mostrarCarrito() {
    if (!listaCarrito) return;
    listaCarrito.innerHTML = "";

    carrito.forEach(producto => {
        // Importante: comprueba que producto.nombre y producto.precio existan
        listaCarrito.innerHTML += `
        <li class="cart__item">
            <span>${producto.nombre}</span> 
            <span>${producto.precio} €</span>
            <span>Cant: ${producto.cantidad}</span>
            <button class="btn-eliminar" data-id="${producto.id}">Eliminar</button>
        </li>
        `;
    });

     const botonesEliminar = document.querySelectorAll(".btn-eliminar");
    
    botonesEliminar.forEach(boton => {
        boton.onclick = function() {
            const idParaBorrar = this.getAttribute("data-id");
            eliminarDelCarrito(idParaBorrar);
        };
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
        precioTotal.textContent = total + " €";
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
    localStorage.setItem("carrito", JSON.stringify(carrito));  
    mostrarCarrito();
}


if (formularioDescuento) {
    formularioDescuento.addEventListener("submit", function(evento){
        evento.preventDefault();
        const codigo = inputDescuento.value.trim().toUpperCase();
 
        if (codigo === "COMIDA25") {
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
        
        calcularTotal();
    });
}
 
mostrarCarrito();