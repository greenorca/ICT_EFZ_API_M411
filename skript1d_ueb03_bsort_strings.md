## Übung: Weiterführende Aufgaben mit Bubble-Sort

**Lernziele:**

* anwenden und ändern Sortierfunktionen
* anwenden Sortieralgorithmen für komplexe benutzerdefinierte Klassen

**Zeit:** 60 Minuten

Der Bubble-Sort ist für numerische wie auch alphanumerische
Sortieraufgaben geeignet. Dies darum, weil sich die Problematik in den
beiden Fällen nicht unterscheidet: 

$5 > 2$ vs. $'D' > 'B'$

Vergleichen Sie dazu die ASCII-Tabelle [siehe Wikipedia](https://de.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange#ASCII-Tabelle).

Sollen nun ganze Worte alphabetisch geordnet werden, müssen ggf. weitere
aufeinanderfolgende Buchstaben miteinander verglichen werden. Z.B. liegt
"Muheim" vor "Mutzer".

###Strings sortieren

Erstellen Sie eine Klasse `StringBSort`. Darin lesen Sie ein File mit 10 Strings ein und sortieren Sie diese in
alphabetischer Reihenfolge. Danach geben Sie die 10 sortierten Strings
in der Konsole aus.

###Array einer benutzerdefinierten Klasse sortieren

Erstellen Sie eine Klasse `Person` mit den Attributen `Vorname`, `Nachname` und `Geburtsjahr`. Diese Attribute sollen im Konstruktor übergeben werden. 

In der `main`-Funktion legen Sie einen `personen`-Array mit 5 beliebigen Personen an. Erstellen Sie eine statische Sortierfunktion, die Ihren Array nach dem Personenalter *absteigend* sortiert. Geben Sie `personen` vor und nach dem Sortieren aus.
