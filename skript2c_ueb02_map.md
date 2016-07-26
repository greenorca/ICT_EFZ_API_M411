## Übung: Anwenden `map`-Datenstruktur
**Lernziele**

* Anwenden `map`-Datenstruktur in akademischer und realistischer Umgebung
* Erstellen Datenhaltung-Klassen
* Einlesen Daten aus strukturierten Textdateien 

**Zeit:** 30 + 60 Minuten

###Aufgabe: `HashMap` kennenlernen

Schreiben Sie eine Klasse, welche ein `HashMap` benützt, um einige eigene
Telefon-Einträge zu verwalten. Dabei soll die Telefonnummern den `key`
bilden und der Name den `value`.

Der Benutzer kann via Konsole / GUI einen Kontakt eintragen, der in
dieser `HashMap` abgelegt wird.

Mittels `get(Object key)` erhalten wir den zugehörigen `value`. Wie kann über das
ganze Map iteriert werden?

Wie können Sie die eingegebenen Telefonnummern persistent abspeichern, so dass sie beim nächsten Programmstart wieder verfügbar sind?

**Lösungsvorschlag:**

`Skript2c_PhoneMap.java`

###Zusatz-Aufgabe: `HashMap` für grössere Datenmengen verwenden 

Wir verwenden nun die `HashMap` für die Flughafen-Liste (siehe
airport-codes.txt). Sie können die Klasse `Airport` weiter verwenden. Erstellen Sie eine Klasse `AirportMap`, welche die Datei airport-codes.txt zeilenweise einliest in ein HashMap einliest. Der Airport – Code
steht jeweils am Zeilenende in Klammern.

Erweitern Sie die Klasse, so dass nach einem Flughafen-Code gesucht
werden kann. (entweder via Konsole oder GUI)


**Lösungsvorschlag:**

`Skript2c_AirportMap.java`

<!--
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

-->