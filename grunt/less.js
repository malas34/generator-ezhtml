/*globals module */
module.exports = {
    all: {
        options: {
            compress: false,
            sourceMap: false
        },
        files: {
            './build/public/css/styles.css': './src/html/less/styles.less'
        }
    }
};
