#!/usr/bin/env node
const yargs = require(`yargs`);
const config = require(`../package.json`);

//Import fileFunctions
const fileFunctions = require("./fileFunctions");
const options = yargs
  .usage(`Usage: -i <path>`)
  .option(`input`, {
    alias: `i`,
    describe: `Path to file`,
    type: `string`,
    demandOption: true,
  })
  .option(`output`, {
    alias: `o`,
    describe: `Output directory for html parsed files`,
    type: `string`,
  })
  .option(`lang`, {
    alias: `l`,
    describe: `Language attribute in HTML file`,
    type: `string`,
  })
  .help("h")
  .alias("h", "help")
  .version(`octo ${config.version}`)
  .alias(`v`, `version`).argv;

//Using fileFuntions methods
fileFunctions.addDirectory(options.output ? options.output : `./dist`);

fileFunctions.main(
  `${options.input}`,
  `${options.output ? options.output : `./dist`}`,
  `${options.lang ? options.lang : `en-CA`}`
);
