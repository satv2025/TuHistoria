const dropdown = document.querySelector('.dropdown-temporadas');
const btn = document.getElementById('season-btn');
const options = dropdown.querySelectorAll('.season-option');

function openDropdown() {
    // 1️⃣ Ajustar border-radius primero
    btn.style.borderBottomLeftRadius = '0';
    btn.style.borderBottomRightRadius = '0';
    btn.style.color = '#181818';
    btn.style.background = '#f00';

    // 2️⃣ Abrir dropdown con pequeño delay
    setTimeout(() => {
        dropdown.classList.add('active');
    }, 50); // 50ms es suficiente para ver el cambio de border-radius
}

function closeDropdown() {
    dropdown.classList.remove('active');

    // Restaurar border-radius después de cerrar
    setTimeout(() => {
        btn.style.borderBottomLeftRadius = '0.2em';
        btn.style.borderBottomRightRadius = '0.2em';
        btn.style.color = '#810000';
        btn.style.background = '#181818';
    }, 400); // coincide con la duración del slide
}

// Click en botón
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
        // loadSeason(seasonNum); // llamar tu función de fetch si corresponde
    });
});

// Cerrar al hacer click fuera
document.addEventListener('click', () => {
    if (dropdown.classList.contains('active')) {
        closeDropdown();
    }
});