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

    var eZHTMLGenerator,
        Q = require('q'),
        path = require('path'),
        yosay = require('yosay'),
        lodash = require('lodash'),
        slugify = require('slugify'),
        AppBones = require('appbones'),
        pkg = require('../../package.json'),
        generators = require('yeoman-generator');

    eZHTMLGenerator = generators.Base.extend({

        constructor: function () {
            generators.Base.apply(this, arguments);

            this.option('skip-install', {
                desc: 'Skip the bower and node installations',
                defaults: false
            });

        },

        initializing: function () {
            // custom templates delimiter
            this.config.set('rdim', '%>');
            this.config.set('ldim', '<%=');
            this.log(yosay('Hello sir, welcome to the awesome ezhtml generator v' + pkg.version));
        },

        prompting: function () {

            var $this = this,
                prompts = [],
                done = this.async();

            // project name
            prompts.push({
                type: 'input',
                name: 'projectname',
                message: 'Project name',
                default: slugify(this.determineAppname())
            });

            prompts.push({
                type: 'input',
                name: 'username',
                message: 'Repository user name',
                default: this.user.git.name() || process.env.user || process.env.username
            });

            prompts.push({
                type: 'input',
                name: 'useremail',
                message: 'Repository user email',
                default: this.user.git.email() || 'you@mail.com'
            });

            // project name
            prompts.push({
                type: 'input',
                name: 'projectdescription',
                message: 'Project description',
                default: 'Project generated with Yeoman generator-ezhtml v' + pkg.version
            });

            prompts.push({
                type: 'input',
                name: 'projectrepository',
                message: 'Project repository url',
                default: function (values) {
                    return 'https://github.com' + '/' + values.username + '/' + values.projectname;
                }
            });

            this.prompt(prompts, function (values) {
                this.config.set('author', {
                    name: values.username,
                    email: values.useremail
                });
                this.config.set('project', {
                    name: values.projectname,
                    repository: values.projectrepository,
                    description: values.projectdescription
                });
                done();
            }.bind(this));

        },

        configuring: function () {
            // this.composeWith('ezhtml:conditionnals', {});
            if (!this.options['skip-install']) {
                this.composeWith('ezhtml:scripts', {});
                this.composeWith('ezhtml:styles', {});
            }
        },

        writing: function () {
            var $this = this,
                done = this.async(),
                data = this.config.getAll(),
                bones = path.resolve(this.templatePath(), '../bones.yml'),
                appbones = new AppBones(this.templatePath(), this.destinationPath());
            Q.delay((function () {
                appbones.build(bones, data);
            }()), 1500).then((function () {
                done();
            }()));
        },

        install: function () {
            if (!this.options['skip-install']) {
                this.npmInstall();
            }
        },

        end: function () {}

    });

    module.exports = eZHTMLGenerator;

}());
