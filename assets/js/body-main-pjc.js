// Parte 1

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

document.addEventListener('DOMContentLoaded', () => {
  const pageScrollDiv = document.createElement('div');
  pageScrollDiv.id = 'page-scroll';

  while (document.body.firstChild) {
    pageScrollDiv.appendChild(document.body.firstChild);
  }

  document.body.appendChild(pageScrollDiv);

  const style = document.createElement('style');
  style.textContent = `
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
      overflow: hidden !important;
      background: #000;
    }

    #page-scroll {
      height: 100vh;
      overflow-y: auto !important;
      overflow-x: hidden;
      background: #000;
      position: relative;
    }

    /* WebKit */
    #page-scroll::-webkit-scrollbar {
      width: 8px;
    }
    #page-scroll::-webkit-scrollbar-track {
      background: #000;
    }
    #page-scroll::-webkit-scrollbar-thumb {
      background: #f00;
      border-radius: 4px;
    }

    /* Firefox – detectar Firefox */
    @supports (-moz-appearance:none) {
      #page-scroll {
        scrollbar-width: thin;
        scrollbar-color: #f00 #000;
      }
    }

    @-moz-document url-prefix() {
      #page-scroll {
        scrollbar-width: thin;
        scrollbar-color: #f00 #000;
      }
    }
  `;
  document.head.appendChild(style);
});