const express = require('express');

const port = process.env.PORT || 8080;

let app =express();

app.get('/', (req,res) => {
    res.send('<h1> HELLO </h1>');
})


app.get('/api', (req,res) => {
    res.send('<h1> API PAGE </h1>');
})


app.listen(port);

console.log('its working....');