### Übung: Laufzeitkomplexität von Algorithmen bestimmen
**Lernziele**

**Art:** Partnerarbeit

**Zeit:** 30 Minuten

**Hilfsmittel:** Skript, kein PC

**Aufgabe: ** 
Bestimmen Sie die Laufzeit und Komplexitätsklasse der folgenden drei
Algorithmen. Schreiben Sie den Rechenweg vollständig unter oder neben
die Funktionen.

a) 
~~~~~~~~~~~~~~~~~~~~~~~
public int[][] calcCrossProduct(int[] vector){
	int[][] result = new int[vector.length][vector.length];
	for (int i=0; i < vector.length;i++)
		for (int j = 0; j<vector.length;j++)
			result[i][j]=vector[i]*vector[j];
	
	return result;
}
~~~~~~~~~~~~~~~~~~~~~~~~~

<br/><br/><hr/>
<br/>

<hr/>
<br/>

<hr/>
<br/>

<hr/>
<br/>


	
b) 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
public float getMean(int[] arr){
	int sum = 0;
	for (int i : arr)
		sum+=i;

	return sum/arr.length;
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

<br/><br/><hr/>
<br/>

<hr/>
<br/>

<hr/>
<br/>

<hr/>
<br/>

c)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// arr must be sorted before
public int findBinary(int [] arr, int search){
	int index = (int) Math.floor(arr.length/2);
	int inc = index;

	while (arr[index]!=search && inc>0){
		inc = (int)Math.floor(inc / 2);
		if (arr[index]>search)
			index -= inc;
		else index += inc;
	}
	if (arr[index] != search)
		return -1;

	return index;
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

<br/><br/><hr/>
<br/>

<hr/>
<br/>

<hr/>
<br/>

<hr/>
<br/>
