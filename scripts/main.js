'use strict';

function main () {
  const canvasWidth = 640;
  const canvasHeight = 480;

  const canvas = new Canvas(canvasWidth, canvasHeight);
  const game = new Game(canvas.ctx, canvasWidth, canvasHeight);

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

  function buildGame () {
    game.build();
    window.addEventListener('keydown', handleKeyDown);
  }

  // Destroy Game and build Game Over
  function destroyGame () {
    game.destroy();
    buildGameOver();
  }

  function buildGameOver () {
    game.buildGameOver();
    canvas.canvasElement.addEventListener('click', startGame);
  }

  buildSplash();
}

window.addEventListener('load', main);
