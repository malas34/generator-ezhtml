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
 * @insatll npm install grunt-cli yo bower -g
 * @usage yo grunt-project
 *
 *
 */
/*global require, process, module */
(function () {

    'use strict';

    var ezHTMLProjectGenerator,
        Q = require('q'),
        FS = require('fs'),
        path = require('path'),
        yosay = require('yosay'),
        appbones = require('appbones'),
        generators = require('yeoman-generator');

    ezHTMLProjectGenerator = generators.Base.extend({

        constructor: function () {
            generators.Base.apply(this, arguments);
            this.option('skip-install', {
                desc: 'Skip the bower and node installations',
                defaults: false
            });
        },

        initializing: function () {
            // custom templates delimiter
            if (!this.options['skip-install']) {
                this.log(yosay('Hello sir, welcome to the awesome ezhtml project generator!'));
            }
        },

        composeGruntproject: function () {
            this.composeWith('gruntproject', {
                options: {
                    'skip-install': true
                }
            });
        },

        prompting: function () {},

        configuring: function () {},

        writing: function () {

            var data,
                $this = this,
                done = this.async(),
                bones = path.resolve(this.templatePath(), '../bones.yml'),
                gen_config = path.resolve(this.destinationPath(), '.yo-rc.json');

            appbones.sourcePath(this.templatePath());
            appbones.destinationPath(this.destinationPath());

            data = JSON.parse(this.read(gen_config));
            data = data['generator-gruntproject'];

            Q.delay((function () {
                appbones(bones, data);
            }()), 1500).then((function () {
                done();
            }()));

        },

        install: function () {
            if (!this.options['skip-install']) {
                this.npmInstall();
            } else {
                this.log('Dependencies install skipped');
            }
        },

        end: function () {}

    });

    module.exports = ezHTMLProjectGenerator;

}());
