const dropdown = document.querySelector('.dropdown-temporadas');
const btn = document.getElementById('season-btn');
const optionsContainer = dropdown.querySelector('.season-options');
const options = dropdown.querySelectorAll('.season-option');

function openDropdown() {
    // 1️⃣ Cambiar border-radius primero
    dropdown.classList.add('preparing');

    setTimeout(() => {
        // 2️⃣ Abrir el dropdown con slide
        dropdown.classList.add('active');
        dropdown.classList.remove('preparing');
    }, 100); // delay de 0.1s para que se vea el cambio
}

function closeDropdown() {
    dropdown.classList.remove('active');

    // Restaurar border-radius después de cerrar
    setTimeout(() => {
        btn.style.borderBottomLeftRadius = '0.2em';
        btn.style.borderBottomRightRadius = '0.2em';
    }, 400); // coincide con duración del slide
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
        loadSeason(seasonNum); // tu función para cargar txt
    });
});

// Click fuera para cerrar
document.addEventListener('click', () => {
    if (dropdown.classList.contains('active')) {
        closeDropdown();
    }
});