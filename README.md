## React Native Basic Template

A simple basic template to start a new React Native app with ESLint and custom scripts.

### Requirements

- react-native-cli
- yarn

### Usage

Create a new project passing a template:

```
react-native init [ProjectName] --template basic
```

Wait for download dependencies. At finish run:

```
yarn start
```

To inject custom scripts and remove unnecessary files.

### Includes

- [x] ESlint (extends Airnbn)

### Custom Scripts

- [x] `android:build` - Generate Release APK
- [x] `android:install` - Run in Release mode
- [x] `android:shake` - Show DEV menu
- [x] `ios:install` - Run in Release mode
- [x] `project:clean` - Clean project
- [x] `lint` - Run lint
- [x] `start` - Start Metro Bundler
- [x] `start:clean` - Start Metro Bundler without cache
- [x] `test` - Run jest
- [x] `test:watch` - Run jest in watch node_modules

### Roadmap

- [ ] Add Prettier
- [ ] Add Flow
- [ ] Add Enzyme
- [ ] Add Lint Staged
- [ ] Add Husky
