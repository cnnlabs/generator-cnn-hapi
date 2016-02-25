'use strict';

const generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    initializing: {
        base: function () {
            this.composeWith('cnn-base:app');
        }
    },

    writing: {
        copyFiles: function () {
            this.fs.copy(this.templatePath('./'), this.destinationPath('./'));
        }
    },

    install: {
        npmInstall: function () {
            this.npmInstall(['cnn-hapi'], {save: true});
        }
    },

    end: {
        message: function () {
            this.log('Finished generating cnn-hapi');
        }
    }
});
