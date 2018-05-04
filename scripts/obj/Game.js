'use strict';

class Game {
  constructor (ctx, canvasWidth, canvasHeight) {
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    this.player1 = null;
    this.player2 = null;
    this.ball = null;

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
    this.player1 = new Player(this.ctx, 'left', this.canvasWidth, this.canvasHeight);
    this.player2 = new Player(this.ctx, 'right', this.canvasWidth, this.canvasHeight);
    this.ball = new Ball(this.ctx, this.canvasWidth, this.canvasHeight);

    this.players.push(this.player1);
    this.players.push(this.player2);

    this.balls.push(this.ball);

    this.doFrame();
  }

  clearCanvas () {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
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
      break;
    case 's':
      this.player1.setSpeed(0);
      break;
    case 'ArrowUp':
      this.player2.setSpeed(0);
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
    this.checkPlayerCollisionWall();
    this.checkBallCollisionWall();
    this.checkBallCollisionPlayer(this.player1, -1);
    //this.checkBallCollisionPlayer(this.player2, 1);
    this.player1.update();
    this.player2.update();
    this.player1.draw();
    this.player2.draw();
    this.ball.draw();
    this.ball.update();
    window.requestAnimationFrame(() => {
      this.doFrame();
    });
  }

  checkPlayerCollisionWall () {
    this.players.forEach(player => {
      if (player.y - player.height / 2 <= 20) {
        player.setPosition(5, 'up');
      } else if (player.y + player.height / 2 >= this.canvasHeight - 20) {
        player.setPosition(5, 'down');
      }
    });
  }

  checkBallCollisionWall () {
    this.balls.forEach(ball => {
      if (ball.centerY - ball.radius < 20) {
        ball.swapVertDirection();
      } else if (ball.centerY + ball.radius > this.canvasHeight - 20) {
        ball.swapVertDirection();
      }
    });
  }

  checkBallCollisionPlayer (player, sign) {
    this.balls.forEach(ball => {
      const collidesPlayerTop = ball.centerY - ball.radius > player.y - player.height / 2;
      const collidesPlayerBottom = ball.centerY + ball.radius < player.y + player.height / 2;
      const collidesPlayer = ball.centerX - ball.radius < player.x + player.width / 2;

      if (collidesPlayerTop && collidesPlayerBottom) {
        if (collidesPlayer) {
          ball.swapHoriDirection();
        }
      }
    });
  }

  /* checkBallCollisionPlayerLeft() {
    this.balls.forEach(ball => {
      const ballCollidingLeft =
        ball.centerX - ball.radius < this.player1.x + this.player1.width &&
         &&

    });
  }

  checkBallCollisionPlayerRight() {
    this.balls.forEach(ball => {
      const ballCollidingRight =
        ball.centerX + ball.radius > this.player2.x - this.player2.width &&
        ball.centerY - ball.radius > this.player2.y - this.player2.height / 2 &&
        ball.centerY - ball.radius < this.player2.y + this.player2.height / 2;

      if (ballCollidingRight) {
        ball.swapHoriDirection();
      }
    });
  }
 */
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
