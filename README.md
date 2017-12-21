# Web Module Starter
This is a generic starter project for creating a standalone web module with a javascript bundle and styles.

### Installation
```
yarn install
```
Change "moduleName" in package.json to desired library name

### Usage
Development, starts a dev server and watches js/scss
```
yarn start
```
Production, builds the js and css
```
yarn build
```
 
### Testing
We use Jest for testing. All you need to do is create a file named *.test.js and jest will run it.

Run Jest tests. Tests will also run in the prepublish script.
```
yarn test
```
