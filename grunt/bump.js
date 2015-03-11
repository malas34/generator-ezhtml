/*jslint indent: 4 */
/*global module */
module.exports = function (grunt, options) {
    'use strict';
    return {
        options: {
            files: ['package.json'],
            updateConfigs: [],
            commit: true,
            commitMessage: '<%= bump.subject %>',
            commitFiles: ['-a'],
            createTag: false,
            tagName: 'v%VERSION%',
            tagMessage: 'Version %VERSION%',
            push: true,
            pushTo: 'origin',
            gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
            globalReplace: false
        }
    };
};
