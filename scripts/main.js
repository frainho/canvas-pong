'use strict';

function main () {
  const canvasWidth = 640;
  const canvasHeight = 480;

  const canvas = new Canvas(canvasWidth, canvasHeight);
  const game = new Game(canvas.ctx, canvasWidth, canvasHeight, gameEnded);

  // Build Splash
  function buildSplash () {
    game.buildSplash();
    canvas.canvasElement.addEventListener('click', startGame);
  }

  // Desktroy Splash and build Game
  function startGame () {
    canvas.canvasElement.removeEventListener('click', startGame);
    game.destroySplash();
    buildGame();
  }

  function handleKeyDown (event) {
    game.handleKeyDown(event.key);
  }

  function handleKeyUp (event) {
    game.handleKeyUp(event.key);
  }

  function buildGame () {
    game.build();
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
  }

  function gameEnded (winner) {
    destroyGame(winner);
  }

  // Destroy Game and build Game Over
  function destroyGame (winner) {
    buildGameOver(winner);
    window.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('keyup', handleKeyUp);
  }

  function buildGameOver (winner) {
    game.buildGameOver(winner);
    canvas.canvasElement.addEventListener('click', startGame);
  }

  buildSplash();
}

window.addEventListener('load', main);
