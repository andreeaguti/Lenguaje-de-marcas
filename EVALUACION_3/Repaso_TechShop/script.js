// --- 1. CONFIGURACIÓN INICIAL Y VARIABLES GLOBALES ---
const body = document.body;
const botonTema = document.getElementById("themeToggle");
// Cargamos el carrito de localStorage o vacío si no existe
let carrito = JSON.parse(localStorage.getItem("tech_carrito")) || [];

// --- 2. FUNCIONALIDAD: MODO OSCURO (Persistente) ---
const aplicarTema = () => {
    const temaGuardado = localStorage.getItem("modoOscuro");
    if (temaGuardado === "activado") {
        body.classList.add("dark-mode");
        if (botonTema) botonTema.textContent = "Modo Claro";
    }
};

if (botonTema) {
    botonTema.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        const esOscuro = body.classList.contains("dark-mode");
        
        botonTema.textContent = esOscuro ? "Modo Claro" : "Modo Oscuro";
        localStorage.setItem("modoOscuro", esOscuro ? "activado" : "desactivado");
    });
}

// --- 3. FUNCIONALIDAD: CATÁLOGO (index.html) ---
const inputFiltro = document.getElementById("filterInput");
const tarjetas = document.querySelectorAll(".card");

// Filtro de búsqueda
if (inputFiltro) {
    inputFiltro.addEventListener("input", () => {
        const busqueda = inputFiltro.value.toLowerCase();
        
        tarjetas.forEach(tarjeta => {
            const nombre = tarjeta.dataset.name.toLowerCase();
            // Si el nombre incluye la búsqueda, se muestra, si no, se oculta
            if (nombre.includes(busqueda)) {
                tarjeta.classList.remove("hidden");
            } else {
                tarjeta.classList.add("hidden");
            }
        });
    });
}

// Añadir al carrito
tarjetas.forEach(tarjeta => {
    const botonAdd = tarjeta.querySelector('[data-action="add"]');
    if (botonAdd) {
        botonAdd.addEventListener("click", () => {
            const id = tarjeta.dataset.id;
            const nombre = tarjeta.dataset.name;
            const precio = parseFloat(tarjeta.dataset.price);

            const productoExistente = carrito.find(item => item.id === id);

            if (productoExistente) {
                productoExistente.cantidad++;
            } else {
                carrito.push({ id, nombre, precio, cantidad: 1 });
            }

            localStorage.setItem("tech_carrito", JSON.stringify(carrito));
            alert(`${nombre} añadido al carrito`);
        });
    }
});

// --- 4. FUNCIONALIDAD: CARRITO (carrito.html) ---
const listaCarrito = document.getElementById("cartList");
const totalContenedor = document.getElementById("totalPrice");
const botonVaciar = document.getElementById("clearCart");

const renderizarCarrito = () => {
    if (!listaCarrito) return; // Si no estamos en la página de carrito, salimos
    
    listaCarrito.innerHTML = "";
    let total = 0;

    carrito.forEach(producto => {
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;

        listaCarrito.innerHTML += `
            <li class="cart__item">
                <div>
                    <strong>${producto.nombre}</strong><br>
                    <small>${producto.precio.toFixed(2)} € x ${producto.cantidad}</small>
                </div>
                <div>
                    <span>${subtotal.toFixed(2)} €</span>
                    <button class="btn btn--ghost" onclick="cambiarCantidad('${producto.id}', -1)">-</button>
                    <button class="btn btn--ghost" onclick="cambiarCantidad('${producto.id}', 1)">+</button>
                </div>
            </li>
        `;
    });

    totalContenedor.textContent = `${total.toFixed(2)} €`;
};

// Función global para los botones +/- (se llama desde el HTML generado arriba)
window.cambiarCantidad = (id, cambio) => {
    const producto = carrito.find(item => item.id === id);
    if (producto) {
        producto.cantidad += cambio;
        // Si la cantidad es 0 o menos, lo eliminamos del array
        if (producto.cantidad <= 0) {
            carrito = carrito.filter(item => item.id !== id);
        }
        localStorage.setItem("tech_carrito", JSON.stringify(carrito));
        renderizarCarrito();
    }
};

if (botonVaciar) {
    botonVaciar.addEventListener("click", () => {
        carrito = [];
        localStorage.setItem("tech_carrito", JSON.stringify(carrito));
        renderizarCarrito();
    });
}

// --- 5. FUNCIONALIDAD: LOGIN (login.html) ---
const formLogin = document.getElementById("loginForm");

if (formLogin) {
    formLogin.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const email = document.getElementById("email").value;
        const pass = document.getElementById("password").value;
        const emailError = document.getElementById("emailError");
        const passError = document.getElementById("passError");

        let esValido = true;

        // Validación Email (Regex básica)
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            emailError.textContent = "Email no válido";
            esValido = false;
        } else {
            emailError.textContent = "";
        }

        // Validación Password (mínimo 8 caracteres)
        if (pass.length < 8) {
            passError.textContent = "La contraseña debe tener al menos 8 caracteres";
            esValido = false;
        } else {
            passError.textContent = "";
        }

        if (esValido) {
            alert("¡Login correcto! Redirigiendo...");
            window.location.href = "index.html";
        }
    });
}

// --- EJECUCIÓN INICIAL ---
aplicarTema();
renderizarCarrito();