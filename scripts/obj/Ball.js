'use strict';

class Ball {
  constructor (ctx, canvasWidth, canvasHeight) {
    this.ctx = ctx;
    this.centerX = canvasWidth / 2;
    this.centerY = canvasHeight / 2;
    this.radius = 10;
    this.directionV = 1;
    this.directionH = 1;
  }

  draw () {
    this.ctx.fillStyle = 'white';
    this.ctx.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  swapVertDirection () {
    this.directionV = -this.directionV;
  }

  swapHoriDirection () {
    this.directionH = -this.directionH;
  }

  update () {
    this.centerY = this.directionV + this.centerY;
    this.centerX = this.directionH + this.centerX;
  }
}
