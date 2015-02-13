/**
 * Grunt Project
 * https://github.com/sixertoy/generator-grunt-project
 *
 * Copyright (c) 2014 Matthieu Lassalvy
 * Licensed under the MIT license.
 *
 * Generate folder and files for a grunt project
 * with grunt basic tasks, jasmine unit testing, istanbul coverage and travis deployement
 *
 * @install npm install grunt-cli yo bower -g
 * @usage yo grunt-project
 *
 *
 */
/*global require, process, module */
(function () {

    'use strict';

    var eZHTMLCondtionnalsGenerator,
        Q = require('q'),
        path = require('path'),
        yosay = require('yosay'),
        lodash = require('lodash'),
        slugify = require('slugify'),
        generators = require('yeoman-generator');

    eZHTMLCondtionnalsGenerator = generators.Base.extend({

        constructor: function () {
            generators.Base.apply(this, arguments);
        },

        initializing: function () {},

        prompting: function () {

            var $this = this,
                prompts = [],
                done = this.async();

            prompts.push({
                type: 'confirm',
                name: 'use_travis',
                message: 'Would you like to use Travis ?',
                default: false
            });

            prompts.push({
                when: function (values) {
                    return values.use_travis;
                },
                type: 'input',
                default: false,
                name: 'travis_apikey',
                message: 'Travis API key ?',
                validate: function (value) {
                    return lodash.isEmpty(value.trim()) ? 'Enter your Travis api key' : true;
                }
            });


            this.prompt(prompts, function (values) {
                this.config.set('conditionnals', {
                        travis: values.use_travis
                });
                done();
            }.bind(this));

        },

        configuring: {},

        writing: function () {},

        install: function () {},

        end: function () {}

    });

    module.exports = eZHTMLCondtionnalsGenerator;

}());
