//Import fileFunctions
const fileFunctions = require("./fileFunctions");
const options = require("./options");

fileFunctions.addDirectory(options().output ? options().output : `./dist`);

fileFunctions.main(
  `${options().input}`,
  `${options().output ? options().output : `./dist`}`,
  `${options().lang ? options().lang : `en_CA`}`
);
