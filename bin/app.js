#!/usr/bin/env node
const yargs = require(`yargs`);

const options = yargs
  .usage(`Usage: -i <path>`)
  .option(`input`, {
    alias: `i`,
    describe: `Path to file`,
    type: `string`,
    demandOption: true,
  })
  .help("h")
  .alias("h", "help")
  .version()
  .alias(`v`, `version`).argv;

const greeting = `Path: ${options.input}`;
console.log(greeting);
