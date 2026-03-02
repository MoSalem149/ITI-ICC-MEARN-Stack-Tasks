// TODO
/*
We play a PlayStation football game and during the game 
we want to change the game plan (attack - defence - medium)
*/

// Classes Attack, Defence, and Medium  Strategies with Strategy Design Pattern
class AttackStrategy {
  changePlan() {
    console.log("Game plan: Attack");
  }
} //* DONE

class DefenceStrategy {
  changePlan() {
    console.log("Game plan: Defence");
  }
} //* DONE

class MediumStrategy {
  changePlan() {
    console.log("Game plan: Medium");
  }
} //* DONE

// Class Game
class Game {
  constructor() {
    this.strategy = null;
  }
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  play() {
    this.strategy.changePlan();
  }
}

//!TEST
const game = new Game();

//?RESULTS
game.setStrategy(new AttackStrategy());
game.play();

game.setStrategy(new DefenceStrategy());
game.play();

game.setStrategy(new MediumStrategy());
game.play();
