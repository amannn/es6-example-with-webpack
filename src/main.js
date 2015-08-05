import Rectangle from './Rectangle.js';

let body = document.querySelector('body');
let rect = new Rectangle(20, 40);
body.innerHTML = rect.renderToString();
