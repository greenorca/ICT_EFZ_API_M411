# ICT_EFZ_API_M411
Open-Source Kursbuch für Modul 411 "Datenstrukturen und Algorithmen" für EFZ Applikationsentwicklung Schweiz

Dies ist ein Versuch, für o.g. Modul ein Kursbuch samst Übungen zu erstellen, welches sowohl den ICT-HANOKS (https://cf.ict-berufsbildung.ch/modules.php?name=Mbk&a=20101&cmodnr=411&noheader=1) 
als auch dem Niveau der Lernenden entspricht.

Die Quellen für die einzelnen Kapitel sind im markdown geschrieben. Mit pandoc können aus den Quellen HTML, DOCX, PDF uvm. generiert werden. Zusätzlich ist das cabal Package mit dem include-Filter notwendig. 

Das beiliegende CSS ist ein erster Entwurf für ein brauchbares Layout. Eigene (weitere) CSS Dateien können nach eigenen Bedürfnissen erstellt werden.

`PATH=$HOME/.cabal/bin:$PATH`

**MD -> HTML (entire book; all files `included` in skript1ab\*.md)**

~~~~~~~~~~~~~~~~~~~~~~~
pandoc -s skript1ab_ersteSchritte.docx.md -o M411_book.html -t html5 --toc --toc-depth 3 --filter pandoc-include -c buttondown.css -N --section -s --mathml
~~~~~~~~~~~~~~~~~~~~~~~

**MD -> HTML (just toolbox exercises)**
~~~~~~~~~~~~~~~~~~~~~~
pandoc -s skrip*ueb*.md -o M411_toolbox.html -t html5 --toc --toc-depth 2 --filter pandoc-include -c buttondown.css --section -s --mathml
~~~~~~~~~~~~~~~~~~~~~~
