/*jslint indent: 4 */
/*global module */
module.exports = {
    vendor: {
        files: [{
            cwd: '',
            expand: true,
            flatten: true,
            dest: 'public/js/vendor',
            src: ['tmp/vendor/**/*.js']
        }]
    }
};
