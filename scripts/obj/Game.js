'use strict';

class Game {
  constructor (ctx, canvasWidth, canvasHeight) {
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.players = [];
    this.balls = [];
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

  build () {
    this.drawGame();
    this.doFrame();
    this.player1 = new Player(this.ctx, 20, this.canvasHeight / 2, 3, 20);
    this.player2 = new Player(this.ctx, this.canvasWidth - 20, this.canvasHeight / 2, 3, 20);

    this.players.push(this.player1);
    this.players.push(this.player2);

    this.player1.draw();
    this.player2.draw();
  }

  clearCanvas () {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
  }

  drawGame () {
    this.clearCanvas();
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(10, 0, this.canvasWidth - 20, 20);
    this.ctx.fillRect(10, this.canvasHeight - 20, this.canvasWidth - 20, 20);
  }

  destroy () {
    this.clearCanvas();
  }

  buildGameOver () {
    this.ctx.font = '25px sans-serif';
    this.ctx.fillStyle = 'white';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Game Over', this.canvasWidth / 2, this.canvasHeight - this.canvasHeight / 2);
  }

  doFrame () {
    window.requestAnimationFrame(() => {
      this.doFrame();
    });
  }
}
