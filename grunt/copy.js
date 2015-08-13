/*globals module */
module.exports = {
    server: {
        expand: true,
        flatten: false,
        cwd: 'src/',
        src: ['server.js'],
        dest: './build/'
    },
    bower_css: {
        expand: true,
        flatten: true,
        cwd: './bower_components/',
        src: [],
        dest: './src/html/css/'
    },
    bower_js: {
        expand: true,
        flatten: true,
        cwd: './bower_components/',
        src: [],
        dest: './src/html/js/lib/globals/'
    }
};
