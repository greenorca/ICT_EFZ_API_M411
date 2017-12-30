## Übung: Erweiterte Aufgaben zu verketteten Listen

**Lernziele:**

* Erstellen eigene verkettete Liste
* Anwenden Sortieralgorithmen für komplexe benutzerdefinierte Klassen
* Anwenden objektorientierte Programmierparadigmen 

**Zeit:** 60 Minuten

**Art:** Sie können gern in Zweier-Teams arbeiten

###Verkettete Liste sortieren und Laufzeit messen

Kopieren Sie Ihren Quellcode der verketteten Liste in eine neue
Java-Klasse `Skript2a_VK2`. Ändern Sie den Datentyp des *item*-Elements der `Node`
Klasse von `Object` auf `Double`. Ändern Sie ebenso alle entsprechenden
Konstruktoren und Methoden der `Node` und `Skript2a_VK2` Klasse.
Schreiben Sie eine Klassenmethode für `Skript2a_VK2`, welche die
Listenelemente sortiert. Testen Sie Ihre Sortierfunktion zunächst mit
einigen wenigen Elementen auf Richtigkeit. Danach füllen Sie drei Listen
mit 100, 1000 und 10000 Zufallszahlen und lassen sich die Laufzeit der
Sortierung ausgeben.

**Lösungsvorschlag:**
	
`Skript2a_VK2.java`


###Verkette Liste für `Person`-Klasse

Kopieren Sie Ihren Quellcode der verketteten Liste in eine neue
Java-Klasse `Skript2a_VK_Person`. Ändern Sie den Datentyp des *item*-Elements der `Node`
Klasse von `Object` auf `Person`. Das funktioniert prima, wenn Sie die Klasse `Person` bereits in den vorigen Übungen im gleichen *package* erstellt haben.  Ändern Sie nun alle entsprechenden
Konstruktoren und Methoden der `Node` und `Skript2a_VK_Person` Klasse.
Schreiben Sie eine Klassenmethode für `Skript2a_VK_Person`, welche die
Listenelemente nach Nachname **absteigend** sortiert. Testen Sie Ihre Sortierfunktion auf Richtigkeit.

**Lösungsvorschlag:**
	
`Skript2a_VK_Person.java`
