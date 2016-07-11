<!--
PATH=$HOME/.cabal/bin:$PATH

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
pandoc -s skript1ab_ersteSchritte.docx.md -o markdown.html -t html5 --toc --toc-depth 3 --filter pandoc-include -c buttondown.css -N --section -s --mathml

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
author:
- Julian Kaeser
- Sven Schirmer
---

Willkommen (zurück) bei in Java
========================================

In der Informatiker-Welt läuft nichts ohne Datenstrukturen und Algorithmen. Eine einfache Bitmap-Datei beispielsweise besteht aus einer (meist) dreidimensionalen Tabelle bzw. Feld. Unkomprimierte Audio-Dateien enthalten ebenfalls Felder. In diesem Modul lernen Sie verschiedene komplexe Datenstrukturen und deren grundlegende Eigenschaften kennen. Mit diesem Wissen können Sie wichtige Entscheidungen für Ihre eigenen Software-Projekte treffen.

In diesem Modul werden wir mit der Programmiersprache Java SE 8 arbeiten. Vorausgesetzt werden gute Kenntnisse aus den Modulen 403 (Prozedurale Programmierung) und 226A+B (Objektorientierte Programmierung). Sie können frei wählen, mit welcher Entwicklungsumgebung Sie arbeiten. Bevorzugte Umgebungen sind Netbeans und Eclipse.

Zur Verwaltung der Datenstrukturen werden spezielle Funktionen bzw. Algorithmen benötigt. Wichtige Beispiele sind Such- und Sortieralgorithmen. Wie immer in der Informatik gibt es verschiedene Wege, solche Algorithmen zu programmieren, und entsprechend kann die Laufzeit stark variieren. Sie lernen, einfache Sortieralgorithmen selbst zu implementieren und
deren Rechenzeit abzuschätzen.

Die meisten Programmiersprachen liefern häufig benötigte Datenstrukturen und die dazugehörigen Algorithmen gleich mit. Damit wird der Aufwand für die Implementierung und das Testen in der Software-Entwicklung massiv
reduziert. In der Programmiersprache Java sind diese Datenstrukturen in der java.utils Bibliothek implementiert.

Abschliessend werden wichtige moderne Datenstrukturen und deren Methoden vorgestellt. Sie lernen in ersten Webapplikationsprogrammen die wichtigsten Datenformate des Internets und deren Auswertefunktionen kennen.

**Wichtiger Hinweis:** Programmieren lernt Sie nicht nur vom Zuhören, sondern vom selbstständigen (und häufigen) Anwenden. Ihren Erfolg können Sie nur sichern, indem Sie alle Übungsaufgaben zuhause selbstständig nach den entsprechenden Lektionen bearbeiten. Übung macht den Meister!

Klassen erstellen
====================

## Lernziele

* Sie erstellen einfache Java-Klassen Ihrer vertrauten Entwicklungsumgebung
* Sie lesen Daten von der Konsole ein und geben Daten auf der Konsole aus
* Sie können verschiedene Datenformate von Textdateien einlesen und schreiben

## Die main-Methode

Hier ist der Code einer kleinen Java-Klasse, welche zum Begrüssen verschiedener Personen verwendet werden kann:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Ein Java-Programm wird immer so ausgeführt, dass die main-Methode einer bestimmten Klasse aufgerufen wird. Diese muss genau so deklariert sein, wie Sie der ersten Zeile sehen. In der main-Methode (ein neuer Name für Funktion) wird dann üblicherweise ein Objekt erzeugt, in unserem Beispiel in Zeile 7. Von diesem Objekt werden dann Methoden aufgerufen, z.B. Zeile 8 und 9.

```include
skript1ab_ueb01_javaide.md
```


Ein- und Ausgabe über die Konsole
===================================

Ausgabe
-------------

Im obigen kleinen Beispiel haben Sie schon gesehen, wie Text auf der
Konsole ausgegeben werden kann, nämlich mit der Methode
`System.out.println`. Vielleicht ist Ihnen auch aufgefallen, wie Texte
einfach mit + zusammengesetzt werden. Das Gleiche gilt auch für
Zahlenwerte, wie das folgende Beispiel zeigt:

~~~~~~~~~~~~~
int a = 5;
int b = 6;

System.out.println("Die Summe von "+ a +" und "+ b +" ist "+(a+b));
~~~~~~~~~~~~~~

Wie sieht die Ausgabe aus, wenn Sie beim Ausdruck (a+b) die Klammern
weglassen? Probieren Sie das aus und erklären Sie Ihre Beobachtungen.

Eingabe
--------------------

Um Texte oder Zahlen von der Konsole einzulesen, müssen wir ein Objekt
der Klasse `Scanner` (das ist eine Klasse aus der Standard Java-Library)
erzeugen. Dieses Objekt gibt uns dann auf Aufforderung hin den nächsten
Text oder die nächste Zahl:

~~~~~~~~~~
Scanner scan = new Scanner(System.in);
int a = scan.nextInt();
String s = scan.next();
~~~~~~~~~~

```include
skript1ab_ueb02_scanner.md
```

Quelle: BBW Unterlagen, St.Dütsch. August 2015

Strukturiere Daten lesen und schreiben
======================================

Lernziele
----------------------

* Sie können in einem Programm aus einem File Daten lesen
* Strukturierte Textzeilen zerlegen und diese in geeignete Datenobjekte abfüllen
* Ausgaben in Textfiles durch Formatierung strukturieren

BufferedReader
-----------------------
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

Zum Instanziieren eines `BufferedReader`-Objekts müssen wir im Konstruktor angeben, von
welcher Quelle gelesen werden soll. In unserem Fall sollen Text-Dateien gelesen werden. Enstprechend ist die Quelle ein `FileReader`-Objekt. Der Konstruktor der `FileReader`-Klasse erfordert den Pfad zum zu lesenden File als String. Mit der Instanz des `FileReaders` als Parameter erstellen wir
zunächst eine `BufferedReader` Instanz.

~~~~~~~~~~~~~~
String fileName = "C:\tmp\daten.csv";

try{
	FileReader fr = new FileReader(fileName);
	BufferedReader br = new BufferedReader(fr);
	//....
}
catch(FileNotFoundException ioex){ 
	System.out.println("Datei "+fileName+" not found"); 
}
~~~~~~~~~~~~~~~

Die Verwendung des `FileReaders` kann zu Ausnahmesituationen (`Exceptions`) führen, wenn die angegebene Datei nicht lesbar ist. Setzen Sie Ihren Code entsprechende in einen `try-catch`-Block
(zu Exceptions ausführlich mehr später). 


### Buffered Reader oder Scanner?

Neben dem `BufferedReader` kann man auch die `Scanner` Klasse verwenden.
Die Effizienz beim Einlesen von einem File ist ungefähr dieselbe. Die
Scanner-Klasse bietet weitere Methoden, um das Parsen (das
„Strukturieren“ eines Input-Streams) besser zu bewältigen. Jedoch ist
Scanner nicht „thread safe“. Das heisst, gleichzeitige Dateizugriffe müssen von aussen vermieden werden.

Die Scanner-Klasse eignet sich hervorragend, um Benutzereingaben via
Konsole einzulesen. Siehe auch die InputReader Klasse. Sie können
gerne beide Varianten für das Einlesen von Files ausprobieren.

Die Unterschiede beim Einlesen einzelner Zeilen aus Text-Dateien sind:
<table>
<tr><th>Scanner</th><th>BufferedReader</th></tr>
<tr>
<td>
~~~~~~~~~~~~~~~~~~~~~~
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
~~~~~~~~~~~~~~~~~~~~~~
</td>

<td>
~~~~
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
~~~~~~
</td>
</tr>
</table>

Zum Erstellen einer `Scanner` Instanz verwenden Sie ein `File`-Objekt.
Der Konstruktor von `BufferedReader` verwendet einen `FileReader`. Bei beiden Varianten
wird das File zeilenweise in je eine String Objekt eingelesen. 

Beiden Varianten beenden das Lesen mit der Methode `close()`, um
den Dateizugriff wieder freizugeben und den Eingabestrom zu schliessen.

Beachten Sie, dass die Objekte `input` und `bfr` bereits vor dem `try`-Block angelegt werden und damit die Sichtbarkeit dieser Objekte ausserhalb des `try` sicherzustellen.

Strukturierte Textfiles
-----------------------------
Oft werden Daten strukturiert in lesbaren Text-Dateien abgelegt. So können zum
Beispiel Excel-Tabellen oder Datenbank-Abfragen im CSV-Format gespeichert werden, so dass jede
Zeile der Tabelle eine Zeile im Text File ergibt. Innerhalb der Zeilen
sind die Spalten durch ein spezielles Trennzeichen getrennt (CSV steht
für Comma Separated Values). Ausser dem Komma sind das Semikolon oder
ein Tabulator gebräuchliche Trennzeichen.

Eine CSV Datei mit Personendaten kann beispielsweise so aussehen:

`Huber;Peter;1955`<br>
`Meier;Irene;1960`<br>
`Muster;Anna;1974`

Nach dem Auslesen einer Zeile wird der String, welcher eine Zeile enthält, mit der `lineSplit()`
Methode zerlegt. 

~~~~~~~~~~~~~~~~~~~~
String line = "Huber;Peter;1955";	// contains one line which must be processed
String[] lineParts = line.split(";"); // split line at occurences of semicolon
// loop over all parts of the line
for (String p: lineParts ) {
	System.out.println(p);
}
~~~~~~~~~~~~~~~~~~~~


### Nummerische Werte behandeln

Auch Zahlen (im Beispiel das Geburtsjahr) werden zunächst als String
eingelesen, wie alle anderen Zeichenketten auch. Solange wir damit nicht
rechnen wollen, spielt das auch keine Rolle. Meistens ist aber nötig, diese Felder in richtig Zahlen umzuwandeln.
Dazu dienen die entsprechenden `Parse`-Methoden der Klassen `Integer` und `Double`:

~~~~~~~~~~~~~~~~
String x = "42";
String y = "3.14";
int intVal = Integer.parseInt(x);
double doubleVal = Double.parseDouble(doubleStr);
~~~~~~~~~~~~~~~~~

```include
skript1ab_ueb03_csvread.md
```


## Daten strukturiert in ein File schreiben

Die geeignetste Klasse zum Schreiben von Textdateien ist `PrintWriter`.
Ein PrintWriter kann erzeugt werden, indem man ihm beim Erstellen einen
String mit dem Pfad und Dateinamen oder ein `File`-Objekt übergibt.

Die Methoden sind dabei sehr ähnlich wie bei der Klasse `PrintStream`, mit der Sie
beispielsweise bei `System.out.println` arbeiten:

~~~~~~~~~~~
print //schreibt eine beliebige Zeichenkette ohne Zeilenumbruch
println //eine Zeile mit Zeilenumbruch
format
~~~~~~~~~~~~~~~~~~~~~

## Übung: CSV schreiben (todo überarbeiten)

Schreiben Sie eine Klasse „MyWriter“, welcher einen User-Input umgekehrt
in ein File schreibt.

Quelle: BBW Unterlagen, St.Dütsch. August 2015 (ergänzt und angepasst
durch J.Kaeser)

Wiederholungsfragen {#wdh_intro}
--------------------
1. Welche Methode einer Klasse wird beim Start des Programms zuerst aufgerufen?
2. Wie können Sie eine Anzahl Attribute für ein bestimmtes Objekt schon beim Erstellen übergeben?
3. Welche Klasse hilft Ihnen, Konsoleneingaben und Textdateien zu lesen?
4. Wie transformieren Sie `String x = 42;` als Ganzzahl oder Gleitkomma-Zahlenwert?


```include 
skript1c_arrays_anwenden.docx.md
skript1d_sortalgo_laufzeit.docx.md
skript2a_dynamischeStrukturen.docx.md
skript2b_dynamischeStrukturen.docx.md
skript2c_JavaCollections.docx.md
<!--skript2d_miniProjekt.docx.md-->
skript3_weitereDatenstrukturen.docx.md
<!--skript4b_Mandelbrot.docx.md-->
skript4_rekursionUndBacktracking.docx.md
```
<!--


-->