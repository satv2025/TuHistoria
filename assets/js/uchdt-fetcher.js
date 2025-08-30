document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector('.dropdown-temporadas');
    const btn = document.getElementById('season-btn');
    const options = dropdown.querySelectorAll('.season-options button');
    const container = document.getElementById("historia");

    // Función para cargar temporada
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

    // Mostrar temporada 1 al cargar
    loadSeason(1);

    // Abrir/cerrar dropdown al click
    btn.addEventListener('click', (e) => {
        e.stopPropagation(); // Evita cerrar al mismo tiempo
        dropdown.classList.toggle('active');
    });

    // Seleccionar temporada
    options.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const seasonNum = option.getAttribute('data-season');
            btn.textContent = `Temporada ${seasonNum}`;
            dropdown.classList.remove('active');
            loadSeason(seasonNum);
        });
    });

    // Cerrar dropdown al hacer click fuera
    document.addEventListener('click', () => {
        dropdown.classList.remove('active');
    });
});