const axios = require('axios');

let username = 'srikanthsree50';

axios.get('https://api.github.com/' + username).then((res) => {

console.log(res.data);

}).catch((err) => {

console.log(err);

});