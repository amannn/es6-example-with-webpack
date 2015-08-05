/**
 * Import modules from other files.
 *
 * This example assumes that Shape.js lies in the same directory as this file.
 */
import Shape from './Shape';

/**
 * Native classes which can inherit from other classes. This class
 * is also exported, so it can be used in other files.
 */
export default class Rectangle extends Shape {

  /**
   * Static methods.
   */
  static getName() {
    return 'Rectangle';
  }

  /**
   * Class properties.
   */
  _width = undefined;
  _height = undefined;

  /**
   * Constructor with default parameters.
   */
  constructor(x = 0, y = 0, width = 200, height = 20) {
    super(x, y);
    this._width = width;
    this._height = height;
  }

  /**
   * Class methods that can override methods for parent classes.
   */
  renderToString() {
    /**
     * `` strings can output variables with ${…}
     */
    return `
      <div style="
        position: absolute;
        left: ${this._x}px;
        top: ${this._y}px;
        width: ${this._width}px;
        height: ${this._height}px;
        background: ${this._color};
        padding: 10px;
        color: white;
        text-align: center;
      ">${Rectangle.getName()}</div>
    `;
  }

  /**
   * Getters and setters.
   */
  get width() { return this._width; }
  set width(val) { this._width = val; }
}
