#!/usr/bin/env node
const fs = require(`fs`);
const yargs = require(`yargs`);
const ff = require(`./fileFunctions`);
const pathModule = require(`path`);

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
  .help("h")
  .alias("h", "help")
  .version()
  .alias(`v`, `version`).argv;

addDirectory(options.output ? options.output : `./dist`);

getPathInfo(
  `${options.input}`,
  `${options.output ? options.output : `./dist`}`
);
