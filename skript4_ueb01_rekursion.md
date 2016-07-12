## Übung: Rekursive Algorithmen erstellen und anwenden
**Lernziele**

* Erstellen einfache und komplexe rekursive Funktionen 

**Zeit:** 25 + 25 + 60 Minuten

###Rekursives Durchgehen aller Files oder Elemente


Erstellen Sie eine Klasse, welche mittels der `java.io.File` Klasse alle
Verzeichnisse auflistet und dabei rekursiv jedes Verzeichnis durchgeht.
Implementieren Sie eine Benutzer­schnittstelle, damit der Benutzer nach
einer bestimmten Datei suchen kann.

**Alternative**: Sie können dasselbe Prinzip auch auf eine XML-Struktur
anwenden (mit DOM) und diese dabei nach einem bestimmten Element
durchsuchen.

###Binäre-Suche

Implementieren Sie eine binäre Suche, welche eine Zahl sucht. Dabei wird
bei der binären Suche der definierte Suchraum (Anfangspunkt und
Endpunkt) jeweils halbiert:

> *guess = (upperborder + lowerborder) / 2*

Mit jedem Schritt wird der Suchraum verkleinert. In Pseudo-code:

*if (guess == number) Okay, found it!*

*else if (guess&gt; number)*

*number is lower, so we change our upperborder: upperborder = guess -1*

*else if (guess &lt; number)*

*number is higher, so we change our lowerborder: lowerborder = guess +
1*

Verwenden Sie dabei die Rekursion, um das wiederholte Suchen nach der
Zahl durch­zuführen. Geben Sie aus, wie viele Schritte die Suche
benötigt.

###Fortgeschritten: Die Türme von Hanoi

Es handelt sich hier um ein klassisches Denksport-Problem: Gegeben sind
3 Türme. Auf einem Turm sind n Platten gelegt. Die Platten haben
unterschiedliche Grössen, mit der grössten Platte zuunterst und der
kleinsten Platte zuoberst.

**Aufgabe:** Die Platten sollen vom 1.Turm zum 3.Turm transportiert
werden. Folgende Regeln gelten:

1.  Es darf nur eine Platte aufs Mal transportiert werden (von
    irgendeinem Turm zu irgendeinem Turm).

2.  Grössere Platten dürfen NICHT auf Kleinere gelegt werden.

![](media/hanoi.jpeg){width="4.864583333333333in"
height="2.1413385826771654in"}

Implementieren Sie eine Klasse, welches dieses Problem löst. Die Anzahl
Platten soll vom Benutzer bestimmt werden.

**Beispiel:** Transportiere 2 Platten (a und b) von Turm 1 nach Turm 3:

Wir benötigen 3 Schritte, um diese beiden Platten zu bewegen:

	Schritt 1: bewege Platte a nach Turm 2
	Schritt 2: bewege Platte b nach Turm 3
	Schritt 3: bewege Platte a nach Turm 3

**Die rekursive Lösung:**

Nehmen wir an, dass Platte a aus mehreren Platten besteht. Somit wären
die Schritte wie oben, nur dass Schritt 1 und 3 eine *Sammlung von
Platten* bewegt.

Schritt 1: bewege (n – 1) Platten von Turm 1 nach Turm 2 (n=totale
Anzahl Platten)

Schritt 2: bewege die letzte Platte nach Turm 3

Schritt 3: bewege (n – 1) Platten von Turm 2 nach Turm 3

Schritte 1 und 3 sind rekursive Aufrufe derselben Methode. Dieser
Methoden-Aufruf sieht wie folgt aus:

move(n - 1, start, end, middle); //Schritt 1

move(n - 1, middle, start, end); //Schritt 3

a)  Implementieren Sie eine Klasse mit der besprochenen Lösung. Ihre
    Klasse soll die entsprechenden Schritte ausgeben.

b)  Vergleichen Sie die Anzahl Platten mit der Anzahl Schritte. Wie
    nimmt der Aufwand zu?

