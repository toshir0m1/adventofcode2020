/*-------------------------*\
|          Jour 22          |
\*-------------------------*/

var input1 = [18,50,9,4,25,37,39,40,29,6,41,28,3,11,31,8,1,38,33,30,42,15,26,36,43];
var input2 = [32,44,19,47,12,48,14,2,13,10,35,45,34,7,5,17,46,21,24,49,16,22,20,27,23];

var supremeWinner = game([input1, input2]);
console.log("Winner: " + supremeWinner.winner);
console.log("Final Deck: " + supremeWinner.deck);

var score = 0;
for (var order = 1, i = supremeWinner.deck.length - 1; i >= 0; --i, order++) {
	score += supremeWinner.deck[i] * order;
}
console.log("Score: " + score);


function game(decks) {
	var winner = {}, roundNumber = 0, memory = [];
	do {
		roundNumber++;
		
		var imprint = decks[0].join(".") + "-" + decks[1].join(".");
		if (memory.indexOf(imprint) > -1) {
			winner.winner = 1;
			winner.deck = decks[0];
		}
		else {
			memory.push(imprint);
		}
		
		if ((decks[0].length > +decks[0][0]) && (decks[1].length > +decks[1][0])) {
			var newGame = game([decks[0].slice(1, decks[0][0] + 1), decks[1].slice(1, decks[1][0] + 1)]);
			roundWinner = newGame.winner;
		}
		else {
			if (+decks[0][0] > +decks[1][0]) {
				roundWinner = 1;
			}
			else {
				roundWinner = 2;
			}
		}
		
		if (roundWinner == 1) {
			decks[0] = decks[0].concat(decks[0].splice(0, 1));
			decks[0] = decks[0].concat(decks[1].splice(0, 1));
		}
		else {
			decks[1] = decks[1].concat(decks[1].splice(0, 1));
			decks[1] = decks[1].concat(decks[0].splice(0, 1));
		}
		
		if (decks[0].length == 0) {
			winner.winner = 2;
			winner.deck = decks[1];
		}
		if (decks[1].length == 0) {
			winner.winner = 1;
			winner.deck = decks[0];
		}
	}
	while(!winner.winner);
	
	return winner;
}
