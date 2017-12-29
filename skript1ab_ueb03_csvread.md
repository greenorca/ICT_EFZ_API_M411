##Übung: Textdateien einlesen

**Lernziele:**

* Erstellen einer Klasse zum zeilenweisen Lesen von Textdateien
* Konvertieren von Textzeilen zu Datenobjekten
* Vergleichen von Strings
* Umwandeln von String in numerische Datentypen

**Zeit:** 45 Minuten

Wir werden eine Textdatei mit folgender Struktur verwenden:

```
Huber;Peter;1955
Meier;Irene;1960
Muster;Anna;1974
Kohli;Jan;1998
Manser;Mario;1999
```

Speichern Sie obigen Text als Datei im Projektordner mit dem Namen `daten.csv` ab.

1. Erstellen Sie eine neue Java-Klasse `Skript1_SimpleCsvReader` im Projekt `M411`, welches diese Datei liest und Zeile für
Zeile wieder auf der Konsole ausgibt. Geben Sie zusätzlich das Alter der
Personen jeweils am Ende der Zeile aus.

	**Lösungsvorschlag:**
	
	`Skript1_SimpleCsvReader.java`

2. Erstellen Sie eine Klasse Person mit den *private* Attributen bzw. Instanzvariablen `name`, `vorname` (String) und `geburtsjahr` (int). Die Parameter sollen im Konstruktor übergeben werden. Zusätzlich erstellen Sie die notwendigen *GETTER* Funktionen für die Instanzvariablen.

Sorgen Sie nun in der `main()`-Methode von `Skript1_SimpleCsvReader` dafür, dass für jede Zeile der Datei `daten.csv` ein entsprechendes Objekt vom Typ `Person` angelegt wird. Prüfen Sie die Richtigkeit der erstellten Objekte manuell innerhalb der Schleife zum Einlesen.

3. Kopieren Sie die Klasse `Skript1_SimpleCsvReader` und nennen Sie die Kopie `Skript1_SearchCsvReader`. Erweitern Sie die Klasse so, dass zuerst der Benutzer einem Vornamen eingibt. Dann wird die Datei `daten.csv` eingelesenen und von allen Personen mit diesem Vornamen der ganze Namen und das Alter auf der Konsole ausgegeben. Beachten Sie dabei, dass zum Vergleich von zwei String-Variablen der Operator `==` **nicht** verwendet
werden kann. Stattdessen verwenden Sie die Methode `equals()` der Klasse `String`.

	**Lösungsvorschlag:**
	
	`Skript1_SearchCsvReader.java`
