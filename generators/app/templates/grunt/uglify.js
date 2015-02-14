/*jslint indent: 4 */
/*global module */
module.exports = {
    vendor: {
        files: [{
            expand: true,
            flatten: true,
            cwd: '',
            ext: '.min.js',
            src: ['tmp/bower/**/*.js'],
            dest: 'public/js/vendor'
        }]
    }
};
