// Abstract class for shapes
class AbstractShape {
  constructor() {
    this.fillColor = "";
  }

  updateColor(color) {
    this.fillColor = color;
  }
}

class CircularShape extends AbstractShape {
  display() {
    return `<circle cx="150" cy="100" r="80" fill="${this.fillColor}" />`;
  }
}

class TriangularShape extends AbstractShape {
  display() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.fillColor}" />`;
  }
}

class SquareShape extends AbstractShape {
  display() {
    return `<rect x="90" y="40" width="120" height="120" fill="${this.fillColor}" />`;
  }
}

module.exports = { CircularShape, TriangularShape, SquareShape };

