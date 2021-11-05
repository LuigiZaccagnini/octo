## Tool Setup for Development

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