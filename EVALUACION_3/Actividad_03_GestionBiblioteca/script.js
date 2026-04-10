// 1. VARIABLES Y CAPTURA DE ELEMENTOS
let inventario = []; // Aquí guardaremos todos nuestros libros
let indiceLibroAPrestar = -1; // Para saber qué libro estamos prestando 

const contenedorCatalogo = document.getElementById("contenedorCatalogo");
const tituloInput = document.getElementById("titulo");
const autorInput = document.getElementById("autor");
const categoriaInput = document.getElementById("categoria");
const isbnInput = document.getElementById("isbn");
const btnAgregar = document.getElementById("btnAgregar");
const inputBusqueda = document.getElementById("inputBusqueda");

// Elementos del panel de préstamo
const seccionPrestamo = document.getElementById("seccionPrestamo");
const infoLibroPrestamo = document.getElementById("infoLibroPrestamo");
const nombreUsuario = document.getElementById("nombreUsuario");
const btnConfirmarPrestamo = document.getElementById("btnConfirmarPrestamo");
const btnCancelarPrestamo = document.getElementById("btnCancelarPrestamo");


//2. DECLARAR FUNCIONES


// Función para añadir un libro al array
function añadirLibro() {
    const titulo = tituloInput.value.trim();
    const autor = autorInput.value.trim();
    const categoria = categoriaInput.value.trim();
    const isbn = isbnInput.value.trim();

    // Validación básica: El título es obligatorio
    if (titulo === "") {
        alert("Por favor, introduce al menos el título.");
        return;
    }

    // Creamos un OBJETO LITERAL (en lugar de una clase)
    const nuevoLibro = {
        titulo: titulo,
        autor: autor,
        categoria: categoria,
        isbn: isbn,
        prestado: false,
        usuario: ""
    };

    // Lo guardamos en nuestra lista (Array)
    inventario.push(nuevoLibro);

    // Limpiamos el formulario y actualizamos la vista
    limpiarFormulario();
    renderizarCatalogo(inventario);
    actualizarContadores();
}

// Función para pintar los libros en el HTML
function renderizarCatalogo(listaAMostrar) {
    contenedorCatalogo.innerHTML = ""; // Vaciamos primero

    if (listaAMostrar.length === 0) {
        contenedorCatalogo.innerHTML = '<p class="mensaje-vacio">No se encontraron libros.</p>';
        return;
    }

    // Recorremos el array para crear los elementos visuales
    listaAMostrar.forEach((libro, indice) => {
        const div = document.createElement("div");
        div.classList.add("tarjeta-libro");
        
        // Añadimos la clase de color según el estado
        if (libro.prestado) {
            div.classList.add("prestado");
        } else {
            div.classList.add("disponible");
        }
// 1. Creamos el título (H3)
const h3 = document.createElement("h3");
h3.textContent = libro.titulo;

// 2. Creamos el párrafo del autor (P)
const pAutor = document.createElement("p");
pAutor.innerHTML = "<strong>Autor:</strong> " + libro.autor;

// 3. Creamos el párrafo de la categoría (P)
const pCat = document.createElement("p");
pCat.innerHTML = "<strong>Categoría:</strong> " + libro.categoria;

// 4. Creamos el texto del estado (SPAN)
const spanEstado = document.createElement("span");
spanEstado.classList.add("estado");

// Usamos un IF/ELSE normal en lugar del símbolo "?"
if (libro.prestado) {
    spanEstado.textContent = "Prestado a: " + libro.usuario;
} else {
    spanEstado.textContent = "Disponible";
}

// 5. Creamos el contenedor de botones (DIV)
const divBotones = document.createElement("div");
divBotones.classList.add("botones");
divBotones.style.marginTop = "10px";

// 6. Botón de Prestar/Devolver
const btnAccion = document.createElement("button");
if (libro.prestado) {
    btnAccion.textContent = "Devolver";
} else {
    btnAccion.textContent = "Prestar";
}

// Le damos la funcionalidad al hacer clic
btnAccion.onclick = function() {
    prepararPrestamo(indice);
};

// 7. Botón de Eliminar
const btnEliminar = document.createElement("button");
btnEliminar.textContent = "Eliminar";
btnEliminar.classList.add("secundario");
btnEliminar.onclick = function() {
    eliminarLibro(indice);
};

//Metemos todo dentro del DIV principal 
divBotones.appendChild(btnAccion);
divBotones.appendChild(btnEliminar);

div.appendChild(h3);
div.appendChild(pAutor);
div.appendChild(pCat);
div.appendChild(spanEstado);
div.appendChild(divBotones);
        contenedorCatalogo.appendChild(div);
    });
}

// 3. BUSCADOR 
inputBusqueda.addEventListener("input", function() {
    const textoBusqueda = inputBusqueda.value.toLowerCase();

    // Filtramos el array principal
    const librosFiltrados = inventario.filter(libro => {
        return libro.titulo.toLowerCase().includes(textoBusqueda) || 
               libro.autor.toLowerCase().includes(textoBusqueda) ||
               libro.categoria.toLowerCase().includes(textoBusqueda);
    });

    // Pintamos solo los que coinciden
    renderizarCatalogo(librosFiltrados);
});

// 4. GESTIÓN DE PRÉSTAMOS
function prepararPrestamo(indice) {
    const libro = inventario[indice];

    if (libro.prestado) {
        // Si ya está prestado, lo devolvemos directamente
        libro.prestado = false;
        libro.usuario = "";
        renderizarCatalogo(inventario);
        actualizarContadores();
    } else {
        // Si está disponible, abrimos el panel flotante
        indiceLibroAPrestar = indice;
        infoLibroPrestamo.textContent = "Libro: " + libro.titulo;
        seccionPrestamo.style.display = "block";
    }
}

btnConfirmarPrestamo.addEventListener("click", function() {
    const nombre = nombreUsuario.value.trim();
    if (nombre === "") {
        alert("Escribe el nombre del lector.");
        return;
    }

    // Actualizamos el objeto dentro del array
    inventario[indiceLibroAPrestar].prestado = true;
    inventario[indiceLibroAPrestar].usuario = nombre;

    // Cerramos y actualizamos
    seccionPrestamo.style.display = "none";
    nombreUsuario.value = "";
    renderizarCatalogo(inventario);
    actualizarContadores();
});

btnCancelarPrestamo.addEventListener("click", () => {
    seccionPrestamo.style.display = "none";
});

// 5. FUNCIONES AUXILIARES
function eliminarLibro(indice) {
    inventario.splice(indice, 1); // Borra 1 elemento del array en esa posición
    renderizarCatalogo(inventario);
    actualizarContadores();
}

function limpiarFormulario() {
    tituloInput.value = "";
    autorInput.value = "";
    categoriaInput.value = "";
    isbnInput.value = "";
}

function actualizarContadores() {
    const total = inventario.length;
    const prestados = inventario.filter(l => l.prestado).length;
    const disponibles = total - prestados;

    document.getElementById("totalLibros").textContent = total;
    document.getElementById("librosPrestados").textContent = prestados;
    document.getElementById("librosDisponibles").textContent = disponibles;
}

// Iniciar evento de agregar
btnAgregar.addEventListener("click", añadirLibro);