const Player = require("./player");

class Tennis {
  constructor(players) {
    this.players = players;
    this.player1 = new Player(players[0]);
    this.player2 = new Player(players[1]);
  }
  //   const player1 = new Player("John");
  //   const player2 = new Player("Mary");
}
// const player1 = new Tennis("John");
// const player2 = new Tennis("Mary");

module.exports = Tennis;
