/*-------------------------*\
|          Jour 25          |
\*-------------------------*/

var cardInput = "2084668";
var doorInput = "3704642";
//var cardInput = 5764801;
//var doorInput = 17807724;

var loopCount = 0;
var value = 1;
var subject = 7;
var cardLoopSize, doorLoopSize;

findLoopSizes();
findEncryptionKey();

function findLoopSizes() {
	do {
		loopOnce();
	}
	while (!cardLoopSize || !doorLoopSize);
}

function findEncryptionKey() {
	var key = transform(1, doorInput, cardLoopSize);
	console.log(`Key (through door): ${key}`);
	key = transform(1, cardInput, doorLoopSize);
	console.log(`Key (through door): ${key}`);
}

function loopOnce() {
	value = transform(value, subject, 1);
	loopCount++;
	if (value == cardInput) {
		cardLoopSize = loopCount;
		console.log(`Card public key found: ${value} at loopsize ${cardLoopSize}`);
	}
	if (value == doorInput) {
		doorLoopSize = loopCount;
		console.log(`Door public key found: ${value} at loopsize ${doorLoopSize}`);
	}
}

function transform(v, s, loops) {
	for (var i = 0; i < loops; ++i) {
		v *= s;
		v = v % 20201227;
	}
	return v;
}