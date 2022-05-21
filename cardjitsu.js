const { askInput } = require("./modules/askInput");
const { updatePlayerHand, listPlayerCards, listPlayerBag } = require("./modules/player");
const { playCard } = require("./modules/game");

const runGame = async () => {
	let playing = true,
		player = {
			p1: {
				hand: [],
				bag: []
			},
			p2: {
				hand: [],
				bag: []
			},
		},
		p1_hand = player.p1.hand,
		p1_bag = player.p1.bag,
		p2_bag = player.p2.bag;

	console.clear();
	while (playing) {
		updatePlayerHand(player);
		listPlayerCards(p1_hand);
		// Wait for user input before continuing
		let input = await askInput("Pick a card to play using numbers 0-4: ");

		/* Compare the input to any of these values.
        q/quit stop the game,
        b1/bag1 list player 1's bag,
        b2/bag2 list player 2's bag,
        any number will play a card and continue the game.
        If neither correspond, repeat the question
        */
		if (input.toLowerCase() === "q" || input.toLowerCase() === "quit") {
			playing = false;
			break;
		}
		else if (input.toLowerCase() === "b1" || input.toLowerCase() === "bag1") {
			console.clear();
			listPlayerBag(p1_bag, 1);
		}
		else if (input.toLowerCase() === "b2" || input.toLowerCase() === "bag2") {
			console.clear();
			listPlayerBag(p2_bag, 2);
		}
		else if (!isNaN(input)) {
			console.clear();
			playCard(player.p1, player.p2, input);
		} else {
			console.clear();
			continue;
		}
	}
	return console.clear();
};

runGame();
