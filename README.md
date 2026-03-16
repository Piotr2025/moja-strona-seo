Mój wybór: Temat 4 – „Magia Timera i pamięć localStorage”
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
