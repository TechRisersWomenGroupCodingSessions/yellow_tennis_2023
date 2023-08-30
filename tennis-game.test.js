const Tennis = require("./tennis-game");

test("There are 2 players in the game", () => {
  const tennis = new Tennis(["John", "Mary"]);  
  expect(tennis.players.length).toBe(2);
});