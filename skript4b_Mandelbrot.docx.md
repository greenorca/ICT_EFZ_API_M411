---
subtitle: Ein Leitprogramm zum Mandlbrot und zur Rekursion
title: |
    Modul 411:

    Datenstrukturen und Algorithmen
---

  ------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  > Gesamtdauer             > 105 Min. (+ca. 120 Min. für den optionalen Teil)

  > Form                    > Einzelarbeit

  > Bewertung               > Keine

  > Erlaubte Hilfen         Arbeite an diesem Programm, bis Du einem Problem begegnest. Versuche währen max. 5-10 Min. das Problem selber zu lösen (zum Bsp. mit dem Internet). Danach Frage jemanden aus der Klasse, der Dir gerne helfen möchte.
                            
                            > Wenn das nichts bringt oder weitere Zweifel bestehen, frage unbedingt den Dozenten nach Hinweisen und Bestätigungen für den Lösungsweg.

  > Kontrolle               > Selbstkontrolle der Teilschritte, durch Erfolgs- und Funktionstests oder Vergleich mit dem Nachbarn.

  > Abzugebende Dokumente   > Keine. Zeige das Ergebnis dem Dozenten kurz vor Ablauf der Zeit. Es werden keine Musterlösungen verteilt. Höchsten Hilfestellungen beim Steckenbleiben.
  ------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Geschulte Lernziele

1.  <span id="__DdeLink__2996_1159003439" class="anchor"></span>Du
    lernst zuerst, wie man **fremden Java Code** aus dem Internet auf
    Deiner Entwicklungsumgebung (hier Eclipse) **zum Laufen bringt**.
    Dabei lernst Du auch, wie man die Code-Qualität gleichzeitig
    verbessern kann.

2.  Danach lernst Du wie man eine **Rekursion** erkennt und
    auch programmiert. Zudem lernst Du das
    **Mandelbrot-Fraktal** kennen.

3.  Wenn Du effizient genug arbeitest (oder die entsprechenden
    Teilaufgaben zu Hause beendest), dann lernst Du noch, wie man ein
    (Java-)Programm **benutzerfreundlicher** macht und seine
    **Qualität** erhöht.

> Viel Spass!

 Fremden Java Code zum Laufe bringen
====================================

<span id="__DdeLink__2996_11590034391" class="anchor"></span>Für diese
Aufgabe wollen wir ein **Mandelbrot Java-Programm** aus dem Internet in
unsere Eclipse-Umgebung einlesen und kompilieren lassen.

a.  Die erste Schwierigkeit, ist den geeigneten Code zu finden. Dazu
    müssen wir die richtigen Suchwörter eingeben (s.o. Fett gerucktes)
    und wissen was wir genau suchen, denn oft besteht zuerst so etwas
    wie die Qual der Wahl. Wir eliminieren aber sofort Lösungen für
    Applets, da wir eine **Stand-Alone Lösung**, die Eclipse kompatibel
    ist, wollen und im Moment keine Lust auf diese Art von Anpassung von
    Applet auf Stand-Alone haben). Wir eliminieren auch alle Webseiten,
    die zwar gut klingen, aber leider nur Downloads von Class oder JAR
    Dateien anbieten (keine Lust auf das Reverse-Engineering, da zudem
    auch alle Kommentare fehlen werden). Schliesslich soll das Ganze mit
    einem schon installierten **GUI-Toolkit** (zum Bsp. SWT, AWT
    oder Swing) laufen. Bleibt also zur Auswahl zum Bsp. eine Webseite
    mit sehr wenig Text, auf der der Code nur mit Copy-Paste
    herunterkopiert und in Eclipse eingefügt werden muss.

b.  Offenbar lässt sich dieser Code nicht kompilieren. Er benötigt noch
    zwei **weitere Java-Klassen**. Die müssen auf der gleichen Weise
    heruntergeladen werden. Nach was suchst Du?

c.  Bleiben zwei Probleme. 1. im der main() Funktion gibt es
    ein Kompilierproblem. Versuche zu verstehen warum das so ist (was
    soll dieser Code?) und wie Du die Kompilation mit einem
    **Workaround** (Alternative Lösung) lösen willst.

d.  Bravo, Du kannst jetzt kompilieren. Bleibt aber leider das 2.
    Problem, dass Du hier 3 Werte eingeben musst. Der Programmierer hat
    leider vergessen eine Anleitung in den Kommentaren zu schreiben und
    auf der Webseite wird man auch nicht schlau, oder? Was tun? Wie
    finden wir heraus welche Werte, was bewirken diese Werte? Hast Du
    die Lösung und weisst Du jetzt was Sache ist? Dann schleunigst die
    Kommentare mit den Anweisungen und Erklärungen einfügen!

e.  Gratuliere! Du bekommst jetzt folgende Applikation mit folgendem
    Ergebnis zum Laufen:

    ![](media/image1.png){width="3.3409722222222222in"
    height="3.6666666666666665in"}

Man kann das Ergebnisbild sogar abspeichern!

Dir sind sicherlich schon ein paar Schwachstellen dieses Programms
aufgefallen. Insbesondere die Bedienungsfreundlichkeit lässt einiges zu
wünschen übrig! Da schauen uns wir weiter unten genauer an.

 Mit Rekursionen arbeiten
=========================

Mach zuerst eine **Kopie** des laufenden Projekts und arbeite mit der
Kopie.

a.  **Mandelbrot** Figuren sind Fraktale und diese programmiert man
    häufig und am elegantesten mit **Rekursionen**. Frage: ist oder
    obige Code eine Rekursion?

> □ JA □ NEIN

a.  Genau! Tue nun folgendes:

**Baue** den bisherigen Code in folgendem **Code** **um**:

**Bemerkung**: der Code ist rein statisch umgesetzt, d.h. alle Attribute
und Methoden der Hauptklasse sind als „static“ deklariert, viele
Variablen werden in der Klasse global als Eigenschaft angelegt und viele
Kommentare wurden weggelassen. Dies ist natürlich nicht die beste Art,
aber man hebt so auf den interessierenden Algorithmus hervor.

**public** **class** Mandelbrot {

**private** **static** **double** *size* = 5;

**private** **static** **double** *xc\_s2* = 0 - 5 / 2.0; // *xc*-size/2

**private** **static** **double** *yc\_s2* = 0 - 5 / 2.0; // *yc*-size/2

**private** **static** **int** *N* = 60; // NEU: 60 *satt* 512

**private** **static** Picture *pic*;

**private** **static** **int** *max* = 255;

**public** **static** **int** mand(Complex z0) {

Complex z = z0;

**for** (**int** t = 0; t &lt; *max*; t++) {

**if** (z.abs() &gt; 2.0) **return** t;

z = z.times(z).plus(z0);

}

**return** *max*;

}

**public** **static** **void** drawMand(**int** i, **int** j) {

**if** (j &lt; *N*) {

**if** (i &lt; *N*) {

Complex z0 = **new** Complex (*xc\_s2* + *size*\*i/*N*, *yc\_s2* +
*size*\*j/*N*);

**int** gray = *max* - *mand*(z0);

// System.out.println("C:"+gray+" /i:"+i+" /j:"+j); // debug

*pic*.set(i, *N*-1-j, **new** Color(gray, gray, gray));

*drawMand*(i, j+1);

}

} **else** **if** (i &lt; *N*) {

*drawMand*(i+1, 0);

}

}

**public** **static** **void** main(String\[\] args) {

*pic* = **new** Picture(*N*, *N*);

*drawMand*(0, 0);

*pic*.show();

}

}

Kannst Du diesen Code jetzt kompilieren und testen?

a.  Nachmals die Frage: ist der neue Code eine Rekursion?

> □ JA □ NEIN

Deine Antwort sollte jetzt genau das Gegenteil von deiner obigen Antwort
sein! Oder? Warum sollte Deine Antwort richtig sein? Tipp: schau im
Skript nach und begründe:

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Auf dem ersten Blick tun beide Codierungen mit/ohne Rekursion fast genau
das Gleiche (ist ja eigentlich auch das gleiche Vorgehen)! Wo liegen
aber genau die Unterschiede zwischen beiden Codierungen und gibt es
evtl. unterschiedliche Auswirkungen? Ein Unterschied wird schnell klar,
wenn Du beim zweiten Code N=512 setzt (wie beim ersten). Was passiert
genau (Fehlermeldung?) und warum? Wie hoch kann ich beim ersten Programm
mit N gehen?

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

 Bedienungsfreundlichkeit
=========================

Du hast sicher bemerkt, dass die Berechnungen des Mandelbrot-Fraktals
etwas dauern (vor allem ab einem 512x512 Bild). Der Benutzer könnte
glatt denken, das Mandelbrot-Programm ist abgestürzt. Zudem liefert das
Programm immer das gleiche Ergebnis, wenn der Benutzer gewisse Parameter
nicht selber auf komfortable Art wählen kann. Auch sind Fenster und
Dekoration nicht gerade ansprechend und informativ. Und hast Du mal
versucht das Bild abzuspeichern? Was ist mit dem Bildformat?

Folgende Schritte sind optional und sie sind Fach-(Modul-)übergreifend.
Sie breiten Dich auf Deine Praxis und weitere Module vor. Du kannst
diese Schritte oder ein paar davon auch später zu Hause erledigen. Lese
sie einmal durch, vielleicht bekommst Du Lust was anzupassen. Die Farne
(s.u.) sind übrigens auch sehr interessant.

Also legen wir mal los:

a.  Denke Dir eine einfache und eine etwas luxuriösere Lösung für das
    Warteproblem bei grossen Bilder aus. Welche Lösung traust Du Dir zu?
    Dann versuch es einfach mal hinzubekommen. Wo holst Du Dir die
    Hilfestellungen und den Beispielcode?

b.  Dasselbe Vorgehen für die Benutzereingaben. Welche Lösung soll es
    sein? Übernimm Dich nicht, denn je nachdem was Du dem Benutzer
    anbieten möchtest, wird das Ganze etwas aufwendig. Vielleicht sind
    Dir bei der anfänglichen Suche im Internet diverse Mandelbrote
    aufgefallen, die viel schöner als das obige sind. Zum Bsp. hier:

    [*http://www.hameister.org/projects\_fractal.html*](http://www.hameister.org/projects_fractal.html)

    Wenn Du das Ganze verstehen möchtest, damit Du dem Benutzer diverse
    Bilder anbieten kannst, dann musst Du Dich unweigerlich mit dem
    Thema fachlich auseinandersetzen und zudem must Du auch in Mathe
    sattelfest sein (das meiste verlangt Hochschulniveau). Also mach Dir
    auch keine Sorgen, wenn Du das noch nicht ganz verstehst. Es gibt
    auch etwas einfachere Alternativen, wie zum Bsp. die sogenannten
    „Farne“, wie zum Bsp. auf dies Webseiten:

    [*http://www.gk-informatik.de/sdhp/recugra.html*](http://www.gk-informatik.de/sdhp/recugra.html)

    [*http://www.toves.org/books/java/ch18-recurex/*](http://www.toves.org/books/java/ch18-recurex/)

    [*http://introcs.cs.princeton.edu/java/23recursion/Tree.java.html*](http://introcs.cs.princeton.edu/java/23recursion/Tree.java.html)

    [*http://www.aplu.ch/home/apluhomex.jsp?site=104*](http://www.aplu.ch/home/apluhomex.jsp?site=104)

    Du kannst nun auch diese Codes ausprobieren und erweitern.

c.  Wie verhinderst Du oder behandelst Du falsche Eingaben oder Eingaben
    die ausserhalb eines zulässigen Wertebereichs sind. Vielleicht
    machst Du hier nur mal nur ein Konzept (in ToDo-Kommentare einfügen)
    und die Implementation machst Du dann ein anderes Mal.

d.  Kannst Du Titelzeile und den Hintergrund etwas ansprechbarer und
    informativer gestalten? Wo musst Du im Code wie eingreifen? Oder ist
    das so schon für Dich ok?

e.  Was ist mit dem Abspeichern los? Welches Bildformat speichert er ab?
    Was ist mit der Datei-Extension? Muss der Benutzer diese eingeben?
    Wie kann ich das benutzerfreundlicher und vor allem DAU
    Sicher machen. Ein Information oder eine Hilfestellung wäre da schon
    hilfreich!

f.  Ja-ja, Du hättest einen Testplan schon früher machen sollen, aber
    wir arbeiten ja hier „agil“. Umso wichtiger wird es dann, keinen der
    repräsentativen Tests hier auszulassen und wirklich alle Funktionen
    zu testen. Als ran an den Testplan und gib dessen Durchführung an
    jemanden anders weiter. Mal schauen, ob er mit Deiner Testanleitung
    klar kommt. Wie das genau geht weisst Du schon, oder?

> Gratulation Du hast jetzt alles erledigt!
