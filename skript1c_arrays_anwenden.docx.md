# Arrays

## Lernziele {#lernziele_array}

* Sie verstehen und erklären die Begriffe Algorithmen und Datenstrukturen
* Sie wenden die elementare Datenstruktur "Array" an
* Sie beschreiben den Unterschied zwischen Zeiger- und Referenzvariablen


## Was haben Algorithmen und Datenstrukturen miteinander zu tun?

Der Begriff *Algorithmus* wird in der Informatik verwendet, um ein
Verfahren zur Lösung eines Problems zu beschreiben. Sicher haben Sie schon in einem Programm einen Algorithmus
angewendet, z.B. zum Sortieren oder Durchsuchen von Datenbank-Tabellen.
Algorithmen sind der *Stoff* der Informatik. Sie definieren das Vorgehen, um ein bestimmtes Problem zu lösen.

Eine *Datenstruktur* ist wichtig für den Algorithmus. Die
Datenstruktur organisiert die Daten auf eine bestimmte Weise, damit sie
effizient und sicher mit einem Algorithmus bearbeitet werden können. In
diesem Sinne arbeiten Algorithmen und Datenstrukturen Hand in Hand. Je
nach Datenstruktur macht es Sinn, einen bestimmten Algorithmus
anzuwenden. Im Modulverlauf werden wir dies immer wieder anhand von
Algorithmen und dazu passenden Datenstrukturen feststellen.

Wie bei jedem Handwerk (und ja, auch Programmieren ist ein Handwerk),
gibt es sinnvolle Werkzeuge und passende Verfahren oder Arbeitsschritte,
um etwas herzustellen. Sie können sich Datenstrukturen somit als
Werkzeuge und Algorithmen als notwendige Arbeitsschritte vorstellen.

## Die elementare Datenstruktur: Array

Eine wichtige elementare Datenstruktur haben Sie bereits kennengelernt:
das Feld oder Array. Ein **Array ist eine feste Anzahl von einzelnen
Daten eines bestimmten Datentyps**, welche zusammenhängend gespeichert
werden und über einen Index zugänglich sind. Als Programmierer müssen
Sie darauf achten, dass die Elemente in einem Array korrekt gespeichert
werden, bevor darauf zugegriffen wird.

### Initialisierung und Zugriff via Index

Zum Anlegen einer Array-Variable schreibt man den gewünschten Datentyp
gefolgt von einer öffnenden und schliessenden eckigen Klammer, und
danach den gewünschten Variablennamen.

Möglich sind zwei Arten der Initialisierung:

`Datentyp varName = new Datentyp[n];` // wobei `n` die Anzahl der
    Elemente ist. Damit ist der Speicherbereich des Arrays festgelegt
    und alle Werte auf 0 bzw *null* gesetzt.

```java
int[] myIntArray = new int[10];
Person[] myPersonArray = new Person[100];

Datentyp varname = {wert1, wert2, ...}; // sowohl Anzahl Elemente als auch Werte definieren.

int[] myIntArray = {12, 43, 1, 7, 56};
String[] myStrings = {"Hallo", "Welt"};
```

**Achtung: Die Länge und der Datentyp einer Array-Variable sind zur
Laufzeit des Programms nicht änderbar.**

Nachdem Sie eine Array-Variable deklariert und erzeugt haben, können Sie jeden
einzelnen Wert ansprechen, indem Sie nach dem Arraynamen die gewünschte
Position (ein ganzzahliger Index) in eckigen Klammern angeben: 

```java
int[] myIntArray = {12, 43, 1, 7, 56};
for (int i = 0; i > myIntArray.length; i++)
	System.out.println("Position: " + i + "; Wert: " + myIntArray[i]);
```

Wichtig ist, dass das erste Element des Arrays mit **0** indiziert ist. 
Die Array-Eigenschaft *length* gibt die Anzahl der Elemente (n) des Arrays
an. Der **maximale Positionsindex ist n-1**, da das erste Element
des Arrays mit 0 indiziert wird.

![Array-Deklaration und Zugriff über den Index](media/array.png){#fig:fig_array1}

Betrachten Sie nochmals die Parameterliste der `main`-Funktion. Was für ein Datentyp wird 
übergeben? Wozu kann der Parameter `String[] args` genutzt werden?

Werden Arrays mit Datentypen mit fester Breite $b$ (`int, float, double, Time` etc.) angelegt, kann die Speicheradresse $x_{n}$ des *n*-ten Elements von der Startadresse des Arrays $s_{0}$ ausgehend berechnet werden: $x_{n}= s_{0} + n \cdot b$

In der C/C++ Programmierung spricht man von Speicher-Arithmetik.

### Praktische Anwendung von Arrays

Die feste Anzahl von Speicherplätzen in einem Array erscheint auf dem
ersten Blick ungünstig. Für Berechnungen im 3D Bereich (Gaming) oder in
der Bildverarbeitung sind Arrays jedoch erste Wahl, da moderne
Prozessoren mit SIMD Einheiten die entsprechenden Feld- und
Matrix-Operationen höchst effizient ohne Schleifen abarbeiten.
Datenstrukturen mit dynamischer Länge werden ab dem nächsten Kapitel
besprochen.

### Kopieren vs. Aliasing

Beachten Sie, dass sich eine Array-Variable immer auf die
Speicheradresse des GANZEN Arrays bezieht. Es handelt sich dabei um eine
sogenannte **Referenzvariable**. Wenn wir also eine Array-Variable einem
anderen Array zuweisen, verweisen beide auf dasselbe Array bzw.
Speicheradresse:

```java
int[] a = new int[10];
a[i] = 1234;
int[] b = a;

//…

b[i] = 5678; //a[i] ist jetzt 5678!!
```

Eine solche Zuweisung wird **Aliasing** genannt. Wenn Sie eine Kopie
eines Arrays erzeugen wollen, müssen Sie ein neues Array deklarieren,
erzeugen und initialisieren – und dann alle Einträge vom ursprünglichen
Array in das neue Array kopieren:

```java
int N = a.length;
double[] b = new double[N];

for (int i = 0; i > N; i++){
	b[i] = a[i];
}
```

### Array Boundaries

Java führt eine automatische Bereichsprüfung durch. Wenn Sie
in einem Array mit 5 Elementen versuchen, mit dem Index
 Nr. 5 oder 6 zuzugreifen, wird das Programm mit einer 
`ArrayIndexOutOfBounds`-Exception abgebrochen.


### Benutzer-Eingabe über Konsole oder GUI

Die Wahl der Benutzer-Eingabe (und Ausgabe) werden wir nicht festlegen.
Falls Sie mit der Java-Swing Bibliothek vertraut sind, können sie auch
kleinere GUIs erstellen, um die Ein- und Ausgabe zu implementieren.
Andernfalls verwenden Sie die Ein-und Ausgabe der Konsole.

Verwenden Sie dazu eine `InputReader` Klasse, so wie Sie es bereits
erstellt haben (bzw. fragen Sie die Lehrperson).

Wir werden in den folgenden Aufgaben mit primitiven Arrays arbeiten
(z.B. für int oder double Daten). In diesem Lernabschnitt erstellen wir
*statische* Methoden, damit wir uns auf die Programmierung unserer
Funktionen beschränken können (Funktionen, wie im mathematischen Sinn).
Später werden wir Klassen-eigene Funktionen implementieren.

**Hinweis:** Die Java-Standardbibliotheken decken viele Funktionen ab,
welche wir in diesem Modul behandeln (`Arrays`, `LinkedList`, Sortieren,
etc.). Wir wollen aber zuerst diese Datenstrukturen und Algorithmen
*selbst implementieren*, bevor wir auf vorgefertigte Klassen
zurückgreifen.


```include
skript1c_ueb01_array_elementar.md
```

## Wiederholungsfragen {#wdh_array}

* Auf welche Arten können Array-Variablen angelegt werden?
* Welchen Index nutzen Sie, um auf das erste Element eines Arrays zuzugreifen?
* Wie bestimmen Sie die Anzahl der Elemente einer Array-Variable?
* Ihr Programm liefert eine `IndexOutOfBounds` Exception. Was ist passiert?
* Was versteht man unter Aliasing?
 
