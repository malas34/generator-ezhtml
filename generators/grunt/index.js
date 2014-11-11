/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global require, module */
(function () {

    'use strict';

    var FS = require('fs'),
        generators = require('yeoman-generator');

    var GruntfileGenerator = generators.NamedBase.extend({

        _gruntTasks: [
            'grunt-mustacher',
            'grunt-autoprefixer',
            'grunt-contrib-copy',
            'grunt-contrib-less',
            'grunt-contrib-watch',
            'grunt-contrib-clean',
            'grunt-contrib-coffee',
            'grunt-contrib-concat',
            'grunt-contrib-jshint',
            'grunt-contrib-uglify'
        ],

        _setConfig: function (answers, name) {
            if (answers.hasOwnProperty(name)) {
                return answers[name];
            } else {
                return false;
            }
        },

        constructor: function () {
            generators.Base.apply(this, arguments);
            //
            /*
            this.pkg = require('../package.json');
            if (this.dest.exists('package.json')) {
                this.packageJSON = this.dest.readJSON('package.json');
                this.appname = this.packageJSON.name || this.appname;
                this.version = this.packageJSON.version || this.version;
                this.hasJshint = this.packageJSON.hasOwnProperty('jshintConfig') || this.dest.exists('.jshintrc');
            } else {
                this.hasJshint = this.dest.exists('.jshintrc');
            }
            */
            //this.hasJshint = this.dest.exists('.jshintrc');
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
                    }];
                this.prompt(prompts, function (answers) {
                    var config = {};
                    this.config.set('ezhtml:gruntfile', config);
                    done();
                }.bind(this));
            }
        },

        /**
         *
         *
         *
         */
        configuring: function () {

            this.config.save();
        },

        /**
         *
         *
         *
         */
        writing: function () {
            var editor = this.gruntfile;
            editor.insertConfig('jshint', '{ foo: "bar" }');
            this._gruntTasks.map(function(task){
                editor.loadNpmTasks(task);
            });
            FS.writeFileSync('Gruntfile.js', editor.toString());
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
        install: {
            // install via npm, bower...
            // install via npm, bower...
           dependencies: function () {
                var done = this.async();
                this.npmInstall(this._gruntTasks, {
                    'save': true,
                    'saveDev': false
                }, done);
                // this.bowerInstall(['lodash'], done);
            },

            devDependencies: function () {

            }
        },

        /**
         *
         *
         *
         */
        end: {}

    });

    module.exports = GruntfileGenerator;

}());
