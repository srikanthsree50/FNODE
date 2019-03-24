const fs = require('fs');

fs.writeFile('./new.html','this is new html ','UTF-8', (err) => {
    if(err) return err;
    console.log('file written successfully...');
})