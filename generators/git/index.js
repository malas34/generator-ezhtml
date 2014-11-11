/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global require, module */
(function () {

    'use strict';

    var generators = require('yeoman-generator');

    var GitGenerator = generators.NameBased.extend({

        constructor: function () {
            generators.Base.apply(this, arguments);
        },

        prompting: {},
        configuring: {},
        writing: {},
        conflicts: {},
        install: {},
        end: {
            //this.spawnCommand('composer', ['install']);
        }

    });

    module.exports = GitGenerator;

}());
