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

tarjetas.forEach(tarjeta => {
    //Buscamos el botón de añadir dentro de la tarjeta
    const botonAnadir = tarjeta.querySelector('[data-action="add"]');
 
    botonAnadir.addEventListener("click", (e) => {
        e.preventDefault();

        //Extraemos el NOMBRE del <h3>
            const nombre = tarjeta.querySelector("h3").textContent.trim();
        //Extraemos el PRECIO del <span class="precio">
        //Usamos .replace para quitar el símbolo "€" y que parseFloat pueda leer el número
            const precioTexto = tarjeta.querySelector(".precio").textContent;
            const precio = parseFloat(precioTexto.replace("€", "").trim());
        //El ID lo podemos generar usando el nombre o un índice si no hay data-id
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
            <span>${(producto.precio || 0).toFixed(2)} €</span>
            <span>Cant: ${producto.cantidad}</span>
            <button class="btn-eliminar" data-id="${producto.id}">Eliminar</button>
        </li>
        `;
    });

    // ¡ESTO ES LO QUE TE FALTA! Asignar el evento a los botones recién creados
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