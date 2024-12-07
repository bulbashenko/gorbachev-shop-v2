'use client'
import { useEffect, useState } from 'react';
import Script from 'next/script';
import "../globals.css";

const SekciaZmeny = () => {
    // Stav na uloženie commitov
    const [commits, setCommits] = useState([]);

    // Načítanie commitov z GitHubu
    useEffect(() => {
        const fetchCommits = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/bulbashenko/gorbachev-shop-v2/commits');
                const data = await response.json();
                setCommits(data);
            } catch (error) {
                console.error('Chyba pri načítaní commitov:', error);
            }
        };

        fetchCommits();
    }, []);

    // Funkcia pre zmenu veľkosti obsahu
    const changeFontSize = (action) => {
        const section = document.getElementById("sekcia_zmena");
        let elements = section.querySelectorAll("*"); // Vyberie všetky elementy v rámci sekcie

        elements.forEach(element => {
            let currentFontSize = parseFloat(window.getComputedStyle(element, null).getPropertyValue('font-size'));

            if (action === 'increase') {
                element.style.fontSize = (currentFontSize * 1.1) + "px";
            } else if (action === 'decrease') {
                element.style.fontSize = (currentFontSize * 0.9) + "px";
            } else if (action === 'reset') {
                element.style.fontSize = ""; // Reset na pôvodnú veľkosť (použije default z CSS)
            }
        });
    };

    // Klávesové skratky pre zmenu veľkosti textu
    useEffect(() => {
        const handleKeyDown = (event) => {
            // Skontrolujte, či je stlačený CTRL alebo ALT
            if (event.ctrlKey || event.altKey) {
                // Zvýšenie veľkosti textu
                if (event.key === '+' || (event.key === '=' && event.shiftKey)) {
                    changeFontSize('increase');
                }
                // Zníženie veľkosti textu
                else if (event.key === '-') {
                    changeFontSize('decrease');
                }
                // Resetovanie veľkosti textu
                else if (event.key === '0') {
                    changeFontSize('reset');
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        // Odstránenie event listeneru pri odchode
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    // Funkcia na načítanie responzívneho CSS
    const loadResponsiveCSS = () => {
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

        // Skontrolujte, či je aktuálny CSS súbor rovnaký ako ten, ktorý sa má načítať
        const existingLink = document.getElementById('responsive-css');
        if (existingLink && existingLink.href.endsWith(cssFile)) {
            return; // Ak je už správny CSS súbor načítaný, nič sa nevykoná
        }

        // Ak nie, vytvorí alebo aktualizuje <link> element
        if (existingLink) {
            existingLink.href = `/css/${cssFile}`; // Aktualizuje href na nový CSS súbor
        } else {
            const linkElement = document.createElement('link');
            linkElement.rel = 'stylesheet';
            linkElement.href = `/css/${cssFile}`; // Predpokladá, že CSS súbory sú v priečinku public/css
            linkElement.type = 'text/css';
            linkElement.id = 'responsive-css';
            document.head.appendChild(linkElement); // Pridajte element do head
        }
    };

    // Načítanie CSS pri prvom načítaní
    useEffect(() => {
        loadResponsiveCSS(); // Volanie funkcie pri prvom načítaní
        window.addEventListener('resize', loadResponsiveCSS); // Načítanie CSS pri zmene veľkosti okna

        // Odstránenie event listeneru pri odchode
        return () => {
            window.removeEventListener('resize', loadResponsiveCSS);
        };
    }, []);

    return (
        <div id="sekcia_zmena" className="p-4 bg-black text-lg">
            <h2 className="text-4xl font-bold mb-4 text-center">Zmeny v UI/UX a prístupnosti</h2>
            <p className="mb-2 text-center">Táto sekcia obsahuje informácie o vykonaných vylepšeniach, úpravách a modifikáciách z pohľadu prístupnosti a používateľského rozhrania.</p>
            <p className="mb-2 text-center">Veľkosť textu môžete zmeniť tlačidlami, použitím klávesy CTL/ALT/SHIFT + a CTRL/ALT -</p>
            <p className="mb-2 text-center">Pre obnovenie textu stačí zatlačiť CTRL/ALT 0</p>

            <div className="flex justify-center space-x-2 mt-4">
                {/* Tlačidlá pre zmenu veľkosti obsahu */}
                <button onClick={() => changeFontSize('increase')} className="p-2 rounded text-sm sm:text-base border border-black">Zväčšiť text</button>
                <button onClick={() => changeFontSize('decrease')} className="p-2 rounded text-sm sm:text-base ml-2 border border-black">Zmenšiť text</button>
                <button onClick={() => changeFontSize('reset')} className="p-2 rounded text-sm sm:text-base ml-2 border border-black">Resetovať text</button>
            </div>

            <h2 className="text-4xl font-bold mb-20 mt-20 text-center">Fotogaléria</h2>

            {/* Mriežka pre fotografie */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Fotka 1 */}
                <div className="relative p-4">
                    <img
                        src="/images/sekcia_zmeny_foto1.png"
                        alt="Hlavná fotografia sekcie zmeny"
                        className="w-auto h-auto object-cover rounded-lg"
                    />
                    <h3 className="text-lg font-semibold mt-2 mb-2">Hlavná stránka</h3>
                    <p>Prvý dizajn hlavnej stránky</p>
                    <p>Na tejto podstránke si môžete pozrieť zobrazenie a testovanie rozloženia produktov</p>
                </div>

                {/* Fotka 2 */}
                <div className="relative p-4">
                    <img
                        src="/images/sekcia_zmeny_foto2.png"
                        alt="Fotografia sekcie zmeny 2"
                        className="w-auto h-auto object-cover rounded-lg"
                    />
                    <h3 className="text-lg font-semibold mt-2 mb-2">Stránka ohľadom informácii</h3>
                    <p>Prvý dizajn podstránky Informácie</p>
                    <p>Na tejto podstránke sa môžete dozvedieť niečo o jej stvoriteľoch</p>
                </div>

                {/* Fotka 3 */}
                <div className="relative p-4">
                    <img
                        src="/images/sekcia_zmeny_foto3.png"
                        alt="Fotografia sekcie zmeny 3"
                        className="w-auto h-auto object-cover rounded-lg"
                    />
                    <h3 className="text-lg font-semibold mt-2 mb-2">Návrh responzivity</h3>
                    <p>Jeden z prvých dizajnov responzivity</p>
                </div>

                {/* Fotka 4 */}
                <div className="relative p-4">
                    <img
                        src="/images/sekcia_zmeny_foto4.png"
                        alt="Fotografia sekcie zmeny 4"
                        className="w-auto h-auto object-cover rounded-lg"
                    />
                    <h3 className="text-lg font-semibold mt-2 mb-2">Návrh footra</h3>
                    <p>Obsahuje rôzne prepojenia na sociálne siete alebo iné podstránky</p>
                </div>
            </div>

            {/* Zobrazenie GitHub commitov */}
            <h2 className="text-4xl font-bold mb-4 mt-20 text-center">Nedávne GitHub Commity</h2>
            <ul className="list-disc list-inside">
                {commits.slice(0, 5).map((commit, index) => (
                    <li key={index} className="mb-4">
                        <p className="font-semibold">{commit.commit.message}</p>
                        <p>
                            {commit.commit.author.name} -{' '}
                            {new Date(commit.commit.author.date).toLocaleString()}
                        </p>
                        <a
                            href={commit.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                        >
                            Zobraziť Commit
                        </a>
                    </li>
                ))}
            </ul>

            {/* Dynamické načítanie JavaScript súborov */}
            <Script src="/js/responsiveCSS.js" strategy="lazyOnload" />
        </div>
    );
};

export default SekciaZmeny;
