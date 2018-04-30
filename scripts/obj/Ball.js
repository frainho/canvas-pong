'use strict';

class Ball {
  constructor (ctx, canvasWidth, canvasHeight) {
    this.ctx = ctx;
    this.centerX = canvasWidth / 2;
    this.centerY = canvasHeight / 2;
    this.radius = 10;
  }

  draw () {
    this.ctx.fillStyle = 'white';
    this.ctx.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI);
    this.ctx.fill();
  }
}
