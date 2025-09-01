const dropdown = document.querySelector('.dropdown-temporadas');
const btn = document.getElementById('season-btn');

let openTimeout = null;

btn.addEventListener('click', (e) => {
    e.stopPropagation();

    // Si está abierto o en pre-apertura, cerramos inmediatamente
    if (dropdown.classList.contains('active') || dropdown.classList.contains('pre-open')) {
        // Cancelar timeout si existe
        if (openTimeout) {
            clearTimeout(openTimeout);
            openTimeout = null;
        }

        // Quitar clases
        dropdown.classList.remove('active', 'pre-open');
        return;
    }

    // Aplicar borde primero
    dropdown.classList.add('pre-open');

    // Después de 4 segundos, abrir dropdown
    openTimeout = setTimeout(() => {
        dropdown.classList.add('active');
        dropdown.classList.remove('pre-open');
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
});