## React Native Basic App Template

A simple basic template to start a new React Native app with ESLint and custom scripts.
Now supports React Native v0.57.x

### Requirements

- react-native-cli
- yarn

### Usage

Create a new project passing a template:

```
react-native init [ProjectName] --template basic-app
```

Wait for download dependencies. At finish run:

```
yarn start
```

To inject custom scripts and remove unnecessary files.

### Includes

- [x] ESlint (extends Airnbn)
- [x] Lint Staged

### Custom Scripts

- [x] `android:build` - Generate Release APK
- [x] `android:install` - Run in Release mode
- [x] `android:shake` - Show DEV menu
- [x] `ios:install` - Run in Release mode
- [x] `project:clean` - Clean project
- [x] `precommit` - Run tasks before commit
- [x] `lint` - Run lint
- [x] `start` - Start Metro Bundler
- [x] `start:clean` - Start Metro Bundler without cache
- [x] `test` - Run jest
- [x] `test:watch` - Run jest in watch mode

### Roadmap

- [ ] Add Prettier
- [ ] Add Flow
- [ ] Add Enzyme
- [ ] Add Husky

### License

MIT
