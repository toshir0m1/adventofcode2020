/*-------------------------*\
|          Jour 23          |
\*-------------------------*/

var currentSeries = "459672813", currentCup = "4", currentPos = 0;
//var currentSeries = "389125467", currentCup = "3", currentPos = 0;

String.prototype.splice = function(start, delCount, newSubStr) {
	return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
};
	
for (var i = 0, nbMoves = 100; i < nbMoves; ++i) {
	move();
}
console.log("currentSeries: " + currentSeries);
var pos1 = currentSeries.indexOf("1");
var solution = currentSeries.substr(pos1 + 1) + currentSeries.substring(0, pos1);
console.log("Solution: " + solution);

function move() {
	var excluded = currentSeries.substr(currentPos + 1, 3);
	if (excluded.length < 3) {
		excluded += currentSeries.substr(0, (3 - excluded.length));
	}
	var destinationCup = +currentCup - 1;
	if (destinationCup < 1) {
		destinationCup = 9;
	}
	while (excluded.indexOf(destinationCup) > -1) {
		destinationCup--;
		if (destinationCup < 1) {
			destinationCup = 9;
		}
	}
	for (var i = 0, iMax = excluded.length; i < iMax; ++i) {
		currentSeries = currentSeries.replace(excluded[i], "");
	}
	var destinationPos = currentSeries.indexOf(destinationCup);
	currentSeries = currentSeries.splice(destinationPos + 1, 0, excluded);
	currentPos = currentSeries.indexOf(currentCup) + 1;
	if (currentPos > 8) {
		currentPos = 0;
	}
	currentCup = currentSeries[currentPos];
}
