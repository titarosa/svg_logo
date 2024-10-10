class SvgGraphic {
  constructor() {
    this.textContent = "";
    this.shapeContent = "";
  }

  generate() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeContent}${this.textContent}</svg>`;
  }

  addText(text, color) {
    if (text.length > 3) {
      throw new Error("Text must not exceed 3 characters.");
    }
    this.textContent = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }

  addShape(shape) {
    this.shapeContent = shape.display();
  }
}

module.exports = SvgGraphic;

