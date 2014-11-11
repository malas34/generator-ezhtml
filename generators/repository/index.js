/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global require, module */
(function () {

    'use strict';

    var generators = require('yeoman-generator');

    var RepositoryGenerator = generators.Base.extend({

        constructor: function () {
            generators.Base.apply(this, arguments);
        },

        /**
         *
         *
         *
         */
        prompting: {
            ask: function () {
                var done = this.async(),
                    prompts = [{
                        type: 'input',
                        name: 'name',
                        message: 'Your git username',
                        default: this.user.git.name // Default to current folder name
                    }, {
                        type: 'input',
                        name: 'email',
                        message: 'Your git email',
                        default: this.user.git.email // Default to current folder name
                    }];
                this.prompt(prompts, function (answers) {
                    this.answers = answers;
                    done();
                }.bind(this));
            }
        },

        /**
         *
         *
         *
         */
        configuring: {
            init: function () {
                var done = this.async(),
                    child = this.spawnCommand('git', ['init']);
                child.on('close', function (code) {
                    done();
                });
            },
            user: function () {
                var done = this.async(),
                    child = this.spawnCommand('git config --local', ['user.name', this.answers.name]);
                child.on('close', function (code) {
                    done();
                });
            },
            email: function () {
                var done = this.async(),
                    child = this.spawnCommand('git config --local', ['user.email', this.answers.email]);
                child.on('close', function (code) {
                    done();
                });
            }
        },
        /**
         *
         *
         *
         */
        writing: {
            yoConfig: function () {
                var config = {
                    name: this.answers.name,
                    email: this.answers.email
                };
                this.config.set('ezhtml:repository', config);
                this.config.save();
            }
        }

    });

    module.exports = RepositoryGenerator;

}());
