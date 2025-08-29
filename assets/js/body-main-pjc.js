document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("generos-btn");
    const dropdown = menu.querySelector(".dropdown-content");

    let timeout;

    const showDropdown = () => {
        clearTimeout(timeout);
        dropdown.style.display = "block";
    };

    const hideDropdown = () => {
        timeout = setTimeout(() => {
            if (!menu.matches(':hover') && !dropdown.matches(':hover')) {
                dropdown.style.display = "none";
            }
        }, 300);
    };

    [menu, dropdown].forEach(el => {
        el.addEventListener("mouseenter", showDropdown);
        el.addEventListener("mouseleave", hideDropdown);
    });
});