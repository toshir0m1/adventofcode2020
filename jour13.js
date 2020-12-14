/*-------------------------*\
|          Jour 13          |
\*-------------------------*/

var depart = 1001798;
//var depart = 939;
var x = 0;
var busList = [19,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,859,x,x,x,x,x,x,x,23,x,x,x,x,13,x,x,x,17,x,x,x,x,x,x,x,x,x,x,x,29,x,373,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,37];
//var busList = [7,13,x,x,59,x,31,19];

var minDiff = 9999999999, bestBus;
for (var bus of busList) {
	if (bus > 0) {
		var busStop = 0;
		do {
			busStop += bus;
		}
		while(busStop < depart);
		var diff = (busStop - depart);
		if (diff < minDiff) {
			minDiff = diff;
			bestBus = bus;
			solution = (bus * diff);
		}
		console.log("Bus " + bus + " : " + busStop + " soit " + diff + " minutes.");
	}
}
console.log("Solution (busID " + bestBus + ") : " + solution);

// part 2 --- unfinished, bad perfs

var t = 0, tFound = false;
do {
	t += busList[0];
	for (var i = 1, iMax = busList.length; i < iMax; ++i) {
		if (busList[i] == 0) {
			continue;
		}
		if ((t + i) % busList[i] != 0) {
			break;
		}
		if (i == iMax - 1) {
			tFound = true;
		}
	}
}
while (!tFound);
console.log(t);
