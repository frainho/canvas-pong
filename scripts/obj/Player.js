'use strict';

class Player {
  constructor (ctx, side, canvasWidth, canvasHeight) {
    this.ctx = ctx;
    this.side = side;
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
    this.y = canvasHeight / 2;
    this.width = 10;
    this.height = 120;
    this.speed = 0;
    this.score = 0;
    this.direction = null;

    if (this.side === 'left') {
      this.x = 20;
    } else {
      this.x = canvasWidth - 20;
    }
  }

  draw () {
    this.ctx.beginPath();
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
    this.ctx.fillStyle = 'grey';
    this.ctx.font = '150px Arial';
    if (this.side === 'left') {
      this.ctx.fillText(this.score, this.canvasWidth / 2 - 100, 150);
    } else {
      this.ctx.fillText(this.score, this.canvasWidth / 2 + 100, 150);
    }
  }

  setSpeed (speed) {
    this.speed = speed;
  }

  setDirection (direction) {
    this.direction = direction;
  }

  update () {
    switch (this.direction) {
    case 'up':
      this.moveUp();
      break;
    case 'down':
      this.moveDown();
      break;
    }
  }

  moveUp () {
    this.y -= this.speed;
  }

  moveDown () {
    this.y += this.speed;
  }

  setPosition (offset, direction) {
    if (direction === 'up') {
      this.y += offset;
    } else {
      this.y -= offset;
    }
  }
}
