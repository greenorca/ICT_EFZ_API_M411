##Übung: Google Web-Service mit JSON verwenden

**Lernziele:**

* erstellen Client-Server Kommunikation
* parsen JSON

**Zeit:** 45 + 60 min

### Google Maps nutzen

Wir wollen anhand einer Adresse die exakte Längen- und Breitengrad-Angaben mittels der Google-Map – API suchen. Geben Sie dazu zunächst folgende URL im Browser ein und interpretieren Sie die Antwort des Servers:

<http://maps.googleapis.com/maps/api/geocode/json?address=Hohlstrasse+535,Zuerich>

Sie sehen eine Liste von Adresskomponenten. Erstellen Sie einen
Java-Web-Service Client und parsen Sie die JSON Serverantwort mittels
*JSONArray* und *JSONObject*.

Eine Beispiel-Implementierung finden Sie weiter unten. Setzen Sie das
Beispiel selbst um und erweitern Sie es nach Belieben in ein sinnvolles
objektorientiertes Programm.

~~~~~~~~~~~~~~~~~~~
public static void main(String[] args){
	String url = "http://maps.googleapis.com/maps/api/geocode/json?address=" 
		+"Hohlstrasse+535,Zuerich";
	
	URL googleClient = new URL(url);		
	URLConnection urlc = googleClient.openConnection();
			
	BufferedReader in = new BufferedReader(
				new InputStreamReader(urlc.getInputStream()));
	String msg = "";
	// just reading server response
	while(in.ready()){
		//System.out.println(line);
		msg = msg+in.readLine();
	}
	//putting this into a computable JSON format 
	JSONObject obj = new JSONObject(msg);
	//fetch "result" part of JSON obj
	JSONArray results = (JSONArray) obj.get("results");
	JSONObject inner = (JSONObject)results.get(0);
			
	//now get the actual values 
	JSONObject o = inner.getJSONObject("geometry").getJSONObject("location");
	System.out.println("Latitude:" + o.getDouble("lat"));
	System.out.println("Longitude:" + o.getDouble("lng"));
}
~~~~~~~~~~~~~~~~~~~~~

### Zusatzaufgabe Google API nutzen

Die GoogleMaps API kann für viele weitere Zwecke genutzt werden. Für
private Zwecke mit limitierten Abfragen pro Tag können Sie die API
kostenfrei nutzen. Informieren Sie sich unter folgenden Links, wie Sie
beispielsweise Fahrtrouten (mit PKW oder ÖV) planen können.

<https://developers.google.com/maps/web-services/>

<https://developers.google.com/maps/documentation/directions/intro>

Setzen Sie exemplarisch ein Routenplanungsbeispiel oder ein eigenes
Beispiel mit GooglePlaces, GoogleMaps Elevation o.ä. um.


**Lösungsvorschlag:**

`GoogleMapApiClient.java`
