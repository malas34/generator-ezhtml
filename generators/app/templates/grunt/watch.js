/*jslint indent: 4 */
/*global module */
module.exports = {
    options: {
        cwd: '.',
        livereload: 1337,
        livereloadOnError: false
    },
    js: {
        files: ['./src/js/**/*.js'],
        tasks: ['clean:js', 'copy:js']
    },
    less: {
        files: ['./src/less/**/*.less'],
        tasks: ['clean:css', 'less', 'autoprefixer:dev']
    },
    css: {
        files: ['./src/css/**/*.css'],
        tasks: ['clean:css', 'copy:css', 'autoprefixer:dev']
    },
    mustacher: {
        files: ['./src/partials/**/*.hbs', './src/html/s*.tpl'],
        tasks: ['mustacher:dev']
    },
    vendor: {
        files: ['./bower.json'],
        tasks: ['wiredep', 'clean:vendor', 'bower_main', 'cssmin:vendor', 'uglify:vendor']
    }
};
