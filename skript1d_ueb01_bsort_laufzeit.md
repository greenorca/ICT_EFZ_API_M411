### Übung: BubbleSort implementieren und Laufzeit analysieren

**Lernziele**

* üben systematische Vorgehensweise für Problemanalyse.
* erstellen Algorithmen in einer Programmiersprache.
* kennt Möglichkeiten zur Analyse von Zeit- und Speicherkomplexität von Algorithmen und Datenstrukturen

**Zeit: ** 60 Minuten

Überlegen Sie sich die Effizienz (Anzahl Durchläufe und
Tauschoperationen) im schlechtesten Fall (d.h. wenn eine Liste
absteigend sortiert ist und aufsteigend sortiert werden soll).


1.  Implementieren Sie den Bubble-Sort als statische Funktion in eine neuen Klasse `MyBubbleSort`. Verwenden Sie ein eigenes kurzes int-Array und geben Sie dieses vor und nach dem Sortieren in der `main`-Funktion aus. Ist das Ergebnis korrekt?

2.  Wie viele Durchläufe gibt es, bis die Liste korrekt sortiert ist? Diese Frage können Sie nach unserem manuellen Beispiel einfach beantworten. 

3. Erweitern Sie Ihre Sortier-Funktion, um die Durchläufe und
Tauschoperationen zu zählen. Messen Sie zusätzlich die Dauer, wie lange
der Bubble-Sort hat. Verwenden Sie dabei die `System`-Klasse mit der
statischen Methode `currentTimeMillis()`. Testen Sie dann die in der
Tabelle angegebenen Szenarien und komplettieren Sie die Tabelle:

  **Elemente**   **Art der Werte**          **n Durchläufe**   **n Tauschoperationen**   **Rechenzeit**
  -------------- -------------------------- ------------------ ------------------------- ----------------
  1000           aufsteigende Reihenfolge                                                
  1000           zufällige Werte                                                         
  1000           absteigende Reihenfolge                                                 
  2000           aufsteigende Reihenfolge                                                
  2000           zufällige Werte                                                         
  2000           absteigende Reihenfolge                                                 
  4000           aufsteigende Reihenfolge                                                
  4000           zufällige Werte                                                         
  4000           absteigende Reihenfolge                                                 
  -------------- -------------------------- ------------------ ------------------------- ----------------

	
**Lösungsvorschlag:**
	
	`Skript1c_BSortPerformance.java`