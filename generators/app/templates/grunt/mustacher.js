/*jslint indent: 4 */
/*global module */
module.exports = {
    options: {
        partials: {
            ext: '.hbs',
            src: './src/partials/'
        }
    },
    dev: {
        options: {
            context: {}
        },
        files: [{
            src: './src/html/index.tpl',
            dest: './public/html/index.html'
        }]

    }
};