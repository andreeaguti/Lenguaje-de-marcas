// 1. CAPTURA DE ELEMENTOS DEL DOM
const inputProducto = document.getElementById("producto");
const inputPrecio = document.getElementById("precio");
const btnAgregar = document.getElementById("btnAgregar");
const btnVaciar = document.getElementById("btnVaciar");
const listaCompra = document.getElementById("listaCompra");
const totalProductos = document.getElementById("totalProductos");
const costeTotal = document.getElementById("costeTotal");

// 2. DECLARAR FUNCIONES

// Función para limpiar los campos después de añadir
function limpiarInputs() {
    inputProducto.value = "";
    inputPrecio.value = "";
    inputProducto.focus(); // Opcional: pone el cursor en el primer input
}

// Función principal para añadir el producto al DOM
function agregarProductoAlDOM(nombre, precio) {
    // Crear el elemento de la lista
    const li = document.createElement("li");
    li.classList.add("tarea"); // Usamos la clase de tus ejercicios

    // Creamos el contenido (Nombre y Precio)
    const spanInfo = document.createElement("span");
    // Almacenamos el precio en un atributo personalizado para calcularlo luego fácilmente
    spanInfo.setAttribute("data-precio", precio);
    spanInfo.textContent = nombre + " - " + precio + "€";

    // Contenedor de botones de acción
    const divAcciones = document.createElement("div");
    divAcciones.classList.add("acciones-tarea");

    // Botón Comprado (para marcarlo)
    const btnComprar = document.createElement("button");
    btnComprar.textContent = "Comprado";
    btnComprar.classList.add("btn-accion");

    // Botón Eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("btn-accion");

    // --- FUNCIONALIDAD DE LOS BOTONES ---
    
    // Marcar como comprado (toggle)
    btnComprar.addEventListener("click", function() {
        li.classList.toggle("completada");
        actualizarContadores();
    });

    // Eliminar producto
    btnEliminar.addEventListener("click", function() {
        li.remove();
        actualizarContadores();
    });

    // Construir la estructura del LI
    divAcciones.appendChild(btnComprar);
    divAcciones.appendChild(btnEliminar);
    
    li.appendChild(spanInfo);
    li.appendChild(divAcciones);

    // Añadir a la lista real del HTML
    listaCompra.appendChild(li);
}

// Función para actualizar los contadores (Total unidades y precio acumulado)
function actualizarContadores() {
    const productos = listaCompra.children; // Cogemos todos los LI
    let acumuladoPrecio = 0;

    // Recorremos los productos para sumar sus precios
    // (Solo sumamos los que NO están marcados como comprados, o todos, según pida el examen)
    for (let i = 0; i < productos.length; i++) {
        // Buscamos el span que tiene el atributo data-precio
        const info = productos[i].querySelector("span");
        const precio = parseFloat(info.getAttribute("data-precio"));
        acumuladoPrecio += precio;
    }

    // Actualizar el HTML
    totalProductos.textContent = productos.length;
    costeTotal.textContent = acumuladoPrecio.toFixed(2); // Ponemos 2 decimales
}

// 3. EVENT LISTENERS

btnAgregar.addEventListener("click", function() {
    const nombre = inputProducto.value.trim();
    const precio = inputPrecio.value.trim();

    // Validación: que no estén vacíos
    if (nombre === "" || precio === "") {
        alert("Por favor, rellena ambos campos");
        return;
    }

    agregarProductoAlDOM(nombre, precio);
    actualizarContadores();
    limpiarInputs();
});

btnVaciar.addEventListener("click", function() {
    if (confirm("¿Seguro que quieres vaciar el carrito?")) {
        listaCompra.innerHTML = "";
        actualizarContadores();
    }
});