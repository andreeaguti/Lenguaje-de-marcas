// 1. CAPTURA DE ELEMENTOS DOM del HTML; se coge del html, donde ponga ID
const inputTarea = document.getElementById("tarea");
const btnAgregar = document.getElementById("btnAgregar");
const btnVaciar = document.getElementById("btnVaciar");
const listaTareas = document.getElementById("listaTareas");
const totalTareas = document.getElementById("totalTareas");
const tareasCompletadas = document.getElementById("tareasCompletadas");
const tareasPendientes = document.getElementById("tareasPendientes");

//2. DECLARAR FUNCIONES
//añadir tareas, borrar tareas, listar tareas

//crear funcion tarea
function obtenerTextoTarea(){
    
    return inputTarea.value.trim();
};

//Funcion para limpiar el input
function limpiarInput(){
    inputTarea.value = "";
};


//
function agregarTareaAlDOM(texto){
    const li = document.createElement("li");//Una li seria una lista de elementos
    li.classList.add("tarea");


    //HACER QUE LAS TAREAS TENGAN ESTILOS DE CSS
    const span = document.createElement("span");
    span.textContent=texto;

    //AÑADIR BOTONES
    const divAcciones = document.createElement("div");
    divAcciones.classList.add("acciones-tarea")//acciones-tarea lo ha sacado del CSS

    const btnCompletar = document.createElement("button");//le creamos dos botones
    btnCompletar.textContent = "Completar";
    btnCompletar.classList.add("btn-accion" );

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = ("Eliminar");
    btnEliminar.classList.add("btn-accion");


        //damos funcionalidad en el boton completar
        btnCompletar.addEventListener("click",
        function() {
            //toggle es un selector entre estilos existentes
            li.classList.toggle("completada");
            actualizarContadores();
        }
        );

        btnEliminar.addEventListener("click",
            function(){
                li.remove();
                actualizarContadores();

            }
        )


    divAcciones.appendChild(btnCompletar);
    divAcciones.appendChild(btnEliminar);



    li.appendChild(span);
    li.appendChild(divAcciones);


    listaTareas.appendChild(li); //añadir un elemento dependiente (un hijo)

};



//OBTENER TAREA COMPLETA EVENT LISTENER
btnAgregar.addEventListener("click", 
    //"Quédate atento al botón btnAgregar, y en cuanto alguien haga click en él, ejecuta el código que viene a continuación"
    function() {
        const texto = obtenerTextoTarea();

        if(texto === ""){
            return
        }

        agregarTareaAlDOM(texto);
        actualizarContadores();
        limpiarInput();
    }
);



/*FUNCION CONTAR TAREAS SI FUERA DE UNO EN UNO
function actualizarTotal(){
    const numeroTareas = listaTareas.children.length;
    totalTareas.textContent = numeroTareas;
};*/

//ACTUALIZAR TODOS LOS CONTADORES DE TAREAS
function actualizarContadores(){
    const tareas = listaTareas.children.length;
    const completadas = document.querySelectorAll(".tarea.completada").length; //busca todos los contenidos iguales
    const pendientes = tareas - completadas;

    totalTareas.textContent = tareas;
    tareasCompletadas.textContent = completadas;
    tareasPendientes.textContent =pendientes;
};

//creamos la funcion de vaciar lista para llamarla después
function vaciarLista(){
    listaTareas.innerHTML= ""; //esta funcion inserta el texto a la fuerza
    actualizarContadores();
};

//declaramos ek event listener para llamar a la funcion que hemos creado justo encima
btnVaciar.addEventListener("click", 
    function(){
        vaciarLista();
    }
);











