const fs = require('fs');
const path = require('path');

const deleteFile = filename => {
  try {
    return fs.unlinkSync(path.join(__dirname, filename));
  } catch (error) {}
}

console.log('🔁 Applying custom scripts...');

// Inject scripts in package.json
const scripts = require('./scripts.json');
const packageJSON = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
const updatedPackageJSON = Object.assign({}, packageJSON, scripts);
fs.writeFileSync(path.join(__dirname, 'package.json'), JSON.stringify(updatedPackageJSON, null, 2));

// Remove files
deleteFile('LICENSE');
deleteFile('README.md');
deleteFile('devDependencies.json');
deleteFile('scripts.json');
deleteFile('rn-cli.config.js');

console.log(`🆗 Finished.`);
