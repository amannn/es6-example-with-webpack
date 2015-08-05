export default class Shape {

  _x;
  _y;
  _color = 'rgb(73, 118, 150)';

  constructor(x = 0, y = 0) {
    this._x = x;
    this._y = y;
  }

  renderToString() {
    throw new Error('This function is abstract. Please subclass Shape and override this method.');
  }
}
