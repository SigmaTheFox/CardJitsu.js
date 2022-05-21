const { askInput } = require("./modules/askInput");
const { updatePlayerHand: updatePlayerHand, listPlayerCards, listPlayerBag, } = require("./modules/player");
const { playCard } = require("./modules/game");

const runGame = async () => {
	let playing = true,
		player = {
			p1: {
				id: 0,
				hand: [],
				bag: [],
			},
			p2: {
				id: 0,
				hand: [],
				bag: [],
			},
		},
		p1_hand = player.p1.hand,
		p1_bag = player.p1.bag,
		p2_bag = player.p2.bag;

	while (playing) {
		updatePlayerHand(player);
		listPlayerCards(p1_hand);
        // Wait for user input before continuing
		let input = await askInput("Pick a card ID to play: ");

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
		if (input.toLowerCase() === "b1" || input.toLowerCase() === "bag1") {
			listPlayerBag(p1_bag, 1);
		}
		if (input.toLowerCase() === "b2" || input.toLowerCase() === "bag2") {
			listPlayerBag(p2_bag, 2);
		}
		if (!isNaN(input)) {
			playCard(player.p1, player.p2, input);
		} else continue;
	}
	return;
};

runGame();
