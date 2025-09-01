const dropdown = document.querySelector('.dropdown-temporadas');
const btn = document.getElementById('season-btn');

let openTimeout = null;
let isOpen = false; // estado manual

btn.addEventListener('click', (e) => {
    e.stopPropagation();

    // Si está abierto o en pre-apertura, cerramos inmediatamente
    if (isOpen || dropdown.classList.contains('pre-open')) {
        if (openTimeout) {
            clearTimeout(openTimeout);
            openTimeout = null;
        }
        dropdown.classList.remove('active', 'pre-open');
        isOpen = false;
        return;
    }

    // Aplicar borde primero
    dropdown.classList.add('pre-open');

    // Después de 4 segundos, abrir dropdown
    openTimeout = setTimeout(() => {
        dropdown.classList.add('active');
        dropdown.classList.remove('pre-open');
        isOpen = true;
        openTimeout = null;
    }, 4000);
});

// Cerrar dropdown al hacer click fuera
document.addEventListener('click', () => {
    if (openTimeout) {
        clearTimeout(openTimeout);
        openTimeout = null;
    }
    dropdown.classList.remove('active', 'pre-open');
    isOpen = false;
});