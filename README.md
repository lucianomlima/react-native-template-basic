# React Native Basic App Template

A simple basic template to start a new React Native app with ESLint and custom scripts.

## Requirements

- node
- react-native-cli
- yarn

## Usage

Create a new project passing a template:

```
react-native init [ProjectName] --template basic-app
```

Wait for download dependencies.

### Finish installation

Run `node setup.js` to inject custom scripts and remove unnecessary files.

#### For VSCode users

If you use Path Intellisense extension add the following to `settings.json`:

```json
  "path-intellisense.mappings": {
    "~": "${workspaceRoot}/src"
  }
```

#### Flow configuration

Open `.flowconfig` file. Go to the `[options]` section and find the line where is `module.name_mapper`.
Add this to the next line:

```flow
module.name_mapper='^~\/\(.*\)$' -> '<PROJECT_ROOT>/src/\1'
```

It should look like the following:

```flow
module.name_mapper='^[./a-zA-Z0-9$_-]+\.\(bmp\|gif\|jpg\|jpeg\|png\|psd\|svg\|webp\|m4v\|mov\|mp4\|mpeg\|mpg\|webm\|aac\|aiff\|caf\|m4a\|mp3\|wav\|html\|pdf\)$' -> 'RelativeImageStub'
module.name_mapper='^~\/\(.*\)$' -> '<PROJECT_ROOT>/src/\1'
```

## Includes

- [x] ESlint (extends Airbnb)
- [x] Husky
- [x] Lint Staged
- [x] Prettier
- [x] Flow
- [x] Enzyme

### Custom Scripts

- [x] `android:install` - Run in Release mode
- [x] `ios:install` - Run in Release mode
- [x] `project:clean` - Clean project
- [x] `prettier:check` - Check for unformatted files
- [x] `prettier:all` - Format files
- [x] `flow` - Run Flow
- [x] `lint` - Run lint
- [x] `start` - Start Metro Bundler
- [x] `start:clean` - Start Metro Bundler without cache
- [x] `test` - Run jest
- [x] `test:watch` - Run jest in watch mode

## Contributing

Clone this repo with `git clone https://github.com/lucianomlima/react-native-template-basic react-native-template-basic-app` cause npm needs project dir name to be equal to project name in `package.json`.

To execute the project with your changes, you can use the absolute path of cloned repo with `react-native-cli`:

```
react-native init [PROJECT_NAME] --template file:///path/to/repo
```

## License

MIT
