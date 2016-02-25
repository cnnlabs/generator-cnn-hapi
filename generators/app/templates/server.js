'use strict';

const hapi = require('cnn-hapi');

let app = hapi({
    directory: __dirname,
    port: process.env.PORT,
    withSwagger: true
});

app.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello router');
    }
});

app.start(function () {
    console.log('App Starting');
});
