/*jslint indent: 4 */
/*global module, require */
(function () {
    'use strict';

    var file,
        Path = require('path');

    module.exports = {
        compile: {
            src: [
                'src/partials/**/*.hbs'
            ],
            options: {
                ignorePath: /^(\/|\.+)+(bower_components\/)/,
                exclude: ['unsemantic-grid-responsive-no-ie7.css', 'html5shiv.js'],
                fileTypes: {
                    hbs: {
                        block: /(([ \t]*)<!--\s*bower:*(\S*)\s*-->)(\n|\r|.)*?(<!--\s*endbower\s*-->)/gi,
                        detect: {
                            js: /<script.*src=['"]([^'"]+)/gi,
                            css: /<link.*href=['"]([^'"]+)/gi
                        },
                        replace: {
                            js: function (filePath) {
                                file = Path.basename(filePath);
                                file = file.replace('.js', '.min.js');
                                return '<script type="text/javascript" src="/js/vendor/' + file + '"></script>';
                            },
                            css: function (filePath) {
                                file = Path.basename(filePath);
                                file = file.replace('.css', '.min.css');
                                return '<link rel="stylesheet" type="text/css" href="/css/vendor/' + file + '" />';
                            }
                        }
                    }
                }
            }
        }
    };
}());
