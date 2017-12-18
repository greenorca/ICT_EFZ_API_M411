## Übung: Numerische Ein-/Ausgaben
**Lernziele:**

* Einlesen und verarbeiten von Benutzer-Eingaben
* Einlesen von Zahlenformaten
* Arbeiten mit `Java-Calendar` Klassen.

**Zeit:** 60 Minuten

* Suchen Sie im Internet oder in der Java-Hilfe Informationen zur `Calendar`-Klasse. Geben Sie zunächst das aktuelle Datum zeilenweise aus: zuerst das Jahr, dann den Monat und schliesslich den Tag und Wochentag. Vermeiden Sie die Benutzung von `deprecated`-Funktionen.
 
* Erstellen Sie eine Klasse `AgeCalculator` mit der Methode `public void tellAge()`. Diese Methode soll den Benutzer nach seinem Namen und seinem Jahrgang und Geburtsmonat fragen. Wenn der Geburtsmonat dem aktuellen Monat entspricht, soll zusätzlich nach dem Geburtstag gefragt werden. Im Anschluss wird die folgende Meldung ausgeben:

	`Hallo Peter, du wirst in diesem Jahr 34 Jahre alt.`

	Dabei soll der Name und das Alter den Benutzer-Eingaben entsprechen. Verwenden Sie für die Berechnung des Alters das aktuelle Datum aus der `Calendar`-Klasse.

Erstellen Sie zunächst ein Struktogramm für die Funktion `tellAge()`. Dann implementieren und testen Sie Ihre Funktion.

<lsg>
**Lösungsvorschlag**

`AgeCalculator.java`

</lsg>
