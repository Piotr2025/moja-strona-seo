4 – „Magia Timera i pamięć localStorage”
Dlaczego? Bo jest bardzo logiczny. Możecie go podzielić na dwie niezależne części: Logikę (to, co dzieje się w tle) oraz Interfejs (to, co widzi użytkownik). Materiałów o „JS Toast Notifications” i „localStorage counter” jest w sieci mnóstwo.

Propozycja sprawiedliwego podziału (7 min + 7 min):
Osoba A: „Władca Pamięci” (localStorage i logika licznika)

Teoria: Wyjaśnia, czym jest localStorage, dlaczego dane tam zostają po odświeżeniu strony i czym to się różni od ciasteczek (cookies).

Praktyka: Pokazuje, jak napisać funkcję, która przy każdym kliknięciu „Kup” zwiększa licznik w pamięci przeglądarki.

Wyzwanie: Wyjaśnienie, dlaczego musimy używać parseInt() przy wyciąganiu liczb z pamięci (bo localStorage przechowuje tylko teksty).

Osoba B: „Mistrz Czasu” (Powiadomienia Toast i setTimeout)

Teoria: Wyjaśnia działanie setTimeout() – jak działa asynchroniczność (że kod „czeka” w kolejce, a strona się nie zawiesza).

Praktyka: Tworzenie elementu w DOM (createElement), dodawanie go do widoku i – co najważniejsze – automatyczne usuwanie go po 3 sekundach za pomocą remove().

Wyzwanie: Pokazanie, jak stylowo animować wjazd i wyjazd powiadomienia w CSS.

Wstęp (1 min – Razem)
Osoba A: "Dzień dobry, dzisiaj pokażemy Wam, jak działają mechanizmy, które spotykacie codziennie w sklepach internetowych – powiadomienia o dodaniu produktu do koszyka oraz pamięć, dzięki której strona 'pamięta' Wasze działania."

Osoba B: "Skupimy się na dwóch technologiach: localStorage oraz asynchronicznych timerach setTimeout."

Część 1: LocalStorage – Pamięć przeglądarki (5 min – Osoba A)
Teoria: Wyjaśnij, że localStorage to magazyn danych w przeglądarce. Dane tam zapisane nie znikają po odświeżeniu strony (w przeciwieństwie do zwykłych zmiennych).

Kod: Pokaż w kodzie JS funkcję localStorage.setItem i getItem.

Demo: Kliknij "Kup" kilka razy, odśwież stronę (F5) i pokaż, że liczba zakupów nie wróciła do zera.

Wskazówka: Pokaż panel "Application" w narzędziach deweloperskich (F12), gdzie fizycznie widać zapisaną wartość.

Część 2: Timery i DOM – Powiadomienia Toast (5 min – Osoba B)
Teoria: Wyjaśnij, jak tworzymy elementy "w locie" (createElement).

Mechanizm setTimeout: To serce tej części. Powiedz: "Nie chcemy, żeby powiadomienia zaśmiecały ekran na zawsze. Używamy setTimeout, który mówi przeglądarce: 'poczekaj 3 sekundy, a potem wykonaj funkcję remove()'."

Asynchroniczność: Zwróć uwagę, że program nie "zamraża się" na te 3 sekundy – możesz klikać dalej, a powiadomienia będą znikać niezależnie od siebie.

Demo: Kliknij przycisk "Kup" bardzo szybko 5 razy. Zobaczcie, jak tworzy się kolejka powiadomień i jak każde z nich znika po swoim czasie.

Podsumowanie (2 min – Razem)
Osoba A: "LocalStorage to świetne narzędzie do przechowywania prostych danych bez potrzeby posiadania bazy danych i serwera."

Osoba B: "Z kolei setTimeout pozwala na budowanie interaktywnego UI, który sam sprząta po sobie, co poprawia User Experience."

Pytania: "Czy są jakieś pytania?"
