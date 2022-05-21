const readline = require("readline");

module.exports = {
	/**
	 * @param {String} question The question to ask the input for
	 * @returns 
	 */
	askInput: (question) => {
		// Create the readline interface
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		let response;

		// Set and call the prompt
		rl.setPrompt(question);
		rl.prompt();

		// Return the user's input as a promise. This will allow awaiting it.
		return new Promise((resolve, reject) => {
			rl.on("line", (userInput) => {
				response = userInput;
				rl.close();
			});

			rl.on("close", () => {
				resolve(response);
			});
		});
	},
};
