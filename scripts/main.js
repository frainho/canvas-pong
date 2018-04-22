'use strict';

function main() {
  const canvasWidth = 640;
  const canvasHeight = 480;

  // Build Splash

  function buildSplash() {
    const canvas = new Canvas(canvasWidth, canvasHeight);
    const game = new Game(canvas.ctx);

    game.buildSplash();
  }

  // Desktroy Splash and build Game
  function destroySplash() {

  }

  function buildGame() {

  }

  // Destroy Game and build Game Over
  function destroyGame() {

  }

  function buildGameOver() {

  }
  buildSplash();
}

window.addEventListener('load', main)





