const dropdown = document.querySelector('.dropdown-temporadas');
const btn = document.getElementById('season-btn');
const options = dropdown.querySelector('.season-options');

// Función para abrir con slide y border-radius previo
function openDropdown() {
    // 1️⃣ Cambiar border-radius primero
    btn.style.borderBottomLeftRadius = '0';
    btn.style.borderBottomRightRadius = '0';

    // 2️⃣ Esperar un instante antes de deslizar
    setTimeout(() => {
        options.style.maxHeight = options.scrollHeight + 'px'; // desliza hacia abajo
    }, 200); // 0.2s de delay
}

// Función para cerrar con slide
function closeDropdown() {
    options.style.maxHeight = '0'; // desliza hacia arriba

    // Restaurar border-radius después de cerrar
    setTimeout(() => {
        btn.style.borderBottomLeftRadius = '8px';
        btn.style.borderBottomRightRadius = '8px';
    }, 300); // coincide con la duración del slide
}

// Inicialización
btn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (dropdown.classList.contains('active')) {
        dropdown.classList.remove('active');
        closeDropdown();
    } else {
        dropdown.classList.add('active');
        openDropdown();
    }
});

// Cerrar al hacer click fuera
document.addEventListener('click', () => {
    if (dropdown.classList.contains('active')) {
        dropdown.classList.remove('active');
        closeDropdown();
    }
});