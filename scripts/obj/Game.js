'use strict';

class Game {
  constructor (ctx, canvasWidth, canvasHeight) {
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
  }

  buildSplash () {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

    this.ctx.font = '70px sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#eee';
    this.ctx.fillText('Ponglings', this.canvasWidth / 2, this.canvasHeight / 3);

    this.ctx.font = '25px sans-serif';
    this.ctx.fillStyle = '#white';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Click to start the game', this.canvasWidth / 2, this.canvasHeight - this.canvasHeight / 3);
  }

  destroySplash () {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  }

  buildGame () {
    this.drawGame();
  }

  drawGame () {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(10, 0, this.canvasWidth - 20, 20);
    this.ctx.fillRect(10, this.canvasHeight - 20, this.canvasWidth - 20, 20);
  }
}
