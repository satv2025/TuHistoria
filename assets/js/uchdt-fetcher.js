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

            // 🚀 Formateo por bloques: toma todo hasta el próximo prefijo o final
            text = text
                .replace(/\{formatear-titulo\}([\s\S]*?)(?=\{formatear-|$)/g, "<h3 style='text-align: center'>$1</h3>")
                .replace(/\{formatear-subtitulo\}([\s\S]*?)(?=\{formatear-|$)/g, "<p id='subtitulo-uchdt' style='font-weight: 500'>$1</p>")
                .replace(/\{formatear-texto\}([\s\S]*?)(?=\{formatear-|$)/g, "<p>$1</p>")
                .replace(/\{formatear-pie\}([\s\S]*?)(?=\{formatear-|$)/g, "<p style='font-style: italic; color:#555'>$1</p>");

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