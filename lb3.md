<!--
pandoc -s lb3.md -o M411_LB3.html -t html5 -c buttondown.css -N --section -s --mathml 
-->
---
title: Modul 411 - LB3
subtitle: Datenstrukturen und Algorithmen
---

**Allgemeine Informationen**

------------------------------- ------------------
Zeit   						                     120 Minuten

Punkte maximal													90

Punkte erreicht				

Note $=1+5*x_{err}/x_{max}$									

Hilfsmittel						           Moduljournal, Java-Hilfe

ICT - Handlungsziele                 2,4,5,6

Unterschrift 
Lernender
	 	
  
Unterschrift 
Prüfungsleitung  

------------------------------ ---------------


**Handlungsziele und Aufgaben**	

-- --------------------------------------------------------------------- -------- -------
Nr Handlungziel                                                          Aufgaben Punkte
-- --------------------------------------------------------------------- -------- -------
2	 Ein Problem analysieren und einen geeigneten Algorithmus zur Lösung    
	 mit den Grundelementen Zuweisung, Verzweigung und Schleife                
	 entwerfen und mit Prozeduren und Funktionen umsetzen.       
	              
4	 Ein komplexeres Problem auf kleinere Teilprobleme zurückführen und         
	 je nach Problemstellung Iteration oder Rekursion einsetzen.
	                 
5	 Abstrakte Datentypen, wie Liste, Set, Map etc. und die darauf          3        10  
	 definierten Operationen kennen und zielgerichtet einsetzen können.
	         
6	 Datenstrukturen und Algorithmen mit dem Debugger und weiteren Tools    1,2      20     
	 untersuchen und dabei speziell die Situation auf Stack und Heap            
	 analysieren und in geeigneter Form darstellen.                         
-- --------------------------------------------------------------------- -------- -------


Aufgabe: Theorie Datentypen
===========================

## Unterschied ArrayList vs. LinkedList (4 Punkte, 7 Minuten)
Beschreiben Sie in Stichpunkten die Unterschiede der Klassen ArrayList und LinkedList aus den `java.utils` hinsichtlich der Laufzeit beim Zugriff und beim Einfügen von neuen Elementen. 

------------- ---------------------- -----------------
              ArrayList              LinkedList
------------- ---------------------- -----------------
**Einfügen**  langsam, da Array u.U. kann dynamisch wachsen,
              umkopiert werden muss  einfügen relativ performant
             
**Zugriff**   sehr schnell, Grössen- für ein Element am Ende der
              unabhängig             Liste muss die gesamte Liste
                                     durchschritten werden 

------------- ---------------------- -----------------


## Abstrakte Datentypen (4 Punkte, 7 Minuten)

Unterstreichen Sie die ungültigen Code-Zeilen und begründen Sie kurz Ihre Entscheidung. 

* `ArrayList<Person> = new ArrayList<Person>(1000);`

* `LinkedList<Person> liste = new LinkedList<Person>();`  

* `List<int> luckyNumbers = new LinkedList<int>();

* `Map<String, String> myDict = new HashMap<String, String>(); 


Aufgabe: Iteration und Rekursion
================================

## Iteration in Rekursion umwandeln (10 Punkte, 10 Minuten)

Gegeben ist der folgende Code:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
public int cumSum(int x){
	if (x==1)
		return 1;
	return x+cumSum(x-1);
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Wandeln Sie die Funktion cumSum in eine Iteration um. Die Funktionalität soll erhalten bleiben.

## Programmstack (6 Punkte, 5 Minuten) 

Was versteht man unter dem Programmstack im Arbeitsspeicher? (2 Punkte)  

Beschreiben oder skizzieren Sie den Ablauf auf dem Programmstack, wenn obige Funktion mit `x=4` aufgerufen wird. (4 Punkte)


Aufgabe: Klassen-Design und Dateihandling
=========================================

- Klasse UNCountryCode erstellen (mit CTOR)
- Datenhaltung realisieren
- Datei einlesen
- 

Sie haben den Auftrag...


--------- ----------
Punkte	          10
Zeit		  10 Minuten
--------- ----------
