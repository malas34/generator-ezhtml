/*jslint indent: 4 */
/*global module */
module.exports = {
    css: {
        files: [{
            expand: true,
            flatten: true,
            filter: 'isFile',
            dest: 'tmp/css/',
            src: ['src/css/**']
        }]
    },
    js: {
        files: [{
            expand: true,
            flatten: false,
            filter: 'isFile',
            dest: 'public/js/',
            src: ['src/js/**'],
        }]
    }
};