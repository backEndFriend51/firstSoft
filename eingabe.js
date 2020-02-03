var ein = prompt("Bitte Zahl eingeben");

if(ein > 10 && ein < 100) {
		alert("Die eingegebene Zahl: " + ein + " ist groeßer 10 und kleiner 100.");
} 
else if(ein >= 100) {
		alert("Die eingegebene Zahl: " + ein % 10 + " ist zwischen 0 und 9.");
} 
else if(ein == 10) {
		alert("Die eingegebene Zahl: " + ein + " ist gleich 10.");
} 
else if (ein < 10) {
		alert("Die eingegebene Zahl: " + ein + " ist kleiner 10.");
}
else {
		alert("Die Eingabe ist ungültig!");
}