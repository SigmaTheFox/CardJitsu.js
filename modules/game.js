/**
 *
 * @param {Object} p1 Player 1's card
 * @param {String} p1.color
 * @param {String} p1.element
 * @param {Number} p1.number
 * @param {Object} p2 Player 2's card
 * @param {String} p2.color
 * @param {String} p2.element
 * @param {Number} p2.number
 * @returns
 */
const compareCards = (p1, p2) => {
	// Log which chards got played.
	console.log(
		`\nYou: ${p1.color} ${p1.element} ${p1.number}\nPlayer 2: ${p2.color} ${p2.element} ${p2.number}`
	);

	/*
		If both players played the same element, compare their numbers.
		In case of both numbers being the same, the round will result in a Tie,
		if either player wins, return their respective name.
	*/
	if (p1.element === p2.element) {
		if (p1.number === p2.number) {
			console.log("\nTie\n");
			return "tie";
		}
		if (p1.number > p2.number) {
			console.log("\nYou won this round!\n");
			return "p1";
		} else {
			console.log("\nPlayer 2 won\n");
			return "p2";
		}
	}
	/*
		Fire beats Snow
		Snow beats Water
		Water beats Fire

		Do a simple rock paper scissors comparison between the elements. If the player wins either of these
		return "p1", otherwise it automatically means the bot (player 2) won, so return "p2".
	*/
	if (p1.element === "Fire" && p2.element === "Snow") {
		console.log("\nYou won this round!\n");
		return "p1";
	}
	if (p1.element === "Snow" && p2.element === "Water") {
		console.log("\nYou won this round!\n");
		return "p1";
	}
	if (p1.element === "Water" && p2.element === "Fire") {
		console.log("\nYou won this round!\n");
		return "p1";
	} else {
		console.log("\nPlayer 2 won\n");
		return "p2";
	}
};

module.exports = {
	/**
	 * @param {Object} p1 Player 1's object
	 * @param {Array} p1.hand
	 * @param {Array} p1.bag
	 * @param {Object} p2 Player 2's object
	 * @param {Array} p2.hand
	 * @param {Array} p2.bag
	 * @param {String} input The Player's input
	 * @returns
	 */
	playCard: (p1, p2, input) => {
		let p1_hand = p1.hand,
			p2_hand = p2.hand,
			p1_bag = p1.bag,
			p2_bag = p2.bag,
			// Randomly generate the bot's card index
			p2_idx = Math.floor(Math.random() * p2.hand.length);

		// If the player input an ID that does not correspond to any card, retur an error
		if (input < 0 || input > 4)
			return console.log(`\nYou can only use numbers from 0 to 4\n`);

		// Compare the cards to see who won the round
		let winner = compareCards(p1_hand[input], p2_hand[p2_idx]);

		/*
		In case of a tie delete the cards,
		in case of the winner being Player 1 push the winning card's color and element to their bag and remove 
		both played cards from the hands,
		in case of the winner being the Bot (Player 2) push it's card to the bag and remove both played cards
		*/
		if (winner === "tie") {
			p1_hand.splice(input, 1);
			p2_hand.splice(p2_idx, 1);
		};
		if (winner === "p1") {
			p1_bag.push({
				color: p1_hand[input].color,
				element: p1_hand[input].element,
			});
			p1_hand.splice(input, 1);
			p2_hand.splice(p2_idx, 1);
		} else {
			p2_bag.push({
				color: p2_hand[p2_idx].color,
				element: p2_hand[p2_idx].element,
			});
			p1_hand.splice(input, 1);
			p2_hand.splice(p2_idx, 1);
		}
	},
};
