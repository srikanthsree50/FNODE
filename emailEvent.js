const emitter = require('./modules/sendEmail');

emitter.on('emailEvent', (message) => {
    console.log(`Email: ${message}`);
});

emitter.emit('emailEvent', 'send activation mail to user after registration');