# Making a module

## Project Setup
---
#### Clone this repo
```
git clone https://github.com/yankaindustries/web-module-starter.git your-module-name
```
#### Set your node version to match the masterclass repo node version
This comes in handy later when using `npm link` to test your module
```
nvm use
```
#### Install dependencies
```
yarn install
```
#### Start development scripts
This will start all of the required scripts to bundle the javascript and stylesheets. It will also start a dev server, which will have it's URL displayed in the console.
```
yarn start
```
#### Now get to work!
1. `assets/js/main.js` - Your main entry point, where your module should live. This is where your exports should be.
2. `assets/js/preview.js` - This file is **only** used for development purposes. It is included in `public/index.html` so that you may test your module in the dev server.
3. `assets/styles/main.scss` - Your main entry point for any styles your module might need.
4. `assets/styles/preview.scss` - Any styles you need to preview your module in `public/index.html`
5. `public/index.html` - If you need some HTML to test your module

## Testing your module in the masterclass repo
---
An alternative to using `public/index.html` is to test your module inside of the main repo. We'll be using `npm link` so you don't need to push every time you want to update your code. **Make sure your node versions are matching between the two repos.**
1. Set the `name` value in your `package.json` to `@masterclass/mc-your-module-name`
2. Set `config.moduleName` in `package.json`. Your module will be assigned to this variable when imported in rails/sprockets (not needed for webpack/es6)
3. In the root directory of this module enter `npm link`
4. Now in the masterclass repo, cd into the directory that has the `package.json` file you wish to test this module in. *Probably `vendor/assets` or just `/`*. Run `npm link @masterclass/mc-your-module-name`
5. Import your module
    - es6: `import myModule from '@masterclass/mc-your-module-name'`
    - coffeescript: `#= require @masterclass/mc-your-module-name/dist/main.js`
        - will be assigned to variable from `config.moduleName` setting
6. Have `yarn start` running or run `yarn build`. Any changes made here should be linked to the main repo.

## Publishing your module (Git)
---
1. Create a new public repo
2. Rename the current origin to upstream `git remote rename origin upstream`
3. Add the remote from your newly created repo `git remote add origin *your link*`
2. Set the `name` value in your `package.json` to `@masterclass/mc-your-module-name`
3. Set `config.moduleName` in `package.json`. Your module will be assigned to this variable when imported in rails/sprockets (not needed for webpack/es6)
4. Commit all of your files and then run `npm version 0.0.0` or whatever version number you want to start with.
5. Push your code! `git push -u origin master && git push origin master --tags`. This will push all of your code an create a release for `v0.0.0`
6. Now you can add your module to any `package.json` as `"@masterclass/mc-your-module-name": "yankainsustries/mc-your-repo-name#0.0.0"`
7. Install your module with `yarn install`

## Updating your module
---
1. Make sure all of your changes are committed
2. Run `npm version patch` to bump your version number
3. `git push origin master && git push origin master --tags`
4. Update the version number where your package is being used and run `yarn install`
