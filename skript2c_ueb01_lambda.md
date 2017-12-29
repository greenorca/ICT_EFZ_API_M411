## Übung: Sortieren und Filtern mit Lambda-Ausdrücken
**Lernziele**

* Sortieren und Filtern mit Lambda-Ausdrücken in akademischer und realistischer Umgebung
* Erstellen Datenhaltung-Klassen
* Einlesen Daten aus strukturierten Textdateien 

**Zeit:** 15 + 60 Minuten

###Liste von Zufallszahlen sortieren

1. Erstellen Sie eine Klasse `RandomNumbers`. Diese Klasse erhält ein Attribut `randomNumbers` vom Typ `ArrayList<Integer>`. 

2. Erstellen Sie den Konstruktor dieser Klasse so, dass 10 Zufallszahlen in `randomNumbers` abgefüllt werden. Erstellen Sie eine weitere Klassenfunktion `printNumbers()`, die alle Elemente untereinander ausgibt. Nutzen Sie dazu Lambda-Funktionen. Testen Sie die korrekte Funktionalität des Konstruktors. 

3. Erstellen Sie eine weitere Klassenfunktion zum *absteigenden* Sortieren der Liste. Nutzen Sie dazu entsprechende Lambda-Funktionen. Testen Sie die Funktionalität. 

4. Erstellen Sie eine weitere Klassenfunktion zum *aufsteigenden* Sortieren der Liste. Nutzen Sie dazu entsprechende Lambda-Funktionen. Testen Sie die Funktionalität. 

**Lösungsvorschlag:**

`Skript2c_RandomNumbers.java`

### Flughafen-Liste implementieren

Sie nutzen eine `ArrayList` zur Verwaltung von Flughäfen samst dreistelligen Flughafencode, Land und Stadtnamen (siehe
airport_codes.txt). Der Airport-Code steht jeweils am Zeilenende in Klammern.

1. Schreiben Sie zunächst eine Klasse, `Airport`, welche die notwendigen Attribute `airport`, `country` und `city` enthält. Die drei Attribute sollen im Konstruktor der Klasse übergeben werden.

2. Erstellen Sie eine Klasse `AirportManagement`. Diese enthält ein Attribut `airportList` vom Datentyp `ArrayList<Airport>`. 

3. Studieren Sie den Aufbau der `airport_codes.txt`. Schreiben Sie eine Funktion `readAirports(String fileName)`. Die Funktion soll die in `filename` angegebene Datei öffnen und die entsprechenden `Airport`-Objekte in der `airportList`einfügen. Dazu müssen Sie bestimmte Sonderfälle unterscheiden und gerne auch fehlerhafte Zeilen für die Fehlersuche anzeigen. Erstellen Sie in der `main()`-Funktion der `AirportManagement`-Klasse einen geeigneten Testrahmen und prüfen Sie die korrekte Arbeitsweise Ihrer Funktion. 

4. Erstellen Sie eine Instanzfunktion `sortByCode()`. Diese Funktion soll intern die `airportList` nach dem dreistelligen Code sortieren. Nutzen Sie dazu die `sort`-Methode aus dem `java.util`-Package. Prüfen Sie die korrekte Arbeitsweise, indem Sie sich die ersten 10 Flughäfen vor und nach dem Sortieren ausgeben lassen.

5. Erstellen Sie eine Instanzfunktion `getAirportsByCountry(String country)`, welche als Rückgabewert eine ArrayList mit nur den Flughäfen des Landes `country` liefert. Prüfen Sie die korrekte Arbeitsweise.

6. Erstellen Sie eine Instanzfunktion `getAirport(String code)`, die für den gegebenen Code Stadt und Land als zusammengesetzten String zurück liefert.

**Lösungsvorschlag:**

`Skript2c_AirportCodes.java`
