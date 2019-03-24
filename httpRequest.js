const https = require('https');
const fs = require('fs');

const url = 'https://www.google.com';

https.get(url, res => {

    res.setEncoding('utf8');

    let body ='';

    res.on('data', data => {
        body += data;
    })
})