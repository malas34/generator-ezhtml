/*jslint indent: 4 */
/*global module, require */
(function () {
    'use strict';

    var file,
        Path = require('path'),
        bower_path = 'bower_components';

    module.exports = function (grunt, options) {
        return {
            compile: {
                src: [
                    'src/partials/**/*.hbs'
                ],
                options: {
                    ignorePath: /^(\/|\.+)+(bower_components\/)/,
                    exclude: ['unsemantic-grid-responsive-no-ie7.css'],
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
                                    // le placeholder de htmlshiv
                                    // est deja place dans le header
                                    if(file !== 'html5shiv.js'){
                                        file = file.replace('.js', '.min.js');
                                        file = '/js/vendor/' + file;
                                        return '<script type="text/javascript" src="' + file + '"></script>';
                                    } else {
                                        return '';
                                    }
                                },
                                css: function (filePath) {
                                    file = Path.basename(filePath);
                                    file = file.replace('.css', '.min.css');
                                    file = '/css/vendor/' + file;
                                    return '<link rel="stylesheet" type="text/css" href=" ' + file + '" />';
                                }
                            }
                        }
                    },
                    onPathInjected: function (fileObject) {
                        var output,
                            opts = {encoding: 'utf8'},
                            file = Path.join(bower_path, fileObject.path),
                            name = Path.basename(file),
                            buffer = grunt.file.read(file);
                        output = Path.join('src', fileObject.block, 'bower', name);
                        grunt.file.write(output, buffer);
                    }
                }
            }
        };
    };
}());
