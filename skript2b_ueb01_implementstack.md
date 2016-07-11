##Übungen: Stack implementieren

**Lernziele**

* erstellen und benutzen Stack-Datenstruktur

**Zeit:** 45 Minuten

###Stack Klasse erstellen

Implementieren Sie Ihre `Stack` Klasse mit den `push` und `pop`
Methoden. Bei `push` wird ein Element zuoberst hinzugefügt. Bei `pop`
wird das aktuelle Element entfernt. Verwenden Sie wiederum Ihre *Node*
Klasse für die Datenstruktur.

###Stack testen und Elemente ausgeben

Schreiben Sie eine Methode `toString()`, welche die Elemente vom Stack
als String ausgibt. Mit dieser Methode können Sie auch Ihre
`Stack`-Klasse testen. Sie beginnen mit dem ersten Element (d.h. das
Element, welches zuoberst auf dem Stack ist). Ihre Iteration sieht so
aus:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
while (current != null){
	//add value to string:
	// TODO

	//get next Node
	current = current.next;

}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


###`isEmpty()`-Methode implementieren

Fügen Sie eine `isEmpty()`-Methode hinzu. Diese überprüft, ob es Elemente
im `Stack` hat. Die Methode gibt einen boolean zurück.

Zeigen Sie Ihre Lösungen der Lehrperson.

###Stack ergänzen

Ergänzen Sie `Stack` um eine Methode `peek()`, welche das zuletzt auf
dem Stapel gelegte Element zurückliefert ohne es zu entfernen.

###Palindrome prüfen

Verwenden Sie den `Stack` um zu überprüfen, ob ein String ein Palindrome
ist (d.h. Wort oder Satz ist dasselbe von vorne und von hinten). Mit
einem `Stack` lässt sich das einfach überprüfen. Erweitern Sie den Code,
so dass der Benutzer einen String eingeben kann.

Verwenden Sie für diese Lösung ihren eigenen `Stack`.
