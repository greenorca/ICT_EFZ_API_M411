## Übung: Arbeiten mit Iteratoren
**Lernziele**

* implementieren und anwenden Iteratoren 

**Zeit:** 25 Minuten

### Methode `next()` implementieren
Sie implementieren die Schnittstellen `Iterable<Object>` und `Iterator<Object>` in Ihrer Stack-Klasse.

Wie muss die Methode `next()` aussehen, damit wir jeweils das nächste
Element (und dessen Inhalt) bekommen? Ergänzen Sie den untenstehenden
Code in Ihrem Programm:

~~~~~~~~~~~~~~~~~
@Override
public Object next() {

	//TODO: complete code here
		
	Object item = this.currentIterPost.value;	
	return item;
}
~~~~~~~~~~~~~~~~~~~~~~

Testen Sie diese Methoden, indem Sie eine while-Schleife für `hasNext()`
implementieren.

**Lösungsvorschlag:**
	
`Skript2b_Iterator.java`

<!-- skipping this
### Array umgekehrt ausgeben mit Verwendung von `Iterator`

Schreiben Sie eine neue Stack-Klasse. Im Konstruktor wird ein `int`-Array entgegen genommen und dessen Elemente in den Stack eingelesen. Eine weitere Klassenmethode soll die Stack-Elemente in umgekehrter Reihenfolge ausgeben. Implementieren Sie dabei
das Interface `Iterator` und passen Sie dievom Interface verlangten
Methoden an, also:

`public boolean hasNext()`

-   Prüfe, ob es noch Elemente im Array hat

`public Object next()`

-   Gib das Element in umgekehrter Position aus (also data\[--i\])

-->