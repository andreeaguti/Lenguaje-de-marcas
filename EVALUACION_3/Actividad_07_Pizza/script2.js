//captura de elementos DOM
const tarjetas = document.querySelectorAll(".card");
const listaVacia = document.getElementById("cartContainer");
const listaCarrito = document.getElementById("cartList");
const precioTotal = document.getElementById("totalPrice");
const descuentoForm = document.getElementById("discountForm");
const codigoDescuento = document.getElementById("discountCode");

//para los botones usamos querySelectorAll y un "." antes de la palabra de html
// Añadimos ".grid" delante para capturar SOLO las pizzas.

const botonAnadir = document.querySelectorAll(".grid btn--primary");
const botonEliminar = document.querySelectorAll(".grid btn--ghost");
const botonPersonalizar = document.querySelectorAll(".grid btn--secondary");
//Botón específico de descuento (Dentro del form), pongo esa interrogacion de momento 
const botonAplicarDescuento= descuentoForm?.querySelector('button[type="submit"]');


let carrito = []; //Nuestro carrito de la compra vacio
let descuentoAplicado = 0;

//FUNCIONES
function agregarPizza(nuevaPizza) {
    //ya existe la pizza en el carrito?
    const existe = carrito.find(item =>item.id === nuevaPizza.id);

    if (existe){
        existe.cantidad++;
    } else{
        carrito.push(nuevaPizza)
    }

    pintarCarrito();
}

// Recorremos cada botón de añadir
botonAnadir.forEach((boton, indice) => {
    boton.addEventListener("click", () => {
        // Obtenemos la tarjeta correspondiente a ese botón
        const tarjeta = tarjetas[indice]; 
        
        const pizzaSeleccionada = {
            id: tarjeta.dataset.id,
            nombre: tarjeta.dataset.name,
            precio: parseFloat(tarjeta.dataset.price),
            cantidad: 1
        };
 
        // Usamos el nombre correcto de tu función: agregarPizza
        agregarPizza(pizzaSeleccionada);
        console.log("Añadida pizza: " + pizzaSeleccionada.nombre);
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
 
 
    botonEliminar.forEach(boton => {
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
        console.log("Formulario de descuento enviado");
 
        if (codigo === "PIZZA10") {
            descuentoAplicado = 10;
            alert("Código aplicado correctamente: 10% de descuento.")

            //si el profe me pide que se redirija a la pagina de login;
           // window.location.href = "login.html"
            window.location.assign("login.html");
            //si no me funciona el anterior: window.location.assign("login.html");
            console.log("Intentando ir a login.html");
        }
        else {
            descuentoAplicado = 0;
            alert("Descuento no válido");
        }
        calcularTotal();
    });
};
 
mostrarCarrito(); //NUEVO Y AÑADIDO
 