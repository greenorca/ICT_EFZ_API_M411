<!--
# Requirements:
PATH=$HOME/.cabal/bin:$PATH
## numbering for figures (https://github.com/tomduck/pandoc-fignos#installation) 
pip3 install --upgrade pandoc-fignos

#BULK convert from DOCX with image export in separate directories
n=1
for x in skript*.docx; do 
mkdir media$n
pandoc -s $x -t markdown -o markdownX/$x.md --extract-media=media$n
n=$((n+1))
done
# move the pics from export to markdown directory
for i in `seq 2 10`; 
	do mkdir media$i
	cp ../media$i/media/* media$i/
done

# prepend sone string to file
echo "text"|cat - yourfile > /tmp/out && mv /tmp/out yourfile

# MD -> HTML
pandoc -s skript1ab_ersteSchritte.docx.md -o M411_book.html -t html5 --toc --toc-depth 2 --filter pandoc-include -c buttondown.css -N --section -s --mathml --self-contained --filter pandoc-fignos; cp M411_book.html ~/Desktop/WISS/Modul_411/IFZ_524_ZH/m411_skript/


pandoc -s skrip*ueb*.md -o M411_toolbox.html -t html5 --toc --toc-depth 2 --filter pandoc-include -c buttondown.css --section -s --mathml


# -s: Header (Title, etc)
# -section: put chapters in <section> elements
-->

<!-----
pandoc_title_block
%title:'This is the title: it contains a colon'
%author:
%- name: Author One
  affiliation: University of Somewhere
%- name: Author Two
  affiliation: University of Nowhere
-->
---
subtitle: Datenstrukturen und Algorithmen
title: Modul 411
---

<article>

# Willkommen (zurück) bei in Java

In der Informatiker-Welt läuft nichts ohne Datenstrukturen und Algorithmen. Eine einfache Bitmap-Datei beispielsweise besteht aus einer (meist) dreidimensionalen Tabelle bzw. Feld. Unkomprimierte Audio-Dateien enthalten ebenfalls Felder. In diesem Modul lernen Sie verschiedene komplexe Datenstrukturen und deren grundlegende Eigenschaften kennen. Mit diesem Wissen können Sie wichtige Entscheidungen für Ihre eigenen Software-Projekte treffen.

In diesem Modul werden wir mit der Programmiersprache Java SE 8 arbeiten. Vorausgesetzt werden gute Kenntnisse aus den Modulen 403 (Prozedurale Programmierung) und 226A+B (Objektorientierte Programmierung). Sie können frei wählen, mit welcher Entwicklungsumgebung Sie arbeiten. Zur Abschlussprüfung werden Sie jedoch Eclipse einsetzen.

Zur Verwaltung der Datenstrukturen werden spezielle Funktionen bzw. Algorithmen benötigt. Wichtige Beispiele sind Such- und Sortier-Algorithmen. Wie immer in der Informatik gibt es verschiedene Wege, solche Algorithmen zu programmieren, und entsprechend kann die Laufzeit stark variieren. Sie lernen, einfache Sortier-Algorithmen selbst zu implementieren und deren Rechenzeit abzuschätzen.

Die meisten Programmiersprachen liefern häufig benötigte Datenstrukturen und die dazugehörigen Algorithmen gleich mit. Damit wird der Aufwand für die Implementierung und das Testen in der Software-Entwicklung massiv reduziert. In der Programmiersprache Java sind diese Datenstrukturen im Paket `java.utils` implementiert.

Abschliessend werden wichtige moderne Datenstrukturen und dafür benötigte Methoden vorgestellt. Sie kommunizieren mit Web-Services und lernen die wichtigsten Datenformate des Internets und deren Auswertefunktionen kennen.

## Wichtige Hinweise für Lernende

Programmieren lernt man nicht nur vom Zuhören, sondern insbesondere vom selbstständigen (und häufigen) Ausprobieren, Anwenden. Fehler machen gehört dazu, aus denen lernen Sie am meisten. Ihren Erfolg können Sie sichern, indem Sie alle Übungsaufgaben zuhause selbstständig nach den entsprechenden Lektionen bearbeiten. Übung macht den Meister!

Die Aufgaben sind normalerweise für Konsolen-Anwendungen gestellt, weil diese schneller zu erstellen sind. Insbesondere die erstellten Klassen späterer Aufgaben können Sie leicht in eigene *SWING* oder *Java-FX* GUIs einbinden.  

Dokumentieren Sie Ihren Quellcode von Anfang an JavaDoc-kompatibel, wie im Beispiel beschrieben. Damit haben Sie später eine Chance, Ihre brillanten Ideen wieder zu verstehen :-)

```java
/** 
	Genius provides the answer to the question of Life, the Universe and everything 
*/
public class Genius{

	/**
	 * answers a question.
	 * @param question is the query
	 * @return the answer to the question of Life, the Universe and everything
	 */
	public int answerQuestion(String question){
		return 42;	
	}
}
```

## Handlungsziele nach ICT-Vorgaben (BiVo 2014)

1. **Für ein gegebenes Problem eine geeignete Datenstruktur definieren und mit den Mitteln einer Programmiersprache, wie Structs, Referenzen / Zeiger und Arrays umsetzen.** 	
  + Kennt den Unterschied zwischen Wertevariablen und Referenzvariablen / Zeigervariablen.
  + Kennt Sprachmittel einer Programmiersprache für das Deklarieren und das Arbeiten mit Werte- und Referenzvariablen.
  + Kennt Konzept und Nutzen von verketteten Datenstrukturen.
  + Kennt eine Notation für die Darstellung von verketteten Datenstrukturen.
		<hr/>
2. **Ein Problem analysieren und einen geeigneten Algorithmus zur Lösung mit den Grundelementen Zuweisung, Verzweigung und Schleife entwerfen und mit Prozeduren und Funktionen umsetzen.**
  + Kennt eine systematische Vorgehensweise für die Analyse eines Problems.
  + Kennt die Grundelemente von Algorithmen und deren Umsetzung in einer Programmiersprache.
  + Kennt die Sprachmittel einer Programmiersprache für das Deklarieren und Aufrufen von Funktionen und Prozeduren.
  + Kennt Notationen um Algorithmen darzustellen wie z.B. Struktogrammen, PAP usw.
    	<hr/>
3. **Algorithmen und Datenstrukturen hinsichtlich Speicher- und Zeitkomplexität analysieren und dokumentieren.** 	
  + Kennt Möglichkeiten zur Analyse von Zeit- und Speicherkomplexität von Algorithmen und Datenstrukturen.
  + Kennt Komplexitätsklassen von Algorithmen (z.B. lineare, exponentielle Komplexität).
  + Kennt Notationen zur Dokumentation der Speicher- und Zeitkomplexität eines Algorithmus.
    	<hr/> 
4. **Ein komplexeres Problem auf kleinere Teilprobleme zurückführen und je nach Problemstellung Iteration oder Rekursion einsetzen.** 	
  + Kennt ein Vorgehen bei der Aufteilung eines komplexen Problems in kleinere Teilprobleme.
  + Kennt den Aufbau von iterativen Algorithmen.
  + Kennt den Aufbau von rekursiven Algorithmen.
  + Kennt Vor- und Nachteile sowie geeignete Einsatzgebiete des iterativen und des rekursiven Ansatzes.
    	<hr/>
5. **Abstrakte Datentypen, wie Liste, Set, Map etc. und die darauf definierten Operationen kennen und zielgerichtet einsetzen können.** 	
  + Kennt eine Programmbibliothek, die ADTs wie Liste, Set, Map, etc. zur Verfügung stellt und deren Anwendung.
  + Kennt Eigenschaften von einzelnen abstrakten Datentypen.
    	<hr/> 
6. **Datenstrukturen und Algorithmen mit dem Debugger und weiteren Tools untersuchen und dabei speziell die Situation auf Stack und Heap Analysieren und in geeigneter Form darstellen.** 	
  + Kennt das Speicherlayout für einen Prozess mit den Bereichen Programmcode, globale Variablen, Stack und Heap.
  + Kennt die Anordnung von lokalen Variablen und Parametern in einem Stackframe.
  + Kennt die Funktionsweise des Stacks bei einem Funktionsaufruf.
  + Kennt die Funktionsweise im Heap bei dynamisch erzeugten Objekten.
  + Kennt die Anwendung eines Debuggers für die Untersuchung von Heap und Stack zur Laufzeit und/oder ein Tool zur Laufzeitanalyse für Grössen wie Memory Leaks, Aufrufhäufigkeit und Verweildauer von Funktionen, etc.
<hr/>

Kursablauf
----------

Die 40 zur Verfügung stehenden Lektionen können wie folgt aufgeteilt werden:

| Block				  | Thema                                                |
|:--------------------|:-----------------------------------------------------|
|**Lektion 1 -4**     | - einfache Klassen; main Methode                     |
|                     | - Eingabe-/Ausgabe für Konsole und Dateien           |
|**Lektion 5 – 10**   | - Arrays                                             |
|                     | - Sortier-Algorithmen                                |
|                     | - Laufzeitkomplexität                                |
|**Lektion 11 – 16**  | - Verkettete Liste                                   |
|                     | - Iteratoren, Template-Klassen                       |
|**Lektion 17 – 20**  | - Stack, Queue                                       |
|                     | - Java Collections und HashMaps                      |
|                     | - HashMaps                                           |
|**Lektion 21 – 24**  | - Miniprojekt                                        |
|**Lektion 25 – 32**  | - Rekursion (Übung SnippetSearch)                    |
|**Lektion 33 – 36**  | - JSON mit Web-Services                              |
|                     | - optional XML                                       |
|**Lektion 37 – 40**  | - LB                                                 |
|                     | - Review Modul                                       |


## Hinweis für Verbesserungen

Für Hinweise und Verbesserungsvorschläge besuchen Sie bitte das entsprechende Github-Projekt unter [https://github.com/greenorca/ICT_EFZ_API_M411](https://github.com/greenorca/ICT_EFZ_API_M411).

Die Lösungsskripte werden nur für Dozenten zur Verfügung gestellt. 


# Klassen erstellen

## Lernziele

* Sie erstellen einfache Java-Klassen Ihrer vertrauten Entwicklungsumgebung
* Sie lesen Daten von der Konsole ein und geben Daten auf der Konsole aus
* Sie können verschiedene Datenformate von Textdateien einlesen und schreiben

## Die main-Methode

Hier ist der Code einer kleinen Java-Klasse, welche zum Begrüssen verschiedener Personen verwendet werden kann:

```java
public class WelcomeMessage{

	public void sayHello(String name){
		System.out.println("Welcome "+ name);
	} 
	public static void main(String[] args){
		WelcomeMessage msg = new WelcomeMessage();
		msg.sayHello("Tom");
		msg.sayHello("Mirjam");
	}
}
```

Ein Java-Programm wird immer so ausgeführt, dass die main-Methode einer bestimmten Klasse aufgerufen wird. Diese muss genau so deklariert sein, wie Sie der ersten Zeile sehen. In der main-Methode (ein neuer Name für Funktion) wird dann üblicherweise ein Objekt erzeugt, in unserem Beispiel in Zeile 7. Von diesem Objekt werden dann Methoden aufgerufen, z.B. Zeile 8 und 9.

```include
skript1ab_ueb01_javaide.md
```


# Ein- und Ausgabe über die Konsole

## Ausgabe

Im obigen kleinen Beispiel haben Sie schon gesehen, wie Text auf der
Konsole ausgegeben werden kann, nämlich mit der Methode
`System.out.println`. Vielleicht ist Ihnen auch aufgefallen, wie Texte
einfach mit `+` zusammengesetzt werden. Das Gleiche gilt auch für
Zahlenwerte, wie das folgende Beispiel zeigt:

```java
int a = 5;
int b = 6;

System.out.println("Die Summe von " + a + " und " + b + " ist " + (a+b));
```

Wie sieht die Ausgabe aus, wenn Sie beim Ausdruck `(a+b)` die Klammern
weglassen? Probieren Sie das aus und erklären Sie Ihre Beobachtungen.

## Eingabe

Um Texte oder Zahlen von der Konsole einzulesen, müssen wir ein Objekt
der Klasse `Scanner` (das ist eine Klasse aus der Standard Java-Library)
erzeugen. Dieses Objekt gibt uns dann auf Aufforderung hin den nächsten
Text oder die nächste Zahl:

```java
Scanner scan = new Scanner(System.in);
int a = scan.nextInt();
String s = scan.next();
```

```include
skript1ab_ueb02_scanner.md
```

Quelle: BBW Unterlagen, St.Dütsch. August 2015

# Strukturiere Daten lesen und schreiben

## Lernziele {#lernziele_file_io}

* Sie können in einem Programm aus einem File Daten lesen
* Strukturierte Textzeilen zerlegen und diese in geeignete Datenobjekte abfüllen
* Ausgaben in Textfiles durch Formatierung strukturieren

## BufferedReader

Wir werden uns hier zunächst nur mit Text Files beschäftigen, welche
eine `Zeilenstruktur` aufweisen, in denen also Informationseinheiten
durch einen Zeilenumbruch voneinander getrennt sind.

Die Klasse `BufferedReader` aus der `Java Library` stellt die Methode
`readLine()` mit dem Rückgabetyp String zur Verfügung.

Diese Methode liefert immer jeweils die nächste ungelesene Zeile von der
aktuellen Quelle des Readers. Wenn keine Zeilen mehr vorhanden sind gibt
readLine den Wert null zurück. 

Nehmen Sie an, Sie haben in der
Variablen `br` ein `BufferedReader`-Objekt. Wie könnte eine Schleife
aussehen, welche alle Zeilen einliest und auf der Konsole ausgibt?

### Erstellen eines BufferedReader

Zum Instantiieren eines `BufferedReader`-Objekts müssen wir im Konstruktor angeben, von
welcher Quelle gelesen werden soll. In unserem Fall sollen Text-Dateien gelesen werden. Entsprechend ist die Quelle ein `FileReader`-Objekt. Der Konstruktor der `FileReader`-Klasse erfordert den Pfad zum zu lesenden File als String. Mit der Instanz des `FileReader` als Parameter erstellen wir zunächst eine `BufferedReader` Instanz.

```java
String fileName = "C:\tmp\daten.csv";

try{
	FileReader fr = new FileReader(fileName);
	BufferedReader br = new BufferedReader(fr);
	//....
}
catch(FileNotFoundException ioex){ 
	System.out.println("Datei "+fileName+" not found"); 
}
```

Die Verwendung des `FileReader` kann zu Ausnahmesituationen (`Exceptions`) führen, wenn die angegebene Datei nicht lesbar ist. Setzen Sie Ihren Code entsprechende in einen `try-catch`-Block (zu Exceptions ausführlich mehr später). 


### BufferedReader oder Scanner?

Neben dem `BufferedReader` kann man auch die `Scanner` Klasse verwenden.
Die Effizienz beim Einlesen von einem File ist ungefähr dieselbe. Die
Scanner-Klasse bietet weitere Methoden, um das Parsen (das
„Strukturieren“ eines Input-Streams) besser zu bewältigen. Jedoch ist
Scanner nicht „thread safe“. Das heisst, gleichzeitige Dateizugriffe müssen von aussen vermieden werden.

Die Scanner-Klasse eignet sich hervorragend, um Benutzer-Eingaben via
Konsole einzulesen. Siehe auch die InputReader Klasse. Sie können
gerne beide Varianten für das Einlesen von Files ausprobieren.

Die Unterschiede beim Einlesen einzelner Zeilen aus Text-Dateien sind:
<table>
<tr><th>Scanner</th><th>BufferedReader</th></tr>
<tr>
<td>

```java
Scanner input = null;
try {
 File f = new File("C:/tmp/1.csv");
 input = new Scanner(file);
 while (input.hasNextLine()) {
  String line = input.nextLine();
  System.out.println(line);
 }
 input.close();
} 
catch (Exception ex) {
 ex.printStackTrace(); 
} 
```
</td>

<td>

```java
BufferedReader bfr = null;
try {
 String inputLine;
 String file = "C:/tmp/daten.csv";
 FileReader fr = new FileReader(file);
 bfr = new BufferedReader(fr);

 while ((inputLine = bfr.readLine()) != null) {
   System.out.println(inputLine);
 }
	
} 
catch (IOException e) {
   e.printStackTrace();
} 
finally {
 try {
  if (bfr != null) {
	   bfr.close();
  }
 } 
 catch (IOException ex) {
   ex.printStackTrace();
 }
}
```
</td>
</tr>
</table>

Zum Erstellen einer `Scanner` Instanz verwenden Sie ein `File`-Objekt.
Der Konstruktor von `BufferedReader` verwendet einen `FileReader`. Bei beiden Varianten
wird das File zeilenweise in je ein `String`-Objekt eingelesen. 

Beiden Varianten beenden das Lesen mit der Methode `close()`, um
den Dateizugriff wieder freizugeben und den Eingabestrom zu schliessen.

Beachten Sie, dass die Objekte `input` und `bfr` bereits vor dem `try`-Block angelegt werden und damit die Sichtbarkeit dieser Objekte ausserhalb des `try` sicherzustellen.

## Strukturierte Textfiles

Oft werden Daten strukturiert in lesbaren Text-Dateien abgelegt. So können zum
Beispiel Excel-Tabellen oder Datenbank-Abfragen im CSV-Format gespeichert werden, so dass jede
Zeile der Tabelle eine Zeile im Text File ergibt. Innerhalb der Zeilen
sind die Spalten durch ein spezielles Trennzeichen getrennt (CSV steht
für *Comma Separated Values*). Ausser dem Komma sind das Semikolon oder
ein Tabulator gebräuchliche Trennzeichen.

Eine CSV Datei mit Personendaten kann beispielsweise so aussehen:

```
Huber;Peter;1955
Meier;Irene;1960
Muster;Anna;1974
```

Nach dem Auslesen einer Zeile wird der String, welcher eine Zeile enthält, mit der `lineSplit()`
Methode zerlegt. 

```java
String line = "Huber;Peter;1955";	     // contains one line which must be processed
String[] lineParts = line.split(";");    // split line at occurences of semicolon
// loop over all parts of the line
for (String p: lineParts ) {
	System.out.println(p);
}
```

### Nummerische Werte behandeln

Auch Zahlen (im Beispiel das Geburtsjahr) werden zunächst als String
eingelesen, wie alle anderen Zeichenketten auch. Solange wir damit nicht
rechnen wollen, spielt das auch keine Rolle. Meistens ist aber nötig, diese Felder in richtig Zahlen umzuwandeln.
Dazu dienen die entsprechenden `parse`-Methoden der Klassen `Integer` und `Double`:

```java
String x = "42";
String y = "3.14";
int intVal = Integer.parseInt(x);
double doubleVal = Double.parseDouble(doubleStr);
```

```include
skript1ab_ueb03_csvread.md
```

## Daten strukturiert in ein File schreiben

Die geeignetste Klasse zum Schreiben von Textdateien ist `PrintWriter`.
Einem neuen `PrintWriter-Objekt` wird beim Erstellen ein
String mit dem Pfad und Dateinamen oder ein `File`-Objekt übergeben. Das Objekt stellt die Methode `write` zur Verfügung. Diese ähnelt der Klasse `PrintStream`, mit der Sie
beispielsweise bei `System.out.println` arbeiten.

```java
public static void main(String[] args) {
	try {
		PrintWriter prnt = new PrintWriter("/tmp/gugus.txt");	
		String[] names = {"Alpha","Beta","Gaga"};
		int i = 0;
		for (String n : names){
			prnt.write(""+i+";"+n+System.lineSeparator());
			i++;
		}
		prnt.close();
	} catch (IOException e) {
		e.printStackTrace();
	}
}
```

```include
skript1ab_ueb04_csvwrite.md
```


## Wiederholungsfragen {#wdh_intro}

1. Welche Methode einer Klasse wird beim Start des Programms zuerst aufgerufen?
2. Wie können Sie eine Anzahl Attribute für ein bestimmtes Objekt schon beim Erstellen übergeben?
3. Welche Klassen helfen Ihnen, Konsoleneingaben und Textdateien zu lesen?
4. Wie transformieren Sie `String x = 42;` als Ganzzahl oder Gleitkomma-Zahlenwert?

[Zurück zum Inhaltsverzeichnis](#TOC)

```include 
skript1c_arrays_anwenden.docx.md
```
[Zurück zum Inhaltsverzeichnis](#TOC)
```include 
skript1d_sortalgo_laufzeit.docx.md
```
[Zurück zum Inhaltsverzeichnis](#TOC)
```include 
skript2a_dynamischeStrukturen.docx.md
```
[Zurück zum Inhaltsverzeichnis](#TOC)
```include 
skript2b_dynamischeStrukturen.docx.md
```
[Zurück zum Inhaltsverzeichnis](#TOC)

```include 
skript2c_JavaCollections.docx.md
```
[Zurück zum Inhaltsverzeichnis](#TOC)
```include 
<!--skript2d_miniProjekt.docx.md-->
skript3_weitereDatenstrukturen.docx.md
```

[Zurück zum Inhaltsverzeichnis](#TOC)
```include 
<!--skript4b_Mandelbrot.docx.md-->
skript4_rekursionUndBacktracking.docx.md
```
[Zurück zum Inhaltsverzeichnis](#TOC)
</article>
