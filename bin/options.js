#!/usr/bin/env node
const yargs = require(`yargs`);
const config = require(`../package.json`);

const options = (args = process.argv.slice(2)) =>
  yargs(args)
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
      default: `./dist`,
    })
    .option(`lang`, {
      alias: `l`,
      describe: `Language attribute in HTML file`,
      type: `string`,
      default: `en_CA`,
    })
    .help("h")
    .alias("h", "help")
    .version(`octo ${config.version}`)
    .alias(`v`, `version`).argv;
//Using fileFuntions methods

module.exports = options;
