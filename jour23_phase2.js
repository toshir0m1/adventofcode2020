/*-------------------------*\
|          Jour 23          |
\*-------------------------*/

const CUPS = 1000000;
const MOVES = 10000000;
const OUT = 3;
var currentSeries = [4,5,9,6,7,2,8,1,3], currentCup = 4, currentPos = 0;
for (var i = 10; i <= CUPS; ++i) {
	currentSeries.push(i);
}
	
for (var i = 0, nbMoves = MOVES; i < nbMoves; ++i) {
	move();
	if ((i % 1000000) == 0) {
		console.log(i);
	}
}

console.log(currentSeries);
var pos1 = currentSeries.indexOf(1);
var solution = currentSeries[pos1 + 1] * currentSeries[pos1 + 2];
console.log("Solution: " + solution);

function move() {
	var excluded = currentSeries.slice(currentPos + 1, currentPos + 4);
	if (excluded.length < OUT) {
		excluded = excluded.concat(currentSeries.slice(0, (OUT - excluded.length)));
	}
	var destinationCup = currentCup - 1;
	if (destinationCup < 1) {
		destinationCup = CUPS;
	}
	while (excluded.indexOf(destinationCup) > -1) {
		destinationCup--;
		if (destinationCup < 1) {
			destinationCup = CUPS;
		}
	}
	for (var i = 0; i < OUT; ++i) {
		currentSeries.splice(currentSeries.indexOf(excluded[i]), 1);
	}
	var destinationPos = currentSeries.indexOf(destinationCup);
	currentSeries.splice(destinationPos + 1, 0, excluded[0], excluded[1], excluded[2]);
	currentPos = currentSeries.indexOf(currentCup) + 1;
	if (currentPos >= CUPS) {
		currentPos = 0;
	}
	currentCup = currentSeries[currentPos];
}
