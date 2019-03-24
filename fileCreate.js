const fs = require('fs');

// fs.rmdir('views',(err) =>{
// return err;
// console.log('ssss');
// });
fs.unlink('./new.html',(err) =>{
     return err;
     console.log('ssss');
    });