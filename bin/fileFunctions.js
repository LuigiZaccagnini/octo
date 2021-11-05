const fs = require(`fs`);
const pathModule = require("path");
const readline = require(`readline`);
const { once } = require("events");
const showdown = require("showdown");
showdown.setFlavor("github");

/**
 * Function that creates a directory at the given path
 * @param    {String} directory     Path where directory is created
 */
const addDirectory = (directory) => {
  try {
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory);
    } else {
      fs.rmSync(directory, { recursive: true }, (err) => {
        if (err) {
          throw err;
        }
      });
      fs.mkdirSync(directory);
    }
  } catch (err) {
    console.error(err);
  }
};

/**
 * Function that writes content to a file at a output path
 * @param    {String} file          The name of the file that will be written
 * @param    {String} content       The information that will be written to the file
 * @param    {String} output        Output path for where the file is written
 */
const writeFile = (file, content, output) => {
  fs.writeFile(`${output}/${file}`, content, (err) => {
    if (err) {
      console.error(`This is the write file error \n${err}\n`);
    }
  });
};

/**
 * Function that validates a line from a file
 * @param    {String} line          line from a file
 * @param    {Boolean} isFirstLine  check if the line from the file is the first line
 */
const lineChecker = (line, isFirstLine) => {
  let document = ``;

  if (line !== "" && isFirstLine) {
    document += `<h1>${line}</h1>`;
  } else if (line !== "" && !isFirstLine) {
    document += `<p>${line}</p>`;
  } else if (line === "") {
    document += "<br />";
  }

  return document;
};

/**
 * Function that turns text from a .txt file into HTML
 * @param    {String} path          Path to the text file that will be converted to HTML
 * @return   {String}               Text that is converted into HTML
 */
const textToHTML = async (path, lang) => {
  let firstLine = true;
  let document = `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><title>Filename</title><meta name="viewport" content="width=device-width, initial-scale=1"></head><body>`;

  let lineReader = readline.createInterface({
    input: fs.createReadStream(path, { encoding: "utf8" }),
  });

  lineReader.on("line", function (line) {
    if (firstLine) {
      document += lineChecker(line, firstLine);
      firstLine = false;
    } else {
      document += lineChecker(line, firstLine);
    }
  });

  await once(lineReader, "close");
  document += `</body></html>`;
  return document;
};

//This function will call when .md is input
const markdownToHTML = async (path, lang) => {
  let document = `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><title>Filename</title><meta name="viewport" content="width=device-width, initial-scale=1"></head><body>`;

  try {
    var data = fs.readFileSync(path, "utf8");
    document += new showdown.Converter().makeHtml(data);
  } catch (error) {
    console.log(error);
  }

  document += `</body></html>`;
  return document;
};

/**
 * Function that reads all files recursively
 * @param    {String} path          Path to the text file that will be converted to HTML
 * @param    {String} output        Output path for the all the files
 */
const main = (path, output, lang) => {
  fs.lstat(path, (err, stats) => {
    if (err) return console.log(`This is main Error \n${err}`);

    if (stats.isDirectory()) {
      fs.readdirSync(path).forEach((file) => {
        main(`${path}/${file}`, output, lang);
      });
    }

    if (stats.isFile()) {
      //Added code to check file input extension
      if (path.includes(".txt")) {
        return textToHTML(path, lang).then((data) => {
          writeFile(pathModule.basename(path, ".txt") + ".html", data, output);
        });
      }

      //Check if the file is .md file
      if (path.includes(".md")) {
        return markdownToHTML(path, lang).then((data) => {
          writeFile(pathModule.basename(path, ".md") + ".html", data, output);
        });
      }

      return console.log("The tool only supports .txt and .md files!!");
    }
  });
};

//Fixed module will export functions created
module.exports = {
  main,
  addDirectory,
};
