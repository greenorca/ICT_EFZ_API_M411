## Übung: Weiterführende Aufgaben mit Bubble-Sort

**Lernziele:**

* Anwenden und Ändern Sortierfunktionen
* Anwenden Sortieralgorithmen für komplexe benutzerdefinierte Klassen
* Anwenden objektorientierte Programmierparadigmen 

**Zeit:** 60 Minuten

Der Bubble-Sort ist für numerische wie auch alphanumerische
Sortieraufgaben geeignet. Dies funktioniert, weil sich die Problematik in den
beiden Fällen nicht unterscheidet: 

`5 > 2` vs. `'D' > 'B'`

Vergleichen Sie dazu die ASCII-Tabelle [siehe Wikipedia](https://de.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange#ASCII-Tabelle).

Sollen nun ganze Worte alphabetisch geordnet werden, müssen ggf. weitere
aufeinander folgende Buchstaben miteinander verglichen werden. Z.B. liegt
"Muheim" vor "Mutzer".

###Strings sortieren

Erstellen Sie eine Klasse `Skript1c_StringBSort`. Darin lesen Sie ein File mit 10 Strings ein und sortieren Sie diese in
alphabetischer Reihenfolge. Danach geben Sie die 10 sortierten Strings in der Konsole aus.

**Lösungsvorschlag:**

`Skript1c_StringSort.java`


###Array einer benutzerdefinierten Klasse sortieren

In dieser Aufgabe lernen Sie, Arrays von Benutzerklassen zu sortieren. Ab hier arbeiten Sie wieder richtig objektorientiert, d.h. Daten werden in Instanzvariablen gespeichert und Funktionalität ist in Instanzmethoden implementiert. Die `main`-Funktion dient nur als Testrahmen.

1. Erstellen Sie eine Klasse `Skript1c_PersonBsort`. Erstellen Sie nun eine Klasse `Person` mit den Attributen `vorname`, `nachname` und `geburtsjahr`. Der Konstruktor der Klasse `Person` übernimmt alle diese Parameter. 

2. Erstellen Sie eine Instanzvariable `Person[] personenArray`. Diese soll in einer Instanzfunktion `readPersonFile` mit den Personen aus das Datei `daten.csv` gefüllt werden (siehe `Skript1_SimpleCsvReader`). Beachten Sie, dass die Anzahl der Personen variabel ist und am Ende der Funktion das Array `personenArray` nur gültige Werte enthält. 

3. Erstellen Sie eine Sortierfunktion, die Ihren Array nach dem Nachnamen *absteigend* sortiert. Geben Sie `personen` vor und nach dem Sortieren aus.

**Lösungsvorschlag:**
	
`Skript1c_Personen.java`
