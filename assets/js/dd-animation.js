const dropdown = document.querySelector('.dropdown-temporadas');
const btn = document.getElementById('season-btn');
const options = dropdown.querySelector('.season-options');

function openDropdown() {
    // Cambiar border-radius antes de abrir
    btn.style.borderBottomLeftRadius = '0';
    btn.style.borderBottomRightRadius = '0';

    // Forzar reflow
    options.getBoundingClientRect();

    // Aplicar slide
    options.style.transform = 'scaleY(1)';
}

function closeDropdown() {
    // Slide hacia arriba
    options.style.transform = 'scaleY(0)';

    // Restaurar border-radius después de la transición
    setTimeout(() => {
        btn.style.borderBottomLeftRadius = '8px';
        btn.style.borderBottomRightRadius = '8px';
    }, 300); // coincide con duration
}

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

document.addEventListener('click', () => {
    if (dropdown.classList.contains('active')) {
        dropdown.classList.remove('active');
        closeDropdown();
    }
});