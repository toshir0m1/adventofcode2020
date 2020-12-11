/*-------------------------*\
|          Jour 10          |
\*-------------------------*/

//var input = "99;104;120;108;67;136;80;44;129;113;158;157;89;60;138;63;35;57;61;153;116;54;7;22;133;130;5;72;2;28;131;123;55;145;151;42;98;34;140;146;100;79;117;154;9;83;132;45;43;107;91;163;86;115;39;76;36;82;162;6;27;101;150;30;110;139;109;1;64;56;161;92;62;69;144;21;147;12;114;18;137;75;164;33;152;23;68;51;8;95;90;48;29;26;165;81;13;126;14;143;15";
var input = "28;33;18;42;31;14;46;20;48;47;24;23;49;45;19;38;39;11;1;32;25;35;8;17;7;9;4;2;34;10;3";
//var input = "16;10;15;5;1;11;7;19;6;12;4";

var adapters = input.split(";");
for (var a in adapters) {
	adapters[a] = +adapters[a];
}

adapters = adapters.sort(function(a, b) { return a > b; });

adapters.unshift(0);// account for charging outlet (0)
adapters.push(adapters[adapters.length - 1] + 3);// account for device's built-in adapter (highest rating + 3)

console.log(adapters);

var scoreDiffs = [0, 0, 0, 0];

for (var i = 0, iMax = adapters.length; i <= iMax;++i) {
	var diff = adapters[i + 1] - adapters[i];
	scoreDiffs[diff]++;
}

console.log(scoreDiffs[1] * scoreDiffs[3]);

// part 2

// --- UNFINISHED - the above doesn't work ---

/*
(0), 1, 4, 5, 6, 7, 10, 11, 12, 15, 16, 19, (22)
(0), 1, 4, 5, 6, 7, 10, 12, 15, 16, 19, (22)
(0), 1, 4, 5, 7, 10, 11, 12, 15, 16, 19, (22)
(0), 1, 4, 5, 7, 10, 12, 15, 16, 19, (22)
(0), 1, 4, 6, 7, 10, 11, 12, 15, 16, 19, (22)
(0), 1, 4, 6, 7, 10, 12, 15, 16, 19, (22)
(0), 1, 4, 7, 10, 11, 12, 15, 16, 19, (22)
(0), 1, 4, 7, 10, 12, 15, 16, 19, (22)

13111311313
*/

/*
adapters.pop();
var diffs = "";
for (var i = 0, iMax = adapters.length - 1; i < iMax;++i) {
	var diff = adapters[i + 1] - adapters[i];
	diffs += diff;
}
console.log(diffs);

diffs = diffs.split("3");
var countDiffs = [];
for (var d of diffs) {
	if (d.length > 0) {
		if (countDiffs[d.length] === undefined) {
			countDiffs[d.length] = 0;
		}
		countDiffs[d.length]++;
	}
}
console.log(countDiffs);

var total = 0;
for (var c in countDiffs) {
	console.log("On a " + countDiffs[c] + " fois " + c + " 1, valant chacun " + Math.pow(2, (c - 1)) + ", ce qui donne un total de " + countDiffs[c] * Math.pow(2, (c - 1)));
	total += countDiffs[c] * Math.pow(2, (c - 1));
}
console.log("total : " + total);
*/