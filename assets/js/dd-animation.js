const dropdown = document.querySelector('.dropdown-temporadas');
const btn = document.getElementById('season-btn');

let isOpen = false; // Estado del dropdown
let preOpenTimeout = null;

btn.addEventListener('click', (e) => {
    e.stopPropagation();

    if (isOpen) {
        // Si está abierto, cerrar inmediatamente
        dropdown.classList.remove('active', 'pre-open');
        isOpen = false;

        // Limpiar cualquier timeout pendiente
        if (preOpenTimeout) {
            clearTimeout(preOpenTimeout);
            preOpenTimeout = null;
        }
        return;
    }

    // Si está cerrado, iniciar pre-apertura
    dropdown.classList.add('pre-open');

    // Abrir después de 4 segundos
    preOpenTimeout = setTimeout(() => {
        dropdown.classList.add('active');
        dropdown.classList.remove('pre-open');
        isOpen = true;
        preOpenTimeout = null;
    }, 4000);
});

// Cerrar al hacer click fuera
document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && e.target !== btn) {
        dropdown.classList.remove('active', 'pre-open');
        isOpen = false;

        if (preOpenTimeout) {
            clearTimeout(preOpenTimeout);
            preOpenTimeout = null;
        }
    }
});