const dropdown = document.querySelector('.dropdown-temporadas');
const btn = document.getElementById('season-btn');
const options = dropdown.querySelectorAll('.season-options button');
const container = document.getElementById("historia");

// Función fetch + formateo
async function loadSeason(num) {
    const file = `uchdt${num}.txt`;
    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error("No se pudo cargar el archivo");

        let text = await response.text();

        text = text
            .replace(/\{formatear-titulo\}(.*?)(\r?\n|$)/g, "<h3>$1</h3>")
            .replace(/\{formatear-texto\}(.*?)(\r?\n|$)/g, "<p>$1</p>");

        container.innerHTML = text;

    } catch (err) {
        container.innerHTML = `<p style="color:red">Error: ${err.message}</p>`;
    }
}

// Abrir/cerrar dropdown al click
btn.addEventListener('click', () => {
    dropdown.classList.toggle('active');
});

// Seleccionar temporada
options.forEach(option => {
    option.addEventListener('click', () => {
        const seasonNum = option.getAttribute('data-season');
        btn.textContent = `Temporada ${seasonNum}`; // Actualiza el botón
        dropdown.classList.remove('active');
        loadSeason(seasonNum); // Carga el txt correspondiente
    });
});

// Cerrar dropdown al hacer click fuera
document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});

// Mostrar temporada 1 al cargar la página
window.addEventListener("DOMContentLoaded", () => loadSeason(1));