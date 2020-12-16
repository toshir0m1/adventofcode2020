/*-------------------------*\
|          Jour 15          |
\*-------------------------*/

var starting = [4, 1, 20, 6, 14, 0];
var liste = [].concat(starting);

var turns = [2020, 30000000], phase = 2;
for (var t = 1, tMax = (turns[phase - 1] - starting.length); t <= tMax; ++t ) {
	liste.unshift(speak());
}

function speak() {
	var already = liste.indexOf(liste[0], 1);
	
	if (already == -1) return 0;
	else return already;
}

console.log(liste[0]);