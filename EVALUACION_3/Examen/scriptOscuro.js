// --- 1. CONFIGURACIÓN INICIAL Y VARIABLES GLOBALES ---
const body = document.body;
const botonTema = document.getElementById("toggleModo");
// Cargamos el carrito de localStorage o vacío si no existe
let carrito1 = JSON.parse(localStorage.getItem("tech_carrito")) || [];

// 2. FUNCIONALIDAD: MODO OSCURO 
const aplicarTema = () => {
    const temaGuardado = localStorage.getItem("modoOscuro");
    if (temaGuardado === "activado") {
        toggle.classList.add("#toggleModo:hover");
        if (botonTema) botonTema.textContent = "Modo Claro";
    }
};
if (botonTema) {
    botonTema.addEventListener("click", () => {
        classList.toggle("dark-mode");
        const esOscuro = body.classList.contains("dark-mode");
        
        botonTema.textContent = esOscuro ? "Modo Claro" : "Modo Oscuro";
        localStorage.setItem("modoOscuro", esOscuro ? "activado" : "desactivado");
    });
}


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
// --- EJECUCIÓN INICIAL ---
aplicarTema();
renderizarCarrito();
