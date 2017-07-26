const fs = require('fs');
const EXAMPLE_IDENTIFIER = '.example';

const files = [
    'info.example.plist'
];

files.forEach(file => {
    fs.createReadStream(file).pipe(fs.createWriteStream(file.replace(EXAMPLE_IDENTIFIER, '')));
});
