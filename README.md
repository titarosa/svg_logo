# SVG Logo Maker

A command-line tool that allows users to generate custom SVG logos based on their input. This tool walks users through a series of prompts, generates an SVG file, and saves it to the local directory.

## Usage

- Requires Node v12+. (This app has only been tested on Node 16)
- Run `npm install` to download dependencies.
- Run `node index.js` to start the app.
  - Answer questions to generate a logo.
  - Logo will be written to `logo.svg` in the working directory.
- Run tests with `npm run test`

## Features
-  Command-line tool to generate custom SVG logos.
- Interactive user prompts using Inquirer.js.
- Supports various shapes (circle, triangle, square) and colors for personalization.
- Simple and efficient SVG creation.
- Automatically saves the output to a .svg file.

## References

<https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Introduction>
<https://marketplace.visualstudio.com/items?itemName=jock.svg>
<https://github.com/SBoudrias/Inquirer.js>
<https://jestjs.io/>
