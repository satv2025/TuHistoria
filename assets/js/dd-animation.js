const dropdown = document.querySelector('.dropdown-temporadas');
const btn = document.getElementById('season-btn');

let openTimeout; // Para controlar el setTimeout

btn.addEventListener('click', (e) => {
    e.stopPropagation();

    // Si está abierto, cerramos inmediatamente
    if (dropdown.classList.contains('active')) {
        clearTimeout(openTimeout); // cancelar cualquier apertura pendiente
        dropdown.classList.remove('active');
        dropdown.classList.remove('pre-open');
        return;
    }

    // Paso 1: aplicar borde antes de abrir
    dropdown.classList.add('pre-open');

    // Paso 2: después de 4 segundos, abrir dropdown y quitar pre-open
    openTimeout = setTimeout(() => {
        dropdown.classList.add('active');
        dropdown.classList.remove('pre-open');
    }, 4000);
});

// Cerrar dropdown al hacer click fuera
document.addEventListener('click', () => {
    clearTimeout(openTimeout); // cancelar apertura pendiente
    dropdown.classList.remove('active');
    dropdown.classList.remove('pre-open');
});