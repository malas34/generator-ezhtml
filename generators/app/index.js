/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global require, module */
(function () {

    'use strict';

    var yosay = require('yosay'),
        generators = require('yeoman-generator');

    var EZHTMLGenerator = generators.Base.extend({

        constructor: function () {
            generators.Base.apply(this, arguments);
            this.log(yosay('Welcome to the awesome EZHTML Skeleton generator!'));
        },

        /** ----------------------------------


 Prompting

*/
        prompting: {
            askFor: function () {
                var done = this.async(),
                    prompts = [{
                        type: 'input',
                        name: 'name',
                        message: 'Your project name',
                        default: this.appname // Default to current folder name
                    }, {
                        type: 'input',
                        name: 'description',
                        message: 'Your project\'s description',
                        default: 'My awesome HTML project'
                    }, {
                        type: 'confirm',
                        name: 'git',
                        message: 'Do you want to use git ?',
                        default: true
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
            createGitRepository: function(){
                if (this.answers.git){
                    this.spawnCommand('git', ['init']);
                }
            },
            createGruntfile: function(){
            },
            // creation des fichiers de config project
            // .jshintrc, .gitignore, csslintrc...
            copyProjectFiles: function () {
                var $this = this;
                var files = [
                    '.gitignore',
                    '.editorconfig',
                    '.jshintrc',
                    '.csslintrc'
                ];
                files.map(function (file) {
                    if (!$this.dest.exists(file)) {
                        $this.copy(file, file);
                    }
                });
            },
            // creation des dossiers
            createProjectFolders: function () {
                this.mkdir('dev');
                this.mkdir('debug');
                this.mkdir('prod');
            }
        },

        /**
         *
         *
         *
         */
        writing: {
            saveYoConfig: function () {
                var config = {
                    name: this.answers.name,
                    description: this.answers.description
                };
                this.config.set('ezhtml:app', config);
                this.config.save();
            }
        },

        /**
         *
         *
         *
         */
        conflicts: {},

        /**
         *
         *
         *
         */
        install: {},

        /**
         *
         *
         *
         */
        end: {
            //this.spawnCommand('composer', ['install']);
        }

    });

    module.exports = EZHTMLGenerator;

}());
