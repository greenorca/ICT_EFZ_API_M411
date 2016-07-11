---
subtitle: Script1c
title: Ausgewählte Musterlösungen
---

import java**.**io**.**BufferedReader**;**

import java**.**io**.**File**;**

import java**.**io**.**FileNotFoundException**;**

import java**.**io**.**FileReader**;**

import java**.**io**.**IOException**;**

import java**.**io**.**Reader**;**

import java**.**lang**.**reflect**.**Array**;**

import java**.**util**.**Arrays**;**

import java**.**util**.**Scanner**;**

public class skript\_1c\_array **{**

/\*\*

\* sorts an integer array in-place using the bubble sort algorithm,

\* counts number of iterations and swap operations needed

\* @param arr: Arry of integer numbers to be sorted

\*/

public static void bSortArray**(**int**\[\]** arr**){**

int i**;**

int swaps **=** 0**;**

int iter **=**0**;**

**for** **(**i**=**arr**.**length**-**1**;**i**&gt;**0**;**i**--){**

iter**++;**

**for** **(**int j**=**0**;** j**&lt;**i**;**j**++){**

**if** **(**arr**\[**j**\]&gt;**arr**\[**j**+**1**\]){**

swaps**++;**

int tmp **=** arr**\[**j**\];**

arr**\[**j**\]=**arr**\[**j**+**1**\];**

arr**\[**j**+**1**\]=**tmp**;**

**}**

**}**

**}**

System**.**out**.**println**(**"Done sorting, iterations:
"**+**iter**+**", swap ops: "**+**swaps**);**

**}**

/\*\*

\* test function that reads a 1000 numbers from a file into an array
that dynamically increases its size if needed

\* @throws NumberFormatException

\* @throws IOException

\*/

public static void readArray**()** throws NumberFormatException**,**
IOException**{**

File myfile **=** **new**
File**(**"/home/sven/Desktop/WISS/Modul\_411/toolbox\_2015\_001/Zusatz-Dateien
Studenten/numbers.txt"**);**

BufferedReader myReader **=** **new** BufferedReader**(new**
FileReader**(**myfile**));**

String line**;**

int i**=**0**;**

int**\[\]** myArray **=** **new** int**\[**100**\];**

int**\[\]** myLongArray **=** **new** int**\[**1000**\];**

**while** **((**line **=** myReader**.**readLine**())** **!=**
null**){**

//increase array size in a really stupid way

**if** **(**myArray**.**length**==**i**){**

System**.**out**.**println**(**"Resizing array"**);**

int**\[\]** tmp **=** **new** int**\[**i**+**50**\];**

Arrays**.**fill**(**tmp**,** **-**1**);**

System**.**arraycopy**(**myArray**,** 0**,** tmp**,** 0**,**
myArray**.**length**);**

myArray **=** tmp**;**

**}**

int n **=** Integer**.**parseInt**(**line**);**

//add current value to both arrays

myArray**\[**i**\]=**n**;**

myLongArray**\[**i**\]=**n**;**

System**.**out**.**println**(**"Value number
"**+**i**+**"::"**+**n**);**

i**++;**

**}**

myReader**.**close**();**

boolean match **=** **true;**

long t\_start **=** System**.**currentTimeMillis**();**

//compare both arrays the old fashioned way

**for** **(**i**=**0**;** i **&lt;** myLongArray**.**length**;**i**++)**

**if** **(**myLongArray**\[**i**\]!=**myArray**\[**i**\]){**

System**.**out**.**println**(**"values don't match"**);**

match **=** **false;**

**break;**

**}**

long t\_end1 **=** System**.**currentTimeMillis**();**

//compare arrays with build-in library function

match **=** Arrays**.**equals**(**myLongArray**,** myArray**);**

long t\_end2 **=** System**.**currentTimeMillis**();**

System**.**out**.**println**(**"time to run compare loop:
"**+(**t\_end1**-**t\_start**)+**"msec"**);**

System**.**out**.**println**(**"time to run compare libfun:
"**+(**t\_end2**-**t\_end1**)+**"msec"**);**

t\_end2 **=** System**.**currentTimeMillis**();**

**if** **(**match**)**

System**.**out**.**println**(**"alles guet"**);**

**}**

/\*\*

\* read 5 console input numbers and prepend them to an int\[\] Array

\*/

public static void readAndPrependInputToArray**(){**

Integer**\[\]** myArray **=** **new** Integer**\[**5**\];**

Scanner scanner **=** **new** Scanner**(**System**.**in**);**

/\* read int inputs and add them in front of array \*/

**for** **(**int i**=**0**;** i**&lt;**myArray**.**length**;**i**++){**

System**.**out**.**println**(**"Bitte INT Zahl eingeben"**);**

int x **=** scanner**.**nextInt**();**

//create new temporary array

Integer**\[\]** tArray **=** **new**
Integer**\[**myArray**.**length**\];**

//add the new number to start of temp. array

tArray**\[**0**\]** **=** x**;**

//copy existing values behind new value

**for** **(**int k**=**0**;**k**&lt;**myArray**.**length**-**1**;**
k**++)**

tArray**\[**k**+**1**\]=**myArray**\[**k**\];**

//set result array to the memory adress of temporary array

myArray **=** tArray**;**

**}**

scanner**.**close**();**

**for** **(**int i**=**0**;** i**&lt;**myArray**.**length**;**i**++)**
**{**

System**.**out**.**println**(**"::"**+**myArray**\[**i**\]);**

**}**

**}**

/\*\*

\* @param args

\*/

public static void main**(**String**\[\]** args**)** throws
Exception**{**

int **\[\]** arr **=**
**{**97**,**15**,**33**,**28**,**25**,**11**,**73**};**

bSortArray**(**arr**);**

**for** **(**int x **:** arr**)**

System**.**out**.**print**(**x**+**", "**);**

System**.**out**.**println**();**

int**\[\]** arrX **=**
**{**97**,**73**,**33**,**28**,**25**,**15**,**11**};**

bSortArray**(**arrX**);**

**for** **(**int x **:** arrX**)**

System**.**out**.**print**(**x**+**", "**);**

System**.**out**.**println**();**

**}**

**}**
