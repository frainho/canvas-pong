'use strict';

class Game {
  constructor (ctx, canvasWidth, canvasHeight) {
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.player1 = null;
    this.player2 = null;
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
    this.clearCanvas();
  }

  build () {
    this.drawGame();
    this.player1 = new Player(this.ctx, 20, this.canvasHeight / 2, 3, 20, 'right');
    this.player2 = new Player(this.ctx, this.canvasWidth - 20, this.canvasHeight / 2, 3, 20, 'left');

    this.players.push(this.player1);
    this.players.push(this.player2);

    this.player1.draw();
    this.player2.draw();
    this.doFrame();
  }

  clearCanvas () {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
  }

  drawGame () {
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(10, 0, this.canvasWidth - 20, 20);
    this.ctx.fillRect(10, this.canvasHeight - 20, this.canvasWidth - 20, 20);
  }

  handleKeyDown (key) {
    switch (key) {
    case 'w':
      this.player1.setSpeed(5);
      this.player1.setDirection('up');
      break;
    case 's':
      this.player1.setSpeed(5);
      this.player1.setDirection('down');
      break;
    case 'ArrowUp':
      this.player2.setSpeed(5);
      this.player2.setDirection('up');
      break;
    case 'ArrowDown':
      this.player2.setSpeed(5);
      this.player2.setDirection('down');
      break;
    }
  }

  handleKeyUp (key) {
    switch (key) {
    case 'w':
      this.player1.setSpeed(0);
      this.player1.setDirection('up');
      break;
    case 's':
      this.player1.setSpeed(0);
      this.player1.setDirection('down');
      break;
    case 'ArrowUp':
      this.player2.setSpeed(0);
      this.player2.setDirection('up');
      break;
    case 'ArrowDown':
      this.player2.setSpeed(0);
      this.player2.setDirection('down');
      break;
    }
  }

  doFrame () {
    this.clearCanvas();
    this.drawGame();
    this.player1.update();
    this.player2.update();
    this.player1.draw();
    this.player2.draw();
    window.requestAnimationFrame(() => {
      this.doFrame();
    });
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
}
