const dropdown = document.querySelector('.dropdown-temporadas');
const btn = document.getElementById('season-btn');
const optionsContainer = dropdown.querySelector('.season-options');
const options = dropdown.querySelectorAll('.season-option');

// Funciones de apertura y cierre
function openDropdown() {
    btn.style.borderBottomLeftRadius = '0';
    btn.style.borderBottomRightRadius = '0';
    optionsContainer.getBoundingClientRect(); // reflow
    optionsContainer.style.transform = 'scaleY(1)';
}

function closeDropdown() {
    optionsContainer.style.transform = 'scaleY(0)';
    setTimeout(() => {
        btn.style.borderBottomLeftRadius = '8px';
        btn.style.borderBottomRightRadius = '8px';
    }, 300);
}

// Click en botón principal
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

// Click en cada opción
options.forEach(option => {
    option.addEventListener('click', (e) => {
        e.stopPropagation();
        // Si querés, actualizar texto del botón:
        btn.textContent = option.textContent;
        dropdown.classList.remove('active');
        closeDropdown();
    });
});

// Click fuera para cerrar
document.addEventListener('click', () => {
    if (dropdown.classList.contains('active')) {
        dropdown.classList.remove('active');
        closeDropdown();
    }
});