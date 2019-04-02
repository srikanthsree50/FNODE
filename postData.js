const express = require('express');
const bodyParser = require('body-parser');

let app = express();
app.use('/css',express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req,res,next) => {

console.log('middleware');
    next();
})

app.listen(8080);
console.log('working');