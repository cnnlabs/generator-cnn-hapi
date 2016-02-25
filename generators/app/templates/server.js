'use strict';

/*
 * Example application that uses cnn-hapi as a dependency to provide a basic
 * Hapi server with built in features that this example doesn't need to care
 * about.
 *
 * See the comments inline for changes that would be typical in an external app
 */

const hapi = require('cnn-hapi');

let app = module.exports = hapi({
    directory: __dirname,
    port: process.env.PORT,
    withSwagger: true,
    withNavigation: false,
    metrics: {provider: require('cnn-metrics'), options: {flushEvery: 1000 * 20}},
    layoutsDir: `${__dirname}/views/`
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
