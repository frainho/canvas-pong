'use strict';

class Canvas {
  constructor (width, height) {
    this.canvas = document.createElement('canvas');
    this.canvas.setAttribute('width', width);
    this.canvas.setAttribute('height', height);

    this.container = document.querySelector('.container');
    this.container.appendChild(this.canvas);

    this.ctx = this.canvas.getContext('2d');
  }
}
