//Capturar elementos del HTML
const inputTarea = document.getElementById("tarea");
const bntAgregar = document.getElementById("btnAgregar");
const btnVaciar = document.getElementById("btnVaciar");
const listaTareas = document.getElementById("listaTareas");
const totalTareas = document.getElementById("totalTareas");
const AlumnosPresente = document.getElementById("AlumnosPresente");
const AlumnosAusentes = document.getElementById("AlumnosAusentes");


//Creación función tarea
function obtenerTextoTarea() {
    return inputTarea.value.trim();
};


//Creación función limpiar el input
function limpiarInput() {
    inputTarea.value = "";
};


function agregarTareaAlDOM(texto) {
    const li = document.createElement("li");
    li.classList.add("tarea");

    //Hacer que las tareas tengan estilos del CSS
    const span = document.createElement("span");
    span.textContent = texto;

    //Añadir Botones y darles clases
    const divAcciones = document.createElement("div");
    divAcciones.classList.add("acciones-tarea");
    

    const btnAsisten = document.createElement("button");
    btnAsisten.textContent = "Asiste";
    btnAsisten.classList.add("btn-accion");

    const btnAusentes = document.createElement("button");
    btnAusentes.textContent = "No asiste";
    btnAusentes.classList.add("btn-accion");

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("btn-accion");

    //Damos funcionalidad en el boton completar
    
    btnAsisten.addEventListener("click",
        function() {
            //Toggle es un selector entre estilos existentes
            li.classList.add("asiste");   // Añade clase asiste
            li.classList.remove("ausente");
            actualizarContadores();
        }
    );
     //Damos funcionalidad al botón eliminar
    btnEliminar.addEventListener("click",
        function () {
            li.remove();
            actualizarContadores();
        }

    );

    // Funcionalidad en el botón No asiste (AUSENTE)
btnAusentes.addEventListener("click", function() {
    li.classList.add("ausente");   // Añade clase ausente
    li.classList.remove("asiste");  // Quita clase asiste por si estaba marcada
    actualizarContadores();
});

    divAcciones.appendChild(btnAsisten);
    divAcciones.appendChild(btnAusentes)
    divAcciones.appendChild(btnEliminar);


    li.appendChild(span);
    li.appendChild(divAcciones);

    listaTareas.appendChild(li);

}

//Obtener tarea completa event listener
bntAgregar.addEventListener("click",
    function() {
        const texto = obtenerTextoTarea();

        if (texto === ""){
            return;
        }

        agregarTareaAlDOM(texto);
        actualizarContadores();
        limpiarInput();
    }
);

/*Creación función contar tareas
function actualizarTotal() {
    const numeroTareas = listaTareas.children.length;
    totalTareas.textContent = numeroTareas;
};*/


//Actualizar todos los contadores de tareas
function actualizarContadores() {
    const total = listaTareas.children.length;
    
    // Contamos cuántos elementos tienen la clase "asiste"
    const presentes = document.querySelectorAll(".tarea.asiste").length;
    
    // Contamos cuántos elementos tienen la clase "ausente"
    const ausentes = document.querySelectorAll(".tarea.ausente").length;

    // Asignamos los valores a los elementos del HTML
    totalTareas.textContent = total;
    AlumnosPresente.textContent = presentes;
    AlumnosAusentes.textContent = ausentes;
};

//Creamos la función de vaciar lista para llamarla después
function vaciarLista() {
    listaTareas.innerHTML = "";
    actualizarContadores();
};

//Declaramos el event listener para llamar a la función que hemos creado justo encima
btnVaciar.addEventListener("click",
    function () {
        vaciarLista();
    }
);




























