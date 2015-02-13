/*jslint indent: 4 */
/*global module */
module.exports = {
    options: {
        cwd: '.',
        livereload: 1337,
        livereloadOnError: false
    },
    less: {
        files: ['./src/partials/**/*.hbs', './src/html/s*.tpl'],
        tasks: ['less:compile']
    },
    mustacher: {
        files: ['./src/partials/**/*.hbs', './src/html/s*.tpl'],
        tasks: ['mustacher:compile']
    }
};
