const fs = require(`fs`);
const pathModule = require("path");
const readline = require(`readline`);
const { once } = require("events");

/**
 * Function that creates a directory at the given path
 * @author   Luigi Zaccagnini
 * @param    {String} directory     Path where directory is created
 */
module.exports = addDirectory = (directory) => {
  try {
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory);
    } else {
      fs.rmdirSync(directory, { recursive: true }, (err) => {
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
 * @author   Luigi Zaccagnini
 * @param    {String} file          The name of the file that will be written
 * @param    {String} content       The information that will be written to the file
 * @param    {String} output        Output path for where the file is written
 */
module.exports = writeFile = (file, content, output) => {
  fs.writeFile(`${output}/${file}`, content, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

/**
 * Function that turns text from a .txt file into HTML
 * @author   Luigi Zaccagnini
 * @param    {String} path          Path to the text file that will be converted to HTML
 * @return   {String}               Text that is converted into HTML
 */
module.exports = textToHTML = async (path) => {
  let firstLine = true;
  let doc = ``;
  let paragraph = ``;

  let lineReader = readline.createInterface({
    input: fs.createReadStream(path, { encoding: "utf8" }),
  });

  doc += `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Filename</title><meta name="viewport" content="width=device-width, initial-scale=1"></head><body>`;

  lineReader.on("line", function (line) {
    if (line !== `` && firstLine) {
      doc += `<p>${line}`;
      paragraph += `${line}`;
      firstLine = false;
    } else if (line !== `` && !firstLine) {
      doc += `${line}`;
      paragraph += `${line}`;
    } else if (line === `` && paragraph !== ``) {
      doc += `</p>`;
      paragraph = ``;
      firstLine = true;
    }
  });

  await once(lineReader, "close");
  doc += `</p></body></html>`;
  return doc;
};

/**
 * Function that reads all files recursively
 * @author   Luigi Zaccagnini
 * @param    {String} path          Path to the text file that will be converted to HTML
 * @param    {String} output        Output path for the all the files
 */
module.exports = getPathInfo = (path, output) => {
  fs.lstat(path, (err, stats) => {
    if (err) return console.log(err);

    if (stats.isDirectory()) {
      fs.readdirSync(path).forEach((file) => {
        getPathInfo(`${path}/${file}`, output);
      });
    }

    if (stats.isFile()) {
      textToHTML(path).then((data) => {
        doc = data;
        writeFile(pathModule.basename(path, ".txt") + ".html", doc, output);
      });
    }
  });
};
