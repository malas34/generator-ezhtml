/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global require, module */
(function () {

    'use strict';

    var generators = require('yeoman-generator');
    module.exports = generators.NamedBase.extend({
        constructor: function () {
            generators.Base.apply(this, arguments);
            // this.option('coffee');
        }
    });

}());
