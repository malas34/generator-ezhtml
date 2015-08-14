/*jslint indent: 4 */
/*globals module, require */
(function () {

    'use strict';

    var gulp = require('gulp'),
        less = require('gulp-less'),
        autoprefixer = require('gulp-autoprefixer');

    gulp.task('css', function () {

        gulp.src('src/html/less/*.less')
            .pipe(less())
            .pipe(autoprefixer({
                cascade: true,
                browsers: ['last 2 versions', 'ie8', 'ie9']
            }).pipe(gulp.dest('dist/public/css'));

    });

}());
