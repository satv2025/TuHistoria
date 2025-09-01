const dropdown = document.querySelector('.dropdown-temporadas');
const btn = document.getElementById('season-btn');

let openTimeout = null;

btn.addEventListener('click', (e) => {
    e.stopPropagation();

    // Si ya está abierto o en pre-apertura, cerramos
    if (dropdown.classList.contains('active') || dropdown.classList.contains('pre-open')) {
        if (openTimeout) {
            clearTimeout(openTimeout);
            openTimeout = null;
        }
        dropdown.classList.remove('active', 'pre-open');
        return;
    }

    // Abrimos en pre-apertura
    dropdown.classList.add('pre-open');

    // Esperar 4 segundos para abrir
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