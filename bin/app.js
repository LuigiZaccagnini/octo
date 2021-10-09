#!/usr/bin/env node
const { argv, option } = require("yargs");
const yargs = require(`yargs`);
const package = require(`../package.json`);
const fs = require("fs");

//Import fileFunctions
const fileFunctions = require("./fileFunctions");
const options = yargs
  .usage(`Usage: -i <path>`)
  .option(`input`, {
    alias: `i`,
    describe: `Path to file`,
    type: `string`,
    demandOption: false,
  })
  .option(`output`, {
    alias: `o`,
    describe: `Output directory for html parsed files`,
    type: `string`,
  })
  .options(`config`, {
    alias: `c`,
    describe: `Configuration file`,
    default: "",
    type: `array`,
    demandOption: false,
  })
  .option(`lang`, {
    alias: `l`,
    describe: `Language attribute in HTML file`,
    type: `string`,
  })
  .help("h")
  .alias("h", "help")
  .version(`octo ${package.version}`)
  .alias(`v`, `version`).argv;

//Using fileFuntions methods
fileFunctions.addDirectory(options.output ? options.output : `./dist`);

//ignore the rest if Configuration is specified
const filePath = options.config || options.input;
if (!filePath) {
  console.log(`Please choose either -i option or -c option!!!`);
}

fileFunctions.getPathInfo(
  `${options.input}`,
  `${options.output ? options.output : `./dist`}`,
  `${options.lang ? options.lang : `en-CA`}`
);
