<html lang="pl">	Deklaracja języka	Google wie, że strona jest dla Polaków i wyświetla ją w google.pl.
<meta name="viewport">	Responsywność (RWD)	Strona dopasowuje się do telefonów. Google obniża ranking stron, które nie są "mobile-friendly".
<meta name="description">	Opis w wyszukiwarce	To ten szary tekst, który widzisz w Google pod linkiem. Zachęca ludzi do kliknięcia.
<title>	Tytuł karty i linku	Najważniejszy znacznik. Musi zawierać słowa kluczowe (np. "Optymalizacja SEO").
<h1> (tylko jeden!)	Główny temat strony	Mówi robotowi: "To jest najważniejszy napis na tej stronie".
<img alt="...">	Tekst alternatywny	Roboty nie widzą obrazka. Czytają alt, żeby wiedzieć, co na nim jest.
Semantyka (<main>, <header>)	Struktura dokumentu	Pomaga robotom oddzielić nawigację od głównej treści strony.

# Projekt: Optymalizacja SEO 🚀

To repozytorium zostało stworzone na przedmiot **Witryny i Aplikacje Internetowe**. 

## Cel projektu
Demonstracja poprawnej struktury kodu HTML pod kątem wyszukiwarek (Google).

## Co zostało zrobione?
- [x] Dodanie tagów meta (viewport, description).
- [x] Zastosowanie semantycznych znaczników HTML5 (`<header>`, `<main>`, `<footer>`).
- [x] Optymalizacja obrazków (atrybuty `alt`).
- [x] Podpięcie arkusza stylów CSS.

## Narzędzia
Do audytu strony wykorzystano:
- Lighthouse (Chrome DevTools)
- PageSpeed Insights

- stary kod:
- <!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Projekt na WiAI: Demonstracja optymalizacji SEO dla początkujących.">
    <title>Optymalizacja SEO - Moja Strona Projektowa</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Witamy w świecie SEO!</h1>
        <nav>
            <a href="#czym-jest">Czym jest SEO?</a> | 
            <a href="#dlaczego-warto">Dlaczego warto?</a>
        </nav>
    </header>

    <main>
        <section id="czym-jest">
            <h2>Czym jest Search Engine Optimization?</h2>
            <p>SEO to proces poprawiania widoczności strony w naturalnych wynikach wyszukiwania.</p>
            <img src="https://via.placeholder.com/600x300" alt="Grafika przedstawiająca analizę danych SEO">
        </section>
    </main>

    <footer>
        <p>Projekt WWW</p>
    </footer>
</body>
</html>

- https://piotr2025.github.io/moja-strona-seo/ do np https://www.seobility.net pisze co można poprawić
- RankBrain (Mózg rankingu) poprawia np z skup tonie bute na kup tanie buty
- <img width="1296" height="472" alt="image" src="https://github.com/user-attachments/assets/7480c7c1-7c1d-4e34-ba69-3e95634fbd40" />
- AI chce więcej słów żeby zrozuymieć o czym jest moja strona by potem komuś kto wyszukuje dana fraze pokazać wyniki zgodne z wyszukiwaniem
- <img width="1037" height="397" alt="image" src="https://github.com/user-attachments/assets/244c1b87-421d-4ac3-a7da-0a1e5d0399b0" />


nowy kod: 
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Kompleksowy poradnik o optymalizacji SEO. Dowiedz się, jak poprawić wyniki Page Quality i widoczność strony w wyszukiwarce Google.">
    <title>Optymalizacja SEO - Poradnik i Strategie Widoczności</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Optymalizacja SEO - Poradnik dla początkujących</h1>
        <nav>
            <a href="#czym-jest">Czym jest SEO?</a> | 
            <a href="#optymalizacja-tresci">Optymalizacja treści</a> |
            <a href="#wyniki-audytu">Wyniki audytu</a>
        </nav>
    </header>

    <main>
        <article>
            <section id="czym-jest">
                <h2>Czym jest Search Engine Optimization?</h2>
                <p>Optymalizacja SEO (Search Engine Optimization) to zestaw działań mających na celu poprawę widoczności strony internetowej w naturalnych wynikach wyszukiwania. W dzisiejszych czasach samo posiadanie witryny nie wystarczy – musi ona być zrozumiała dla algorytmów sztucznej inteligencji, takich jak Google RankBrain czy BERT. Dzięki poprawnej strukturze kodu i wartościowej treści, nasza strona może zająć wyższą pozycję, co bezpośrednio przekłada się na większą liczbę wyświetleń i zainteresowanie użytkowników.</p>
                
                <img src="https://via.placeholder.com/600x300" alt="Analiza wykresów optymalizacji SEO i widoczności strony">
            </section>

            <section id="optymalizacja-tresci">
                <h2>Jak poprawić Page Quality na swojej stronie?</h2>
                <p>Jednym z najważniejszych czynników, które bierze pod uwagę wyszukiwarka, jest jakość strony (Page Quality). Aby uzyskać wysoki wynik w audytach takich jak Seobility czy Lighthouse, musimy zadbać o odpowiednią ilość tekstu. Przyjmuje się, że wartościowa podstrona powinna zawierać minimum 250-300 słów. Dlaczego to jest ważne? Ponieważ roboty indeksujące potrzebują kontekstu, aby poprawnie przypisać stronę do konkretnych zapytań użytkowników.</p>
                
                <p>Kolejnym krokiem jest spójność. Słowa kluczowe użyte w tytule strony (tag title) oraz w nagłówku H1 powinny pojawiać się naturalnie w całej treści artykułu. Jeśli nasza strona mówi o optymalizacji SEO, to te frazy muszą być widoczne w akapitach. Ważne jest również stosowanie znaczników semantycznych, takich jak sekcje, artykuły i paragrafy, co ułatwia maszynom interpretację struktury dokumentu HTML.</p>

                <p>Nie możemy zapominać o szybkości ładowania i responsywności. Współczesne SEO kładzie ogromny nacisk na urządzenia mobilne. Strona, która wolno się ładuje lub błędnie wyświetla na telefonie, zostanie ukarana przez Google niższą pozycją w rankingu. Dlatego tak ważne jest testowanie witryny za pomocą profesjonalnych narzędzi deweloperskich i ciągłe poprawianie wykrytych błędów technicznych.</p>
            </section>
        </article>
    </main>

    <footer>
        <p>Projekt WWW.</p>
    </footer>
</body>
</html>





