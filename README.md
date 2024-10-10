# SVG Logo Maker

An interactive command-line tool that enables users to create customizable SVG logos based on their input. This application guides users through a series of prompts, generates an SVG file, and saves it in the local directory.

## Usage

- Requires Node v12+. (This app has been tested on Node 16)
- Run `npm install` to download dependencies.
- Execute `node index.js` to start the app.
  - Follow the prompts to generate a logo.
  - The logo will be saved as `logo.svg` in the working directory.
- Run tests using `npm run test`

## Features

- Command-line tool for generating custom SVG logos.
- Interactive user prompts utilizing Inquirer.js.
- Supports various shapes (circle, triangle, square) and color options for personalization.
- Simple and efficient SVG creation process.
- Automatically saves the generated output to a .svg file.

## References

- [MDN Web Docs: SVG Tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Introduction)
- [SVG Marketplace Extension](https://marketplace.visualstudio.com/items?itemName=jock.svg)
- [Inquirer.js GitHub Repository](https://github.com/SBoudrias/Inquirer.js)
- [Jest Testing Framework](https://jestjs.io/)
