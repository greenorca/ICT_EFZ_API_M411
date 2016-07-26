## Übungen: Verkettete Liste

**Lernziele:**

* erstellen eigene verkettete Liste
* erstellen Grundfunktionen für Verkettete Liste

**Zeit:** 60 Minuten

**Art:** Sie können gern in Zweier-Teams arbeiten

### Eigene verkettete Liste implementieren

Schreiben Sie eine Klasse `Skript2a_VK` für verkettete Listen mit der
entsprechenden *inneren Klasse* `Node` für die Datenstruktur. Ihre Liste soll zunächst beliebige Daten abspeichern können.

1.  Implementieren Sie die Methode `append`. Testen Sie, ob Ihre Liste
    funktioniert, indem der Benutzer Zahlen oder Wörter eingeben kann.

2.  Implementieren Sie eine Methode `showNodeAdressAndValue`, welche
    alle vorher eingegebenen Werte gefolgt von der tatsächlichen
    Speicheradresse der jeweiligen Node ausgibt. Die Speicheradresse
    eines Objekts kann mittels `(Object)x.toString()` ausgegeben werden.
    Testen Sie die Methode, indem Sie eine Liste automatisch mit 10
    Zufallszahlen füllen. Danach beobachten Sie die Werte der
    aufeinander­folgenden Speicheraddressen.

3.  Erstellen Sie eine weitere Methode `showElementsReverse`, welche
    diese mittels einer Schleife wieder ausgibt. Die Wörter sollten in
    umgekehrter Reihenfolge erscheinen.

	Eingabe: *Hello, Arnold, how are you doing?*

	Ausgabe: *doing? you are how Arnold, Hello,*

4. Elemente entfernen
	
	Erweitern Sie Ihre Klasse um eine Funktion `public Object pop()`, die jeweils das letzte Element entfernt
und den Wert dieses Elements zurück gibt.

5.  Erstellen Sie eine Funktion `prepend`, welche Elemente
    jeweils am Anfang der Liste abfüllt und dabei alle bereits
    vorhandenen Elemente entsprechend nach hinten rutscht. Das zuletzt
    eingegebene Element wird somit das erste Element in der Liste.
    Verwenden Sie dieses Mal Ihre Verkettete Liste. Welche Struktur ist
    einfacher? Der simple Array oder die Verkettete Liste?

6. Elemente an einer bestimmten Position einfügen / entfernen
	
	Jetzt erweitern wir die Liste, damit Elemente an einer
bestimmten Position eingefügt oder gelöscht werden können. Erstellen Sie
eine verkettete Liste, welche aus String-Elementen besteht. Wir wollen
folgenden Satz anpassen:

	*To be or not to be, that is the question.*

	*To be or not to be, my dear Hamlet, that is the question.*

**Lösungsvorschlag:**

`Skript2a_VK.java`

