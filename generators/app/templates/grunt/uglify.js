/*jslint indent: 4 */
/*global module */
module.exports = {
    vendor: {
        files: [{
            cwd: '',
            expand: true,
            flatten: true,
            ext: '.min.js',
            dest: 'public/js/vendor',
            src: ['src/js/bower/**/*.js']
        }]
    }
};
