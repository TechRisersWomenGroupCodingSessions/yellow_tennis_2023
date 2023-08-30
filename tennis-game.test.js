// Comments:
// Set up game
// Players should take turns (alternate)
// Test both players have had a turn - one go each (function)
// Scores array - too much detail, stick to design not implementation
// Set up counter variable for each player
// increment counter variable up to 4 - then player should win

const Tennis = require("./tennis-game");
const Player = require("./player");

test("There are 2 players in the game", () => {
  const tennis = new Tennis(["John", "Mary"]);
  expect(tennis.players.length).toBe(2);
});

test("Players have a name", () => {
  const tennis = new Tennis(["John", "Mary"]);
  expect(tennis.player1.name).toBe("John");
  expect(tennis.player2.name).toBe("Mary");
});

// test("test both players have had a turn", () => {
//   const tennis = new Tennis(["John", "Mary"]);
//   expect(tennis.takeTurn()).toBe()
// });
