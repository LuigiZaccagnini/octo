## Tool Setup for Development

### Global

This builds Octo so you can access it anywhere on your computer using the `octo` command.

- Clone the repository
- `cd` into the folder
- run `npm i` to install all dependencies
- run `npm install -g .`

### Non-Global

- Clone the repository
- `cd` into the folder
- run `npm i` to install all dependencies
- run `npm run prepare` to install husky
- `cd` into the `bin`
- run `node app`

Every time you commit or push, husky will run some commands to make sure the code is formatted and not broken.
Everything is automatic once the setup is done so you can focus on coding without problems!

Here are some of the npm commands:

- build: Formats with prettier and checks for eslint errors. Eslint will also try to fix any problems if any.
- test: Tests prettier and eslint to find any problems.
- eslint: Checks all files for errors.
- eslint-fix: Tries to fix any simple eslint errors (ex. missing semicolon).
- prettier: Formats all documents in the project.
- prettier-check: Checks to make sure all documents are formatted.

### Extensions

The extensions we use are:

- prettier
- eslint
- code-spell-checker

Visual Studio Code should ask you to download these once you open up our project!

## Tests

### Running tests

To run tests for the project, you can just run the command `npm test`. This will run all of the tests within the test folder. If you want to run tests while changing code, you can run `yarn test --watch`. This will let jest constantly watch any changes within the code and run a test each time it changes.

### Writing Tests

To start, this project uses [Jest](https://jestjs.io/) for all of it's testing. All tests will be written within the files of the test folder. If you need to create a new test file for a new module, use the format of `fileName.test.js` and have it placed in the test folder.

### Creating a Coverage report

To quickly create a coverage report, you can use the command `npm run coverage`. This will create a report under the coverage folder showing all the details about the amount of missing and tested parts of the code.
