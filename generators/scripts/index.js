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

    var eZHTMLScriptsGenerator,
        Q = require('q'),
        path = require('path'),
        yosay = require('yosay'),
        lodash = require('lodash'),
        slugify = require('slugify'),
        generators = require('yeoman-generator');

    eZHTMLScriptsGenerator = generators.Base.extend({

        constructor: function () {
            generators.Base.apply(this, arguments);

            this.option('skip-install', {
                desc: 'Skip the bower and node installations',
                defaults: false
            });

        },

        initializing: function () {
            // custom templates delimiter
            // this.config.set('rdim', '%>');
            // this.config.set('ldim', '<%=');
        },

        prompting: function () {

            var $this = this,
                prompts = [],
                done = this.async();

            // jQuery version
            prompts.push({
                type: 'list',
                name: 'jquery_version',
                message: 'Choose your jQuery Version',
                choices: [{
                    name: 'jQuery 1.x',
                    value: 'jquery#1',
                    checked: true
                }, {
                    name: 'jQuery 2.x',
                    value: 'jquery#2'
                }]
            });

            // jQuery Plugins
            prompts.push({
                type: 'checkbox',
                name: 'js_plugins',
                message: 'Select jQuery plugins',
                choices: [{
                    name: 'ColorBox',
                    value: 'colorbox'
                }, {
                    name: 'SlidesJS',
                    value: 'SlidesJS3'
                }, {
                    name: 'ToolTipster',
                    value: 'tooltipster'
                }, {
                    name: 'LazyLoad',
                    value: 'jquery.lazyload'
                }, {
                    name: 'TinyScrollbar',
                    value: 'TinyScrollbar'
                }, {
                    name: 'ScrollStop',
                    value: 'jquery-scrollstop'
                }, {
                    name: 'TouchSwipe',
                    value: 'jquery-touchswipe'
                }]
            });

            this.prompt(prompts, function (values) {
                this.config.set('scripts', {
                    jquery: values.jquery_version,
                    plugins: values.js_plugins
                });
                done();
            }.bind(this));

        },

        configuring: function () {},

        writing: function () {},

        install: function () {
            var scripts =  this.config.get('scripts');
            scripts.plugins.push(scripts.jquery);
            this.bowerInstall(scripts.plugins);
        },

        end: function () {}

    });

    module.exports = eZHTMLScriptsGenerator;

}());
