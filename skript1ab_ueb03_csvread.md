##Übung: Textdateien einlesen

**Lernziele:**

* erstellen Klasse zum zeilenweisen Lesen von Textdateien
* vergleichen Strings
* umwandeln String in numerische Datentypen

**Zeit:** 45 Minuten

Wir werden eine Textdatei mit folgender Struktur verwenden:

`Huber;Peter;1955`<br>
`Meier;Irene;1960`<br>
`Muster;Anna;1974`

Speichern Sie obigen Text als Datei im Projektordner mit dem Namen `daten.csv` ab.

1. Erstellen Sie eine neue Java-Klasse `Skript1_SimpleCsvReader` im Projekt `M411`, welches diese Datei liest und Zeile für
Zeile wieder auf der Konsole ausgibt. Geben Sie zusätzlich das Alter der
Personen jeweils am Ende der Zeile aus.

2. Kopieren Sie die Klasse und nennen Sie die Kopie `Skript1_SearchCsvReader`. Erweitern Sie die Klasse so, dass zuerst der Benutzer einem Vornamen eingibt. Dann wird die `daten.csv` eingelsenen und von allen Personen mit diesem Vornamen der ganze Namen und das Alter auf der Konsole ausgegeben. Beachten Sie dabei, dass zum
Vergleich von zwei String-Variablen der Operator `==` **nicht** verwendet
werden kann. Stattdessen verwenden Sie die Methode `equals` der Klasse `String`.

