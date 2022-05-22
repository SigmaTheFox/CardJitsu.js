# CardJitsu.js
A simple text based Javascript recreation of the classic Club Penguin minigame Card-Jitsu.<br/>

## About Card-Jitsu
Card-Jitsu was a Rock Paper Scissors like game where each player received 5 cards with a color, element and number.<br/>
In each turn, both players would choose a card from their hand and compare them to each other. The winner kept their card in their bag to make a set. <br/>
The cards, instead of having a symbol of a Rock, Paper and Scissors, used **🔥Fire**, **❄Snow** and **🌊Water**.<br/>

    🔥 beats ❄
    ❄ beats 🌊
    🌊 beats🔥
In case of both players picking the same element, the numbers kicked in to prevent a tie. The player with the biggest number (ranging from 2 to 12) would win the round and move the winning card to the bag. If even the numbers are the same, it would end as a tie and both cards would get discarted.<br/>

The colors had a special role, those determined which player would win the game.<br/>
There are two ways to win.
- The player gets the same element (**🔥Fire**, **❄Snow** or **🌊Water**) 3 times in different colors.
- The player gets one of each element in different colors

## To-Do
- [ ] Add the actual game win condition

## How To Play
You can play the game in two ways. With a packaged binary or from the source code itself.<br/>

To play using the binary, all you have to do is download the latest [release](https://github.com/SigmaTheFox/CardJitsu.js/releases/tag/releases) for your Operating System and run it.<br/>

To play it from source code:
- Download [Node.js](https://nodejs.org) (preferably the latest as not even I am sure which features I used are supported in which version)
- Download the source code of this repo and extract all it's contents into a folder
- Open a terminal in the folder containing `cardjitsu.js`
- Type `node cardjitsu.js` and press `Enter`
- Enjoy the game

Keep in mind that at the moment the game goes on infinitely, meaning it's impossible to win. The game win condition is currently in the works and will be finished soon™.

## Copyright
I neither own Club Penguin, the original version of Card-Jitsu and nor do I own the name. All credit goes to **New Horizon Interactive**, **RocketSnail Games** and **Disney Interactive Studios** who were the original developers.
