const SvgGraphic = require("./svg");
const { Square } = require("./shapes");

describe("SvgGraphic", () => {
  test("should create a 300 x 200 svg element", () => {
    const expectedOutput =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
    const svgGraphic = new SvgGraphic();
    expect(svgGraphic.generate()).toEqual(expectedOutput);
  });

  test("should add a text element", () => {
    const expectedOutput =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">A</text></svg>';
    const svgGraphic = new SvgGraphic();
    svgGraphic.addText("A", "white");
    expect(svgGraphic.generate()).toEqual(expectedOutput);
  });

  test("should set text message and color correctly", () => {
    const expectedOutput =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';
    const svgGraphic = new SvgGraphic();
    svgGraphic.addText("SVG", "#333");
    expect(svgGraphic.generate()).toEqual(expectedOutput);
  });

  test("should throw error if text exceeds 3 characters", () => {
    const errorMessage = new Error("Text must not exceed 3 characters.");
    const svgGraphic = new SvgGraphic();
    expect(() => svgGraphic.addText("HELLO", "#333")).toThrow(errorMessage);
  });

  test("should include a shape in the svg", () => {
    const expectedOutput =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="dodgerblue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';
    const svgGraphic = new SvgGraphic();
    svgGraphic.addText("SVG", "#333");
    const squareShape = new Square();
    squareShape.setColor("dodgerblue");
    svgGraphic.addShape(squareShape);
    expect(svgGraphic.generate()).toEqual(expectedOutput);
  });
});
