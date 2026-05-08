// 1. CAPTURA DE ELEMENTOS
const inputConcepto = document.getElementById("concepto");
const inputCantidad = document.getElementById("cantidad");
const selectCategoria = document.getElementById("categoria");
const btnAñadir = document.getElementById("btnAñadir");
const btnLimpiar = document.getElementById("btnLimpiar");
const listaGastos = document.getElementById("listaGastos");
const totalDinero = document.getElementById("totalDinero");
const totalOperaciones = document.getElementById("totalOperaciones");

// 2. ESTADO DE LA APLICACIÓN
// Intentamos cargar de localStorage, si no hay nada, array vacío
let gastos = JSON.parse(localStorage.getItem("mis_gastos")) || [];

// 3. FUNCIONES

function añadirGasto() {
    const concepto = inputConcepto.value.trim();
    const cantidad = parseFloat(inputCantidad.value);
    const categoria = selectCategoria.value;

    // Validación básica
    if (concepto === "" || isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, introduce un concepto y una cantidad válida.");
        return;
    }

    // Creamos el objeto gasto
    const nuevoGasto = {
        id: Date.now(), // Genera un ID único basado en el tiempo
        concepto: concepto,
        cantidad: cantidad,
        categoria: categoria
    };

    // Añadir al array y guardar
    gastos.push(nuevoGasto);
    actualizarTodo();
    
    // Limpiar inputs
    inputConcepto.value = "";
    inputCantidad.value = "";
    inputConcepto.focus();
}

function borrarGasto(id) {
    // Filtramos el array para quitar el que tiene ese ID
    gastos = gastos.filter(gasto => gasto.id !== id);
    actualizarTodo();
}

function actualizarTodo() {
    // Guardar en LocalStorage
    localStorage.setItem("mis_gastos", JSON.stringify(gastos));
    
    // Pintar la lista
    renderizarLista();
    
    // Calcular totales
    calcularTotales();
}

function renderizarLista() {
    listaGastos.innerHTML = ""; // Vaciar lista antes de pintar

    gastos.forEach(gasto => {
        const li = document.createElement("li");
        li.classList.add("tarea");
        // Le añadimos una clase según la categoría para darle color en CSS
        li.classList.add("cat-" + gasto.categoria.toLowerCase());

        li.innerHTML = `
            <div>
                <strong>${gasto.concepto}</strong> <br>
                <small>${gasto.categoria}</small>
            </div>
            <div>
                <span style="font-weight:bold; margin-right:15px">${gasto.cantidad.toFixed(2)}€</span>
                <button class="btn-eliminar" onclick="borrarGasto(${gasto.id})">Eliminar</button>
            </div>
        `;
        listaGastos.appendChild(li);
    });
}

function calcularTotales() {
    let acumulado = 0;
    
    gastos.forEach(gasto => {
        acumulado += gasto.cantidad;
    });

    totalDinero.textContent = acumulado.toFixed(2) + "€";
    totalOperaciones.textContent = gastos.length;

    // EFECTO VISUAL: Si gastamos más de 500€, el total se pone en rojo
    if (acumulado > 500) {
        totalDinero.style.color = "red";
    } else {
        totalDinero.style.color = "var(--primary)";
    }
}

// 4. EVENTOS
btnAñadir.addEventListener("click", añadirGasto);

btnLimpiar.addEventListener("click", () => {
    if (confirm("¿Quieres borrar todos los gastos?")) {
        gastos = [];
        actualizarTodo();
    }
});

// Carga inicial al abrir la página
actualizarTodo();