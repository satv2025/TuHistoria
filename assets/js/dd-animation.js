const dropdown = document.querySelector('.dropdown-temporadas');
const btn = document.getElementById('season-btn');

btn.addEventListener('click', (e) => {
    e.stopPropagation();

    // Si está abierto, cerramos y salimos
    if (dropdown.classList.contains('active')) {
        dropdown.classList.remove('active');
        return;
    }

    // Si está cerrado, aplicar borde antes de abrir
    dropdown.classList.add('pre-open');

    // Después de 200ms, abrir y quitar pre-open
    setTimeout(() => {
        dropdown.classList.add('active');
        dropdown.classList.remove('pre-open');
    }, 200);
});

// Cerrar dropdown al hacer click fuera
document.addEventListener('click', () => {
    dropdown.classList.remove('active');
});