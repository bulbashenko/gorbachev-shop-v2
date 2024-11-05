// public/js/responsiveCSS.js

function loadResponsiveCSS() {
    const width = window.innerWidth;
    let cssFile;

    if (width < 700) {
        cssFile = 'styles700.css';
    } else if (width < 900) {
        cssFile = 'styles900.css';
    } else if (width < 1300) {
        cssFile = 'styles1300.css';
    } else {
        cssFile = 'styles1600.css';
    }

    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = `/css/${cssFile}`; // predpokladá, že CSS súbory sú v priečinku public/css
    linkElement.type = 'text/css';

    // Odstránenie predchádzajúceho CSS, ak existuje
    const existingLink = document.getElementById('responsive-css');
    if (existingLink) {
        existingLink.parentNode.removeChild(existingLink);
    }

    linkElement.id = 'responsive-css';
    document.head.appendChild(linkElement);
}

// Načítanie CSS pri načítaní stránky
loadResponsiveCSS();

// Načítanie CSS pri zmene veľkosti okna
window.addEventListener('resize', loadResponsiveCSS);
