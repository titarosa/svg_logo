const inquirer = require("inquirer");
const SVG = require("./svg");
const { CircularShape, TriangularShape, SquareShape } = require("./shapes");
const { writeFile } = require("fs/promises");

class CommandLineInterface {
  async execute() {
    try {
      const responses = await this.promptUser();
      const { text, textColor, shapeType, shapeColor } = responses;
      const shape = this.createShape(shapeType);

      shape.updateColor(shapeColor); // Updated method name

      const svg = new SVG();
      svg.addText(text, textColor);
      svg.addShape(shape);

      await writeFile("logo.svg", svg.generate());
      console.log("Generated logo.svg");
    } catch (error) {
      console.error(error);
      console.log("Oops! Something went wrong.");
    }
  }

  async promptUser() {
    return inquirer.prompt([
      {
        name: "text",
        type: "input",
        message: "Enter text for the logo (maximum 3 characters):",
        validate: (input) =>
          input.length <= 3 || "The message must not exceed 3 characters.",
      },
      {
        name: "textColor",
        type: "input",
        message: "Enter a text color:",
      },
      {
        name: "shapeType",
        type: "list",
        message: "Choose a shape for the logo:",
        choices: ["circle", "square", "triangle"],
      },
      {
        name: "shapeColor",
        type: "input",
        message: "Enter a shape color:",
      },
    ]);
  }

  createShape(type) {
    switch (type) {
      case "circle":
        return new CircularShape();
      case "square":
        return new SquareShape();
      default:
        return new TriangularShape();
    }
  }
}

module.exports = CommandLineInterface;
