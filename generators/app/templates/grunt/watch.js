/*jslint indent: 4 */
/*global module */
module.exports = {
    options: {
        cwd: '.',
        livereload: 1337,
        livereloadOnError: false
    },
    less: {
        files: ['./src/less/**/*.less'],
        tasks: ['less:dev']
    },
    css: {
        files: ['./src/css/**/*.css'],
        tasks: ['autoprefixer', 'cssmin:dev']
    },
    mustacher: {
        files: ['./src/partials/**/*.hbs', './src/html/s*.tpl'],
        tasks: ['mustacher:dev']
    },
    vendor: {
        files: ['./bower.json'],
        tasks: ['wiredep', 'bower_main', 'cssmin:vendor', 'uglify:vendor', 'clean']
    }
};
