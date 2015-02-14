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

            // HTML5Shiv
            prompts.push({
                type: 'confirm',
                name: 'html5shiv',
                message: 'Use HTML5Shiv ?',
                default: true
            });

            // jQuery version
            prompts.push({
                type: 'list',
                name: 'jquery',
                message: 'Choose your jQuery Version',
                choices: [{
                    name: 'jQuery 1.x',
                    value: 'jquery#1',
                    checked: true
                }, {
                    name: 'jQuery 2.x',
                    value: 'jquery#2'
                }, {
                    name: 'None',
                    value: false
                }]
            });

            // jQuery Plugins
            prompts.push({
                type: 'checkbox',
                name: 'plugins',
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
                    jquery: values.jquery,
                    plugins: values.plugins,
                    html5shiv: values.html5shiv
                });
                done();
            }.bind(this));

        },

        install: function () {
            var components = [],
                scripts = this.config.get('scripts');
            // html5shiv
            if (scripts.html5shiv) {
                components.push('html5shiv');
            }
            // jquery
            if (scripts.jquery) {
                components.push(scripts.jquery);
            }
            // html5shiv
            if (scripts.plugins.length) {
                components = components.concat(scripts.plugins);
            }
            // bower install
            this.bowerInstall(components);
        },

        end: function () {}

    });

    module.exports = eZHTMLScriptsGenerator;

}());
