'use strict';

function main () {
  const canvasWidth = 640;
  const canvasHeight = 480;

  const canvas = new Canvas(canvasWidth, canvasHeight);
  const game = new Game(canvas.ctx, canvasWidth, canvasHeight);

  // Build Splash

  function buildSplash () {
    game.buildSplash();
    canvas.canvasElement.addEventListener('click', destroySplash);
  }

  // Desktroy Splash and build Game
  function destroySplash () {
    canvas.canvasElement.removeEventListener('click', destroySplash);
    game.destroySplash();
    buildGame();
  }

  function buildGame () {
    game.buildGame();
  }

  // Destroy Game and build Game Over
  function destroyGame () {

  }

  function buildGameOver () {

  }
  buildSplash();
}

window.addEventListener('load', main);
