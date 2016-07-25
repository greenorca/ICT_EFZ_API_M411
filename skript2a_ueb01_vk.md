## Übungen: Verkettete Liste

### Eigene verkettete Liste implementieren

Schreiben Sie eine eigene Klasse für verkettete Listen mit der
entsprechenden *inneren Klasse* für die Datenstruktur.

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

Eingabe: Hello, Arnold, how are you doing?

Ausgabe: doing? you are how Arnold, Hello,

4. Elemente entfernen
	
	Erweitern Sie Ihre Klasse, so dass jeweils das letzte Element entfernt
wird.

5. Elemente an einer bestimmten Position einfügen / entfernen
	
	Jetzt erweitern wir unsere Liste, damit wir auch Elemente an einer
bestimmten Position einfügen oder auch löschen können. Erstellen Sie
eine verkettete Liste, welche aus String-Elementen besteht. Wir wollen
folgenden Satz anpassen:

*„To be or not to be, that is the question“.*

*„To be or not to be, my dear Hamlet, that is the question“.*

Zeigen Sie Ihre Lösungen der Lehrperson.

### Weitere Aufgaben mit verketteten Listen

a)  Schreiben Sie nochmals ein Programm, das Elemente von einem Benutzer
    jeweils am Anfang einer Liste abfüllt und dabei alle bereits
    vorhandenen Elemente entsprechend nach hinten rutscht. Das zuletzt
    eingegebene Element wird somit das erste Element in der Liste.
    Verwenden Sie dieses Mal Ihre Verkettete Liste. Welche Struktur ist
    einfacher? Der simple Array oder ihre Liste?

		Dokumentieren Sie beide Varianten (d.h. Sie haben beide Code-Varianten
in separaten Klassen und verwenden Sie eine Start-Klasse, welche beide
Varianten benützen kann).

a)  Schreiben Sie eine Methode `insertAfter(Node after, Node newNode)`,
    welche zwei Node-Objekte einer verket­teten Liste als Argumente
    übernimmt und das zweite nach dem ersten in die Liste einfügt.
    Testen Sie, ob nach dem Einfügen die vorherigen Listenelemente noch
    vorhanden sind.

Zeigen Sie Ihre Lösungen der Lehrperson.
