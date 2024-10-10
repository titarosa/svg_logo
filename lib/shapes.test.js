const { SquareShape, TriangularShape, CircularShape } = require("./shapes");

describe("CircularShape", () => {
  test("renders SVG for a green circle", () => {
    const expectedOutput = '<circle cx="150" cy="100" r="80" fill="green" />';
    const circle = new CircularShape();
    circle.updateColor("green");
    const renderedOutput = circle.display();
    expect(renderedOutput).toEqual(expectedOutput);
  });

  test("accepts a fillColor parameter", () => {
    const expectedOutput = '<circle cx="150" cy="100" r="80" fill="blue" />';
    const circle = new CircularShape();
    circle.updateColor("blue");
    const renderedOutput = circle.display();
    expect(renderedOutput).toEqual(expectedOutput);
  });
});

describe("TriangularShape", () => {
  test("renders SVG for a green polygon", () => {
    const expectedOutput =
      '<polygon points="150, 18 244, 182 56, 182" fill="bisque" />';
    const triangle = new TriangularShape();
    triangle.updateColor("bisque");
    const renderedOutput = triangle.display();
    expect(renderedOutput).toEqual(expectedOutput);
  });

  test("accepts a fillColor parameter", () => {
    const expectedOutput =
      '<polygon points="150, 18 244, 182 56, 182" fill="purple" />';
    const triangle = new TriangularShape();
    triangle.updateColor("purple");
    const renderedOutput = triangle.display();
    expect(renderedOutput).toEqual(expectedOutput);
  });
});

describe("SquareShape", () => {
  test("renders SVG for a green rectangle", () => {
    const expectedOutput =
      '<rect x="90" y="40" width="120" height="120" fill="dodgerblue" />';
    const square = new SquareShape();
    square.updateColor("dodgerblue");
    const renderedOutput = square.display();
    expect(renderedOutput).toEqual(expectedOutput);
  });

  test("accepts a fillColor parameter", () => {
    const expectedOutput =
      '<rect x="90" y="40" width="120" height="120" fill="red" />';
    const square = new SquareShape();
    square.updateColor("red");
    const renderedOutput = square.display();
    expect(renderedOutput).toEqual(expectedOutput);
  });
});
