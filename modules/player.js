/**
 * @param {Number} id The last global card ID
 * @description Randomly generate a card based on set presets
 * @returns 
 */
const generateCard = (id) => {
	let colors = ["Red", "Blue", "Yellow", "Green", "Orange", "Purple"],
		numbers = 11,
		elements = ["Fire", "Snow", "Water"],
		color,
		number,
		element;

	// Generate a random color, number and element limited to the above presets
	color = colors[Math.floor(Math.random() * colors.length)];
	number = Math.floor(Math.random() * numbers) + 2;
	element = elements[Math.floor(Math.random() * elements.length)];

	return {
		id,
		color,
		number,
		element,
	};
};

module.exports = {
	/**
	 * @param {Object} players 
	 * @param {Object} players.p1
	 * @param {Array} players.p1[].hand
	 * @param {Object} players.p2
	 * @param {Array} players.p2[].hand
	 * @description Update the player's 
	 */
	updatePlayerHand: (players) => {
		/*
		While both players have less than 5 cards, generate a new one
		*/
		while (players.p1.hand.length < 5) {
			players.p1.hand.push(generateCard(players.p1.id));
			players.p1.id++;
		}
		while (players.p2.hand.length < 5) {
			players.p2.hand.push(generateCard(players.p2.id));
			players.p2.id++;
		}
	},
	/**
	 * @param {Array} p_hand the player's hand array
	 * @description List the player's current hand
	 */
	listPlayerCards: (p_hand) => {
		/*
		Loop through each card in the array and add them to the response, in the end print everything
		alongside instructions on how to view either bag or quit the game
		*/
		let response = `You have:\n`;
		let i = 0;
		for (card of p_hand) {
			response += `${i} | ${card.color} ${card.element} ${card.number}\n`;
			i++;
		}
		response += "In your hand.\n\nb1, bag1 | View your bag\nb2, bag2 | View Player 2's bag\nq,  quit | Exit game\n";
		console.log(response);
	},
	/**
	 * 
	 * @param {Array} p_bag the player or bot's bag
	 * @param {Number} player 1 = Player 1, 2 = Player 2
	 * @description List the selected player's bag
	 * @returns 
	 */
	listPlayerBag: (p_bag, player) => {
		/*
		Set proper names
		*/
		let name;
		if (player === 1) name = ["You have", "Your"];
		else name = ["Player 2 has", "Player 2's"];

		if (p_bag.length === 0)
			return console.log(`\n${name[1]} bag is empty\n`);

		/*
		Loop through each card in bag and add the color and element to the response. In the end print it
		*/
		let response = `\n${name[0]}:\n`;
		for (card of p_bag) {
			response += `${card.color} ${card.element}\n`;
		}
		response += "In bag.\n";
		console.log(response);
	},
};
