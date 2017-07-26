const fs = require('fs');

const EXAMPLE_FILE_NAME = 'info.example.plist';
const FILE_NAME = 'info.plist';

fs.createReadStream(EXAMPLE_FILE_NAME).pipe(fs.createWriteStream(FILE_NAME));
