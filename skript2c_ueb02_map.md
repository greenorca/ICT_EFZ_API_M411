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

Wir erweitern die Klasse `AirportManagement` um eine Funktion, die für jedes Land die Anzahl der Flughäfen ausgibt. Legen Sie dazu innerhalb der neuen Klassenmethode eine `HashMap<String, Integer>` an und füllen Sie diese in einem Schleifendurchlauf über die Airport-Liste mit den verschiedenen Ländern. Ist ein Land schon in der HashMap enthalten, inkrementieren Sie den Integer-Wert. Zum Schluss geben Sie die Länder und Anzahl der Flughäfen auf der Konsole aus.

**Lösungsvorschlag:**

`AirportView.java`, `Airport.java`

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