// console.log(Math.sqrt(25));		// in Google Chrome

var verA = 11, verB = 17;
	if(verA == verB) {
		alert("Die Typen der Variablen sind vielleicht nicht gleich ?");
		if(verA === verB) {
			alert("Die Typen der Variablen sind doch gleich !");
		} 
	} 
else if(verA < 10 || verB < 10) {
		alert("mindestens eine Variable ist kleiner 10 !");
		if(verA < 10 && verB < 10) {
			alert("alle zwei Variablen sind kleiner 10 !");
		} 	
	} 

else if(verA > 10 || verB > 10) {
		alert("mindestens eine Variable ist groeßer 10 !");
		if(verA > 10 && verB > 10) {
			alert("alle zwei Variablen sind groeßer 10 !");
		} 
	} 

else {
		alert("Die Eingabe ist ungültig!");
}