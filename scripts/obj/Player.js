'use strict';

class Player {
  constructor (ctx, initialX, initialY, width, height, side) {
    this.ctx = ctx;
    this.x = initialX;
    this.y = initialY;
    this.width = width * 2;
    this.height = height * 2;
    this.speed = 0;
    this.direction = null;
    this.side = side;
  }

  draw () {
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(this.x - this.width, this.y - this.height, this.width * 2, this.height * 2);
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
}
