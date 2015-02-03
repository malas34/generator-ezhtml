/*jslint indent: 4 */
/*global module */
module.exports = {
    options: {
        compress: true
    },
    compile: {
        files: {
            "./public/css/styles.css": "./src/less/styles.less"
        }
    }
};
