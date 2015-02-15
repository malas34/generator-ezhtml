/*jslint indent: 4 */
/*global module */
module.exports = {
    css: {
        files: [{
            expand: true,
            flatten: true,
            src: ['src/css/*'],
            dest: 'tmp/css/'
        }]
    },
    js: {
        files: [{
            expand: true,
            flatten: false,
            src: ['src/js/*'],
            dest: 'public/js/'
        }]
    }
};
