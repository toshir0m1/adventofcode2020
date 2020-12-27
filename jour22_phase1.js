/*-------------------------*\
|          Jour 22          |
\*-------------------------*/

//var deck1 = [18,50,9,4,25,37,39,40,29,6,41,28,3,11,31,8,1,38,33,30,42,15,26,36,43];
//var deck2 = [32,44,19,47,12,48,14,2,13,10,35,45,34,7,5,17,46,21,24,49,16,22,20,27,23];
var deck1 = [9,2,6,3,1];
var deck2 = [5,8,4,7,10];

var roundNumber = 1, gameOver = false, winningDeck = undefined;

function go() {
	do {
		nextRound();
	}
	while(!gameOver);
	endGame();
}

function nextRound() {
	console.log("-- Round " + roundNumber + " --");
	console.log("Player 1's deck: " + deck1.join(", "));
	console.log("Player 2's deck: " + deck2.join(", "));
	
	console.log("Player 1 plays: " + deck1[0]);
	console.log("Player 2 plays: " + deck2[0]);
	
	if (+deck1[0] > +deck2[0]) {
		deck1.push(deck1.splice(0, 1));
		deck1.push(deck2.splice(0, 1));
		console.log("Player 1 wins the round!");
		console.log(" ");
	}
	else {
		deck2.push(deck2.splice(0, 1));
		deck2.push(deck1.splice(0, 1));
		console.log("Player 2 wins the round!");
		console.log(" ");
	}
	
	if (!deck1.length || !deck2.length) {
		gameOver = true;
		winningDeck = (deck1.length == 0) ? deck2: deck1;
	}
	else {
		roundNumber++;
	}
}

function endGame() {
	console.log("== Post-game results ==");
	console.log("Player 1's deck: " + deck1.join(", "));
	console.log("Player 2's deck: " + deck2.join(", "));
	
	var score = 0;
	for (var order = 1, i = winningDeck.length - 1; i >= 0; --i, order++) {
		score += winningDeck[i] * order;
	}
	console.log(" ");
	console.log("Winning score: " + score);
}

