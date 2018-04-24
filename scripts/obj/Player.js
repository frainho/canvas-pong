'use strict';

class Player {
  constructor (ctx, initialX, initialY, width, height) {
    this.ctx = ctx;
    this.initialX = initialX;
    this.initialY = initialY;
    this.width = width * 2;
    this.height = height * 2;
  }

  draw () {
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(this.initialX - this.width, this.initialY - this.height, this.width * 2, this.height * 2);
  }
}
