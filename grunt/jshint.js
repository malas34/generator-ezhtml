/*jslint indent: 4 */
/*global module */
module.exports = {
    options: {
        jshintrc: '.jshintrc'
    },
    server: ['./src/server.js'],
    html: ['./src/html/**/*.js'],
    all: ['index.js', 'Gruntfile.js', './src/server.js', './spec/**/*.js', './src/html/**/*.js']
};
