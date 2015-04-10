/*jslint indent: 4 */
/*global module */
module.exports = {
    vendor: {
        files: [{
            expand: true,
            flatten: true,
            cwd: '',
            src: ['src/css/bower/**/*.css'],
            dest: 'public/css/vendor',
            ext: '.min.css'
        }]
    },
    dev: {
        files: [{
            expand: true,
            flatten: true,
            cwd: '',
            src: ['tmp/css/**/*.css'],
            dest: 'public/css',
            ext: '.min.css'
        }]
    }
};
