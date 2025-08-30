const dropdown = document.querySelector('.dropdown-temporadas');
const btn = document.getElementById('season-btn');
const optionsContainer = dropdown.querySelector('.season-options');
const options = dropdown.querySelectorAll('.season-option');

function openDropdown() {
    // Primero animamos border-radius
    btn.style.borderBottomLeftRadius = '0';
    btn.style.borderBottomRightRadius = '0';

    // Luego, después de 100ms, deslizamos
    setTimeout(() => {
        dropdown.classList.add('active');
    }, 100);
}

function closeDropdown() {
    // Deslizamos hacia arriba
    dropdown.classList.remove('active');

    // Restauramos border-radius después de que termine la animación
    setTimeout(() => {
        btn.style.borderBottomLeftRadius = '8px';
        btn.style.borderBottomRightRadius = '8px';
    }, 400); // coincide con duration del slide
}

// Click en el botón
btn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (dropdown.classList.contains('active')) {
        closeDropdown();
    } else {
        openDropdown();
    }
});

// Click en opciones
options.forEach(option => {
    option.addEventListener('click', (e) => {
        e.stopPropagation();
        const seasonNum = option.getAttribute('data-season');
        btn.textContent = `Temporada ${seasonNum}`;
        closeDropdown();
        loadSeason(seasonNum); // función que carga tu txt
    });
});

// Cerrar al click fuera
document.addEventListener('click', () => {
    if (dropdown.classList.contains('active')) {
        closeDropdown();
    }
});