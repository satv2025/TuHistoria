const dropdown = document.querySelector('.dropdown-temporadas');
const btn = document.getElementById('season-btn');

btn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('active'); // esto activa slide-in y cambia border-radius
});

// Cerrar dropdown al click fuera
document.addEventListener('click', () => {
    dropdown.classList.remove('active'); // esto hace slide-out y restaura border-radius
});