// 1. CAPTURA DE ELEMENTOS DOM del HTML; se coge del html, donde ponga ID; totalLibros,librosDisponibles, librosPrestados, titulo, autor, categoria, isbn, btnAgregar, inputBusqueda, contenedorCatalogo, infoLibroPrestamo, nombreUsuario, btnConfirmarPrestamo, btnCancelarPrestamo
const totalLibros = document.getElementById("totalLibros");
const librosDisponibles = document.getElementById("librosDisponibles");
const librosPrestados = document.getElementById("librosPrestados");
const titulo = document.getElementById("titulo");
const autor = document.getElementById("autor");
const categoria = document.getElementById("categoria");
const isbn = document.getElementById("isbn");
const btnAgregar = document.getElementById("btnAgregar");
const inputBusqueda = document.getElementById("inputBusqueda");
const contenedorCatalogo = document.getElementById("contenedorCatalogo");
const infoLibroPrestamo = document.getElementById("infoLibroPrestamo");
const nombreUsuario = document.getElementById("nombreUsuario");
const btnConfirmarPrestamo = document.getElementById("btnConfirmarPrestamo");
const btnCancelarPrestamo = document.getElementById("btnCancelarPrestamo");
const seccionPrestamo = document.getElementById("seccionPrestamo");


//2. DECLARAR FUNCIONES


//función para agregar un libro