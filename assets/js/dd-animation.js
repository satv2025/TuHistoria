const dropdown = document.querySelector('.dropdown-temporadas');
const btn = document.getElementById('season-btn');

btn.addEventListener('click', (e) => {
    e.stopPropagation();

    // Paso 1: aplicar borde superior antes de abrir
    dropdown.classList.add('pre-open');

    // Paso 2: después de 200ms, activar el dropdown y quitar pre-open
    setTimeout(() => {
        dropdown.classList.add('active');
        dropdown.classList.remove('pre-open');
    }, 200);
});

// Cerrar dropdown al hacer click fuera
document.addEventListener('click', () => {
    dropdown.classList.remove('active');
});