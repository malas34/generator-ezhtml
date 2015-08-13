/*globals module */
module.exports = {
    options: {
        cascade: true,
        browsers: ['last 2 versions', 'ie 8', 'ie 9']
    },
    all: {
        cwd: '.',
        expand: true,
        flatten: false,
        dest: './build/public/css/',
        src: ['./build/public/css/*.css', '!./build/public/css/*.min.css'],
    }
};
