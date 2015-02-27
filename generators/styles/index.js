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

    var eZHTMLStylesGenerator,
        Q = require('q'),
        path = require('path'),
        yosay = require('yosay'),
        lodash = require('lodash'),
        slugify = require('slugify'),
        generators = require('yeoman-generator');

    eZHTMLStylesGenerator = generators.Base.extend({

        constructor: function () {

            generators.Base.apply(this, arguments);

            this.option('skip-install', {
                desc: 'Skip the bower and node installations',
                defaults: false
            });

        },

        initializing: function () {},

        prompting: function () {

            var $this = this,
                prompts = [],
                done = this.async();

            // css frameworks
            prompts.push({
                type: 'list',
                name: 'reset',
                message: 'Choose a CSS reset',
                choices: [{
                    name: 'Eric Meyer\'s reset',
                    value: 'reset-css',
                    checked: true
                }, {
                    name: 'Normalize',
                    value: 'normalize-css'
                }, {
                    name: 'Cordova reset',
                    value: 'cordova-css-reset'
                }, {
                    name: 'None',
                    value: false
                }]
            });

            // css frameworks
            prompts.push({
                type: 'list',
                name: 'framework',
                message: 'Choose a CSS Framework',
                choices: [{
                    name: 'Unsemantic',
                    value: 'unsemantic',
                    checked: true
                }, {
                    name: 'KNACSS',
                    value: 'knacss'
                }, {
                    name: 'Bootstrap',
                    value: 'bootstrap'
                }, {
                    name: 'None',
                    value: false
                }]
            });

            this.prompt(prompts, function (values) {
                this.config.set('styles', {
                    reset: values.reset,
                    framework: values.framework
                });
                done();
            }.bind(this));

        },

        install: function () {
            var components = [],
                styles = this.config.get('styles');
            //reset
            if (styles.reset) {
                components.push(styles.reset);
            }
            // framework
            if (styles.framework) {
                components.push(styles.framework);
            }
            // bower install
            if (components.length) {
                this.bowerInstall(components, {
                    save: true
                });
            }
        },

        end: function () {}

    });

    module.exports = eZHTMLStylesGenerator;

}());
