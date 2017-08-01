const fs = require('fs');
const EXAMPLE_IDENTIFIER = '.example';

const files = [
    'info.example.plist'
];

files.forEach(file => {
    const newFile = file.replace(EXAMPLE_IDENTIFIER, '');
    fs.unlink(newFile, () => {
        fs.createReadStream(file).pipe(fs.createWriteStream(newFile));
    });
});
