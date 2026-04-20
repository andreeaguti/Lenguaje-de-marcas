window.addEventListener("load", iniciarPagina); //carga la página

function iniciarPagina(){
    let inicioSesion = sessionStorage.getItem ("inicioSesion"); //El item que busca es inicioSesion
    
    if (inicioSesion === "true"){ //Si estoy iniciada sesión me carga la página
        return;
    }
    else {
        pedirDatos();
    }
};


function pedirDatos(){
    let usuario = prompt("Introduce el usuario: ");
    let contraseña = prompt("Introduce la contraseña: ");

    comprobarDatos(usuario,contraseña);
};

function comprobarDatos(usuario,contraseña){

    let usuarioCorrecto = "admin";
    let contraseñaCorrecta = "1234";

    if(usuario === usuarioCorrecto && contraseña === contraseñaCorrecta){

        sessionStorage.setItem("inicioSesion", "true");
    }

    else{
        
        window.location.href = "error.html";
    }

    };