const dropdown = document.querySelector('.dropdown-temporadas');
const btn = document.getElementById('season-btn');

let openTimeout = null;

btn.addEventListener('click', (e) => {
    e.stopPropagation();

    // Si ya está abierto o en pre-open, cerramos inmediatamente
    if (dropdown.classList.contains('active') || dropdown.classList.contains('pre-open')) {
        clearTimeout(openTimeout);
        dropdown.classList.remove('active');
        dropdown.classList.remove('pre-open');
        return;
    }

    // Aplicar borde primero
    dropdown.classList.add('pre-open');

    // Después de 4 segundos, abrir dropdown
    openTimeout = setTimeout(() => {
        dropdown.classList.add('active');
        dropdown.classList.remove('pre-open');
        openTimeout = null; // Limpiar referencia
    }, 4000);
});

// Cerrar dropdown al hacer click fuera
document.addEventListener('click', () => {
    clearTimeout(openTimeout);
    dropdown.classList.remove('active');
    dropdown.classList.remove('pre-open');
});