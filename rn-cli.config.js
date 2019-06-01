const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');

const EMPTY_LINE = '';
const deleteFile = filename => {
  try {
    return fs.unlinkSync(path.join(__dirname, filename));
  } catch (error) {}
}

const packagePath = path.join(__dirname, 'package.json');
const packageJSON = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

const versionString = packageJSON.dependencies['react-native'];
const versionNumber = parseInt(versionString.replace(/\./g, ''));

console.log(EMPTY_LINE);

if (versionNumber >= 570 && versionNumber < 575) {
  console.log('🛠  Fix React-Native@0.57.x installation...');
  console.log(' -> Cleaning React Native cache...');
  execSync('rm -Rf .rncache', {
    cwd: os.homedir()
  });

  console.log(' -> Downloading third-party...');
  execSync('sh ./scripts/ios-install-third-party.sh', {
    cwd: 'node_modules/react-native',
    stdio: 'ignore'
  });
  console.log(' -> Setup Glog...');
  execSync('./configure', {
    cwd: 'node_modules/react-native/third-party/glog-0.3.5',
    stdio: 'ignore'
  });
}

console.log(EMPTY_LINE);
console.log('📝 Extending package.json...');

// Inject config in package.json
const scripts = require('./scripts.json');
const extension = require('./extension.json');

const updatedPackageJSON = Object.assign({}, packageJSON, scripts, extension);
fs.writeFileSync(packagePath, JSON.stringify(updatedPackageJSON, null, 2));

console.log('⚙️  Resolve Enzyme dependencies...');

const reactVersion = updatedPackageJSON.dependencies['react'];
execSync(`yarn add --dev react-dom@${reactVersion}`, {
  stdio: 'ignore'
});

// Remove files
deleteFile('LICENSE');
deleteFile('README.md');
deleteFile('devDependencies.json');
deleteFile('extension.json');
deleteFile('scripts.json');
deleteFile('rn-cli.config.js');
deleteFile('App.js');

console.log(`✅ Finished!`);
