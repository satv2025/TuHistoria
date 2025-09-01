const dropdown = document.querySelector('.dropdown-temporadas');
const btn = document.getElementById('season-btn');

let openTimeout = null;
let isOpen = false;

btn.addEventListener('click', (e) => {
    e.stopPropagation();

    // Si ya está abierto o en pre-apertura, cerramos
    if (isOpen || dropdown.classList.contains('pre-open')) {
        if (openTimeout) {
            clearTimeout(openTimeout);
            openTimeout = null;
        }
        dropdown.classList.remove('active', 'pre-open');
        isOpen = false;
        return;
    }

    // Pre-apertura
    dropdown.classList.add('pre-open');

    // Después de 4 segundos, abrir
    openTimeout = setTimeout(() => {
        dropdown.classList.add('active');
        dropdown.classList.remove('pre-open');
        isOpen = true;
        openTimeout = null;
    }, 4000);
});

// Cerrar dropdown si haces click fuera
document.addEventListener('click', (e) => {
    // Si el click no es dentro del dropdown ni del botón
    if (!dropdown.contains(e.target) && e.target !== btn) {
        if (openTimeout) {
            clearTimeout(openTimeout);
            openTimeout = null;
        }
        dropdown.classList.remove('active', 'pre-open');
        isOpen = false;
    }
});