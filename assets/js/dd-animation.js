const dropdown = document.querySelector('.dropdown-temporadas');
const btn = document.getElementById('season-btn');
const options = dropdown.querySelector('.season-options');

// Abrir dropdown con slide y borde previo
function openDropdown() {
    // 1️⃣ Ajustar border-radius
    btn.style.borderBottomLeftRadius = '0';
    btn.style.borderBottomRightRadius = '0';

    // 2️⃣ Forzar reflow antes del slide
    options.getBoundingClientRect();

    // 3️⃣ Slide hacia abajo
    options.style.maxHeight = options.scrollHeight + 'px';
    options.style.padding = '5px 0';
}

// Cerrar dropdown con slide
function closeDropdown() {
    options.style.maxHeight = '0';
    options.style.padding = '0';

    // Restaurar border-radius después del slide
    setTimeout(() => {
        btn.style.borderBottomLeftRadius = '8px';
        btn.style.borderBottomRightRadius = '8px';
    }, 400); // coincide con transition de CSS
}

// Toggle al hacer click en el botón
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

// Cerrar al click fuera
document.addEventListener('click', () => {
    if (dropdown.classList.contains('active')) {
        dropdown.classList.remove('active');
        closeDropdown();
    }
});