'use client'
import { useEffect } from 'react';
import Script from 'next/script';
import "../globals.css";



const SekciaZmeny = () => {
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
            if (event.ctrlKey && event.key === '+') {
                changeFontSize('increase');
            } else if (event.ctrlKey && event.key === '-') {
                changeFontSize('decrease');
            }else if(event.ctrlKey && event.key == '0'){
                changeFontSize('reset');
            }

            if (event.altKey && event.key === '+') {
                changeFontSize('increase');
            } else if (event.altKey && event.key === '-') {
                changeFontSize('decrease');
            } else if(event.altKey && event.key == '0'){
                changeFontSize('reset');
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        
        // Clean up event listener
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

    // Ak nie, vytvorí alebo aktualizujte <link> element
    if (existingLink) {
        existingLink.href = `/css/${cssFile}`; // Aktualizuje href na nový CSS súbor
    } else {
        const linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = `/css/${cssFile}`; // predpokladá, že CSS súbory sú v priečinku public/css
        linkElement.type = 'text/css';
        linkElement.id = 'responsive-css';
        document.head.appendChild(linkElement); // Pridajte element do head
    }
};

// Načítanie CSS pri prvom načítaní
useEffect(() => {
    loadResponsiveCSS(); // Volanie funkcie pri prvom načítaní
    window.addEventListener('resize', loadResponsiveCSS); // Načítanie CSS pri zmene veľkosti okna

    // Clean up event listener
    return () => {
        window.removeEventListener('resize', loadResponsiveCSS);
    };
}, []);



  
    return (


        
        <div id="sekcia_zmena" className="p-4 bg-black text-lg">
            <h2 className="text-4xl font-bold mb-4 text-center">Zmeny v UI/UX a prístupnosti</h2>
            <p className="mb-2 text-center">Táto sekcia obsahuje informácie o vykonaných vylepšeniach, úpravách a modifikáciách z pohľadu prístupnosti a používateľského rozhrania.</p>
            <p className="mb-2 text-center">Veľkosť textu môžete zmeniť tlačidlami, použitím klávesy CTRL/ALT a +/-</p>
            <p className="mb-2 text-center">Pre obnovenie textu stačí zatlačit CTRL/ALT 0</p>
            <p className='mb-2 text-center'></p>
            
            <div className="flex justify-center space-x-2 mt-4">
            {/* Tlačidlá pre zmenu veľkosti obsahu */}
            <button onClick={() => changeFontSize('increase')} className = "p-2 rounded text-sm sm:text-base border border-black">Zväčšiť text</button>
            <button onClick={() => changeFontSize('decrease')} className="p-2 rounded text-sm sm:text-base ml-2 border border-black">Zmenšiť text</button>
            <button onClick={() => changeFontSize('reset')} className="p-2 rounded text-sm sm:text-base ml-2 border border-black">Resetovať text</button>
            </div>
            
            <h2 className="text-4xl font-bold mb-20 mt-20 text-center">Fotogaléria</h2>

                {/* Mriežka pre fotografie */}
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Fotka 1 */}
                    <div className="relative  p-4">
                        <img
                            src="/images/sekcia_zmeny_foto1.png"
                            alt="Hlavná fotografia sekcie zmeny"
                            className="w-auto h-auto object-cover rounded-lg"
                        />
                        <h3 className="text-lg font-semibold mt-2 mb-2">Hlavná stránka</h3>
                        <p className="">Prvý dizajn hlavnej stránky</p>
                        <p className="">Na tejto podstránke si môžete pozrieť zobrazenie a testovanie rozloženia produktov </p>
                    </div>

                    {/* Fotka 2 */}
                    <div className="relative  p-4">
                        <img
                            src="/images/sekcia_zmeny_foto2.png"
                            alt="Fotografia sekcie zmeny 2"
                            className="w-auto h-auto object-cover rounded-lg"
                        />
                        <h3 className="text-lg font-semibold mt-2 mb-2">Stránka ohľadom informácii</h3>
                        <p className="">Prvý dizajn podstránky Informácie</p>
                        <p className="">Na tejto podstránke sa môžete dozvedieť niečo o jej stvoriteľoch</p>
                    </div>

                    {/* Fotka 3  */}
                    <div className="relative  p-4">
                        <img
                            src="/images/sekcia_zmeny_foto3.png"
                            alt="Fotografia sekcie zmeny 3"
                            className="w-auto h-auto object-cover rounded-lg"
                        />
                        <h3 className="text-lg font-semibold mt-2 mb-2">Dizajn podstránky ...</h3>
                        <p className="">Toto je popis k fotke 3. Môžete sem napísať niečo viac o tejto fotke.</p>
                        <p className="">Toto je popis k fotke 3. Môžete sem napísať niečo viac o tejto fotke.</p>
                    </div>

                    {/* Fotka 4  */}
                    <div className="relative  p-4">
                        <img
                            src="/images/sekcia_zmeny_foto4.png"
                            alt="Fotografia sekcie zmeny 4"
                            className="w-auto h-auto object-cover rounded-lg"
                        />
                        <h3 className="text-lg font-semibold mt-2 mb-2">Dizajn podstránky ...</h3>
                        <p className="">Toto je popis k fotke 4. Môžete sem napísať niečo viac o tejto fotke.</p>
                        <p className="">Toto je popis k fotke 4. Môžete sem napísať niečo viac o tejto fotke.</p>
                    </div>
                </div>
                
            {/* Dynamické načítanie JavaScript súborov */}
            <Script src="/js/responsiveCSS.js" strategy="lazyOnload" />
        </div>

        
    );
};

export default SekciaZmeny;


