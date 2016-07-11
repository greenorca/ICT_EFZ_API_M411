Dynamische Datenstrukturen: Verkettete Liste
============================================
Lernziele:
--------------
-   Sie kennen den Unterschied zwischen Wertevariablen und
    Referenzvariablen / Zeigervariablen.

-   Sie kennen Sprachmittel einer Programmiersprache für das Deklarieren
    und das Arbeiten mit Werte- und Referenzvariablen.

-   Sie kennen das Konzept und den Nutzen von
    verketteten Datenstrukturen.

-   Sie kennen eine Notation für die Darstellung von
    verketteten Datenstrukturen.

-   Sie implementieren eine einfach verkettete Liste

##Eine elementare Datenstruktur: Verkettete Liste

Das Arbeiten mit einer fixen Grösse von Elementen stösst sehr schnell an
seine Grenzen, vor allem wenn wir es mit dynamischen Datenmengen zu tun
haben.

Hier kommt eine weitere elementare Datenstruktur zur Anwendung, welche
ihre Grösse verändern kann (was wir bei einem Array nicht können). Die
Verkettete Liste ("LinkedList") kann mit dynamischen Datenmengen
umgehen. Ein weiterer Vorteil ist, dass sie eine höhere Flexibilität
ermöglicht, indem die Elemente in effizienter Weise umgeordnet werden
können. Dafür ist ein schneller Zugriff auf ein Element über den
Positionsindex nicht möglich.

Jedes Element der einfach verketteten Liste enthält neben dem
eigentlichen Wert die Speicheradresse des nächsten Listenelements. Die
Speicheradresse nennt man in der C / C++ Welt auch Zeiger. Der "Zeiger"
ist damit die Verknüpfung oder das Bindeglied innerhalb der Liste, durch
den jedes Element das nächste Element kennt.

Ein Element ist somit ein Knoten ("Node"), welches durch Verkettung bzw.
Verknüpfung auf den nächsten Knoten verweist ("next").

![Notation einfach verkettete Liste, Quelle: CrunchifyCode](media4/image1.png){width="80%"}

Neben der einfach verketteten Liste gibt es auch doppelt verkettete
Listen. Die Nodes der doppelt verketteten Liste enthalten neben der
Zeigeradresse des Nachfolgeelements auch eine Zeigeradresse auf das
Vorgängerelement.

###Implementierung

In einer objektorientierten Sprache ist die Implementierung von verketteten Listen nicht
sehr schwierig.

**Die Node-Klasse**

Wir beginnen mit dem Node-Object als innere Klasse, welche die
Knotenabstraktion definiert:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
private class Node{
	Item item;
	Node next;
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Ein `Node`-Objekt besitzt zwei Instanzvariablen: eine vom abstrakten Typ
`Item` (ein parametrisierter Typ, den Sie selber bestimmen können) und
eine weitere Instanzvariable vom Typ `Node` selbst. Eine Datenstruktur,
die sich selbst als Variable enthält, nennt man rekursive
Datenstruktur.

Wir definieren `Node` direkt innerhalb der Klasse, in der wir sie
verwenden wollen, und zwar als *private*, da Clients keinen Zugriff
darauf erhalten sollen.

**Beispiel für die innere Klasse:**

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
private class Node{
	//these are private
	private Object item;
	private Node next;
	
	//constructor
	public Node (Object value){
		next = null;
		item = value;
	}
	
	//another constructor
	public Node(Object value, Node nextValue){
		next = nextValue;
		item = value;
	}
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Die Instanzvariable `item` wird in unserem Beispiel als `Object`
Datentyp deklariert und kann damit alle von Object abgeleiteten
Datentypen aufnehmen (also `int, double, String`,...).

Der Basis-Konstruktor setzt das nächste Element auf *null*, weil es nur
das aktuelle Element initialisiert. Die Klasse `Node` hat natürlich auch
`set`- und `get`-Methoden, um auf die Daten zugreifen zu können. `Node`
benötigt keine weiteren Methoden, da es sich um eine reine Datenstruktur
handelt.

## Die MyLinkedList - Klasse

Ausserhalb der inneren Klasse implementieren wir die eigentliche Klasse
`MyLinkedList`, in welcher die Node-Objekte verkettet werden:

~~~~~~~~~~~~~~~~~~~~~~~
public class MyLinkedList {
	private Node head; //reference to the head node
	private int listCount; //counter used for looping

	//constructor
	public MyLinkedList(){
		//when initialised it's an empty list, so the reference to the
		//head node is set to a new node with no data:
		head = new Node(null);
		listCount = 0;
	}
…
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Ganz wichtig ist, dass im Konstruktor eine Liste mit einem Element
erstellt wird. Wir verwenden dabei das vorderste Element (`head`). Das
vorderste Element hat noch keinen Verweis auf ein Nächstes, deshalb
setzen wir den Knoten next auf null.

###Elemente hinzufügen:

Prinzip: ein neues Element wird ans Ende der Liste gestellt. Also muss
jeweils von `head` ausgehend zunächst das Ende der Liste gesucht werden.

Innerhalb der MyLinkedListKlasse:

~~~~~~~~~~~~~~~~~~~~
public void append(Object value){
	Node newElement = new Node(value);
	Node current = this.head; //set current to head (start) of
the list
	//make sure to add at the end of the list, loop through the elements:
	while (current.getNext() != null){
		current = current.getNext();
	}
	//add the new element to the end of the list:
	current.setNext(newElement);
	
	//increment list counter:
	listCount++;
}
~~~~~~~~~~~~~~~~~~~~~~

Wichtig sind die letzten 4 Zeilen. Das aktuelle Element `current` (dh.
das letzte) zeigt neu auf ein weiteres Element. Das wird somit zum neuen
letzten Element. Zudem muss der Listen-interne Zähler inkrementiert
werden.

```include
skript2a_ueb01_vk.md
```

## Verkettete Liste vs. Array

Ein grosser Vorteil der verketteten Liste ist die dynamische Grösse. Die
Anzahl Elemente müssen nicht fix definiert sein. Anderseits ist der
Zugriff in einer verketteten Liste viel mühsamer als in einem Array. In
einem Array können wir jederzeit via Index direkt auf ein Element
zugreifen. In der verketteten Liste müssen wir die Liste bis zum
gewünschten Element durchschreiten.


```include
skript2a_ueb02_adv_vk.md
```

## Wiederholungsfragen (TODO){#wdh_vk}

* TODO!