const dropdown = document.querySelector('.dropdown-temporadas');
const btn = document.getElementById('season-btn');

let isOpen = false;

// Manejo del clic en el botón
btn.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el click llegue a document

    if (isOpen) {
        // Si está abierto, cerrar
        dropdown.classList.remove('active');
        isOpen = false;
    } else {
        // Si está cerrado, abrir
        dropdown.classList.add('active');
        isOpen = true;
    }
});

// Cerrar si se hace clic fuera
document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && e.target !== btn) {
        dropdown.classList.remove('active');
        isOpen = false;
    }
});