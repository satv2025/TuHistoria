const dropdown = document.querySelector('.dropdown-temporadas');
const btn = document.getElementById('season-btn');
const optionsContainer = dropdown.querySelector('.season-options');
const options = dropdown.querySelectorAll('.season-option');

let isOpen = false;

function openDropdown() {
    // 1️⃣ Cambiar border-radius primero
    btn.style.borderBottomLeftRadius = '0';
    btn.style.borderBottomRightRadius = '0';

    // 2️⃣ Esperar un instante antes de deslizar
    setTimeout(() => {
        optionsContainer.style.maxHeight = optionsContainer.scrollHeight + 'px'; // slide down
        dropdown.classList.add('active');
        isOpen = true;
    }, 50);
}

function closeDropdown() {
    optionsContainer.style.maxHeight = '0'; // slide up

    // Restaurar border-radius después del slide
    setTimeout(() => {
        btn.style.borderBottomLeftRadius = '8px';
        btn.style.borderBottomRightRadius = '8px';
        dropdown.classList.remove('active');
        isOpen = false;
    }, 400); // igual a duración del slide
}

// Click en botón principal
btn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isOpen) {
        closeDropdown();
    } else {
        openDropdown();
    }
});

// Click en opción
options.forEach(option => {
    option.addEventListener('click', (e) => {
        e.stopPropagation();
        btn.textContent = option.textContent;
        closeDropdown();
    });
});

// Click fuera
document.addEventListener('click', () => {
    if (isOpen) closeDropdown();
});