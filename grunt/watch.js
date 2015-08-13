/*jslint indent: 4 */
/*global module */
module.exports = {
    options: {
        cwd: '.',
        livereload: false,
        livereloadOnError: false
    },
    js: {
        files: ['./src/html/js/**/*.js'],
        tasks: ['build_js']
    },
    css: {
        files: ['./src/html/less/**/*.less', './src/html/css/**/*.css'],
        tasks: ['build_css']
    },
    html: {
        files: ['./src/html/*.tpl', './src/html/partials/**/*.hbs'],
        tasks: ['build_html']
    }
};
