## Übung: Anwenden `map`-Datenstruktur
**Lernziele**

* Anwenden `map`-Datenstruktur in akademischer und realistischer Umgebung
* Erstellen Datenhaltung-Klassen
* Einlesen Daten aus strukturierten Textdateien 

**Zeit:** 15 + 60 Minuten

###Aufgabe: `HashMap` kennenlernen

Schreiben Sie eine Klasse, welche ein `HashMap` benützt, um
Telefon-Einträge zu verwalten. Dabei soll die Telefonnummern den `key`
bilden und der Name den `value`.

Der Benutzer kann via Konsole / GUI einen Kontakt eintragen, der in
dieser `HashMap` abgelegt wird.

Mittels `get(Object key)` erhalten wir den `value`. Wie kann über das
ganze Map iteriert werden?



###Zusatz-Aufgabe: `HashMap` für grössere Datenmengen verwenden 

Wir verwenden die `HashMap` für eine Liste von Flughäfen (siehe
airports.txt). Schreiben Sie eine Klasse, welche die Datei airports.txt
Liste zeilenweise einliest in ein HashMap einliest. Der Airport – Code
steht jeweils am Zeilenende in Klammern.

Erweitern Sie die Klasse, so dass nach einem Flughafen-Code gesucht
werden kann. (entweder via Konsole oder GUI)



###Zusatz-Aufgabe: Tech-Support System implementieren (TODO Rework)

Erstellen Sie ein Tech-Support System, welches anhand von bestimmten
Schlüsselwörtern, dem User eine "Hilfe" anbietet. Diese Applikation
sollte folgende Klassen beinhalten:

*InputReader*: diese Klasse benützt die `Scanner`-Klasse, um die Eingabe
einzulesen.

*Responder*: diese Klasse hat ein `HashMap` mit Schlüsselwörtern (*key*)
und entsprechenden Antworten (*value*).

*SupportSystem*: hier wird Eingabe und Ausgabe gesteuert.

> Diese Klasse benützt den `InputReader` für die Eingabe und den
> `Responder` für eine Antwort.

