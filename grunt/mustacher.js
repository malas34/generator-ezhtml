/*globals module */
module.exports = {
    options: {
        partials: {
            src: './src/html/partials/'
        }
    },
    all: {
        files: [{
            cwd: '.',
            ext: '.html',
            expand: true,
            flatten: true,
            filter: 'isFile',
            dest: 'build/public/',
            src: ['./src/html/*.tpl']
        }]
    }
};
