document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector('.dropdown-temporadas');
    const btn = document.getElementById('season-btn');
    const options = dropdown.querySelectorAll('.season-option');
    const container = document.getElementById("historia");

    async function loadSeason(num) {
        const file = `uchdt${num}.txt`;
        try {
            const response = await fetch(file);
            if (!response.ok) throw new Error("No se pudo cargar el archivo");

            let text = await response.text();

            // 🚀 Reemplazos según prefijos
            text = text
                .replace(/\{formatear-titulo\}(.*?)(\r?\n|$)/g, "<h3>$1</h3>")
                .replace(/\{formatear-subtitulo\}(.*?)(\r?\n|$)/g, "<p style='font-weight: bold'>$1</p>")
                .replace(/\{formatear-texto\}(.*?)(\r?\n|$)/g, "<p>$1</p>")
                .replace(/\{formatear-pie\}(.*?)(\r?\n|$)/g, "<p style='font-style: italic; color:#555'>$1</p>");

            container.innerHTML = text;
        } catch (err) {
            container.innerHTML = `<p style="color:red">Error: ${err.message}</p>`;
        }
    }

    // Mostrar temporada 1 al cargar
    loadSeason(1);

    // Abrir/cerrar dropdown
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
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

    // Cerrar dropdown si se hace click fuera
    document.addEventListener('click', () => {
        dropdown.classList.remove('active');
    });
});