const express = require('express');

let app = express();

app.get('/post/:id',(req,res) =>{

res.send(` <p> here is ${req.params.id}</p>`);

}).listen(8080)