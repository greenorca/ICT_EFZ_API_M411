Elementare Algorithmen und Laufzeit-Analysen
=============================================

**Lernziele:**

* Sie kennen grundlegende Sortier-Algorithmen
* Sie visualisieren Algorithmen mit Struktogrammen oder PAP
* Sie kennen die Grundelemente von Algorithmen und deren Umsetzung in einer Programmiersprache.
* Sie implementieren einen Sortier-Algorithmus
* Sie kennen Laufzeit-Komplexitätsklassen von Algorithmen
* Sie schätzen die Laufzeitkomplexität eines Algorithmus ab.


Der Bubble-Sort Algorithmus
-------------------------------------------------
Das Sortieren gehört zu den Standard-Abläufen in der Informatik und
reicht von simplen Datensätzen zu grossen Datenvolumen. Es gibt sehr
viele Sortier-Algorithmen. Den Klassiker *BubbleSort* werden wir hier näher betrachten:

![Quelle:
[*http://www.tinohempel.de/info/info/ti/bubblesort.htm*](http://www.tinohempel.de/info/info/ti/bubblesort.htm)](media/pap_bsort.png){width="80%"}


In jedem Durchgang wird das Feld (bzw. Array) von links nach rechts
durchlaufen. Dabei wird in jedem Schritt das aktuelle Element `feld[j]`
mit dem rechten Nachbarn `feld[j+1]` verglichen. Bei *aufsteigender*
Sortierung werden die beiden Werte getauscht, wenn `feld[j] > feld[j+1]`. 
Am Ende des ersten Durchganges steht garantiert das grösste Element am Ende der
Liste, am Ende des zweiten Durchgangs das zweitgrösste an vorletzter Stelle usw.

Die Durchgänge werden solange wiederholt, bis die Eingabeliste
vollständig sortiert ist. Dabei muss das letzte Element des vorherigen
Durchlaufs nicht mehr betrachtet werden, da die restliche zu sortierende
Eingabe keine größeren bzw. kleineren Elemente mehr enthält. Die
Elemente bewegen sich also wie Blasen („Bubbles“) in einem Wasserglass
nach oben (bzw. hinten), bis alle Blasen ihren Platz gefunden haben.

### Bubble-Sort manuell durchspielen

Bevor wir den Algorithmus in Code umsetzen, werden wir diesen
Algorithmus manuell durchspielen. Dazu brauchen Sie Papierschnitzel mit
den unten stehenden Zahlen:

<table border = 1>
<tr>
<th>51</th><th>13</th><th> 9</th><th> 44</th><th> 18</th><th> 93</th><th> 25</th>
</tr>
</table>

Schreiben Sie diese Zahlen auf Notizpapier auf und zerschneiden Sie es.
Dann ordnen Sie die Zahlenschnipsel wie oben angegeben an. Sortieren Sie
nun die Schnipsel mit dem Bubble-Sort-Algorithmus und schreiben Sie die
Ergebnisse aller Durchgänge auf. Wie viele Tauschvorgänge und Durchgänge
werden benötigt?

<table width="100%" border = 1>
<tr>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
</tr>

</table>

Wie Sie vermutlich gemerkt haben, genügen $n$ Durchgänge. Mit jedem
Durchgang landet mindestens eine der Zahlen an seinem definitiven Platz. Tatsächlich genügen sogar $n-1$ Durchgänge, weil die letzte Zahl keinen Nachbar mehr hat, mit dem sie vertauscht werden könnte.

## Laufzeitanalyse

### Anzahl Vergleichsoperationen

In einer Liste mit $n$ Zahlen existieren $n-1$ Paare von benachbarten
Zahlen, die bei einem Durchgang verglichen werden müssen. Und wir haben
höchstens $n$ Durchgänge. Somit sind maximal $n \cdot (n-1)$ Vergleichsoperationen
 nötig. Ausmultipliziert ergibt das $n^2-n$ Vergeichsoperationen. Da $n^2$ schneller wächst als $n$ können wir sagen, dass es ungefähr $n^2$ Vergleichsoperationen für eine Liste mit $n$ Elementen gibt. Man spricht hier von **quadratischer Komplexität**.

### Aufwand im besten und im schlechtesten Fall

Wenn die Liste bereits sortiert ist, vergleicht der Algorithmus alle
$n-1$ benachbarten Zahlenpaare einmal und stellt fest, dass es nichts zu
tun gibt. Damit ist er fertig und es werden keine Zahlen vertauscht. Das
ist der beste und schnellste Fall und benötigt $n-1$ Vergleiche und 0
Vertauschungen.


```include
skript1d_ueb01_bsort_laufzeit.md
```


### Komplexitätsklassen von Algorithmen

Die Berechenbarkeit eines Algorithmus ist ein sehr wichtiges Kriterium
für dessen Eignung in der Programmierung. Stellen Sie sich vor, Sie
haben einen dreifach verschachtelten Algorithmus zur Problemlösung in
einer kurzen Datenstruktur gefunden. Was nützt dieser Algorithmus, wenn
er das gleiche Problem mit einer sehr langen Datenstruktur erst in
mehreren hundert Jahren lösen kann?

Vereinfacht kann die Rechenzeit eines Algorithmus wie folgt berechnet
werden:

Man multipliziert man die Anzahl der Rechenschritte der innersten
Schleife mit dem Rechenaufwand des Schleifenkopfes, und multipliziert
diesen Wert mit dem Rechenaufwand der umschliessenden Schleife.

Was für die Komplexität der Rechenzeit zutrifft, gilt auch für die
Speicherkomplexität. Je mehr Variablen in den inneren Schleifen
zwischengespeichert werden, desto mehr Arbeitsspeicher wird der
Algorithmus zur Laufzeit benötigen.

Die folgende Tabelle illustriert die wichtigsten Komplexitätsklassen von
Algorithmen.

**f(n)**                         **f(10)**   **f(100)**   **f(1000)**   **f(10000)**
---------------- --------------- ----------- ------------ ------------- --------------
1                konstant        1           1            1             1
log~2~(n)        logarithmisch   3           7            10            13
n                linear          10          100          1000          10^4^
n \* log~2~(n)                   30          700          10^4^         13 \* 10^4^
n^2^             quadratisch     100         10^4^        10^6^         10^8^
n^3^             kubisch         1000        10^6^        10^9^         10^12^
2^n^             exponentiell    1000        10^30^       10^300^       10^3000^

Komplexitätsklassen und Beispiele, nach M.Wirsing; LMU
München 2008

```include
skript1d_ueb02_laufzeitanalyse.md
skript1d_ueb03_bsort_strings.md
skript1d_ueb04_adv_qsort.md
```

## Wiederholungsfragen {#wdh_funkomplex}

* Wie funktioniert der BubbleSort-Algorithmus?
* Welche Laufzeit-Komplexitätsklassen gibt es? Sortieren Sie diese nach Performanz absteigend.
* Wie bestimmen Sie die Laufzeit einr Methode?

