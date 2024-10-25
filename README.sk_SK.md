# Elektronický obchod

**Webové technológie TUKE Skupina 3**

## Odporúčania pre vývojárov

Prosíme, pokiaľ je to možné, komentujte svoje časti kódu a uvádzajte, kto napísal ktorú časť. To pomôže ostatným členom tímu lepšie pochopiť vašu implementáciu a uľahčí spoluprácu na projekte.

## Popis

Tento projekt je prototyp internetového obchodu s oblečením, vyvinutý pomocou **Next.js**—moderného frameworku na tvorbu vysokovýkonných webových aplikácií založených na Reacte.

## Technologický stack

### Hlavné technológie

- **Next.js** — framework na tvorbu serverom renderovaných a staticky generovaných React aplikácií.
- **Tailwind CSS** — utility-first CSS framework pre rýchle a flexibilné štýlovanie komponentov používateľského rozhrania.

### Nástroje na testovanie

- **Faker** — knižnica na generovanie falošných dát používaných počas vývoja a testovania.

## Požiadavky

- **Node.js** verzie 14.x alebo vyššej

## Inštalácia

Pred začatím práce sa uistite, že máte nainštalovaný [Node.js](https://nodejs.org/).

Naklonujte si repozitár projektu a prejdite do jeho adresára:

```bash
git clone https://github.com/bulbashenko/gorbachev-shop-v2.git
cd gorbachev-shop-v2
```

Nainštalujte závislosti projektu:

```bash
npm install
```

## Použitie

### Vývojový režim

Na spustenie aplikácie vo vývojovom režime s podporou hot reloading vykonajte:

```bash
npm run dev
```

Vývojový server sa spustí na adrese [http://localhost:3000](http://localhost:3000/). Otvorte túto URL vo svojom prehliadači, aby ste si aplikáciu prezreli.

### Produkčná zostava

Na vytvorenie optimalizovanej produkčnej zostavy aplikácie spustite:

```bash
npm run build
```

### Spustenie produkčnej zostavy

Po zostavení môžete spustiť produkčný server:

```bash
npm start
```

## Štruktúra projektu

Hlavná štruktúra projektu je nasledovná:

```
.
├── app/
│   ├── components/
│   ├── page.js
│   ├── layout.js
│   └── global.css
├── public/
│   └── images/
├── package.json
└── README.md
```

Stručný popis jednotlivých adresárov a súborov:

- **app/** — hlavný adresár Next.js aplikácie.
  - **components/** — znovu použiteľné React komponenty.
  - **page.js** — hlavná stránka aplikácie.
  - **layout.js** — koreňový layout aplikácie.
  - **global.css** — globálne štýly pre celú aplikáciu.
- **public/** — statické súbory prístupné priamo cez webový server.
  - **images/** — obrázky a mediálne súbory.
- **package.json** — súbor obsahujúci závislosti projektu a skripty na spustenie.
- **README.md** — dokumentácia projektu.

## Dokumentácia a užitočné zdroje

- [Dokumentácia Next.js](https://nextjs.org/docs)
- [Dokumentácia Tailwind CSS](https://tailwindcss.com/docs)
- [Faker na GitHube](https://github.com/faker-js/faker)

## Repozitár projektu

Kód projektu je dostupný na GitHube: [bulbashenko/gorbachev-shop-v2](https://github.com/bulbashenko/gorbachev-shop-v2)

## Autori

- Istomina Polina
- Albekov Aleksandr
- Pöhm Peter
- Murcko Adam

## Kontakty

Ak máte akékoľvek otázky alebo návrhy, prosím, kontaktujte cez Discord alebo Facebook Messenger.


