"use strict";
const   gulp = require('gulp'),
        sass = require('gulp-sass'),
        less = require('gulp-less'),
        babel = require('gulp-babel'),
        sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function() {

});

//gulp.task('sass', function () {
//    gulp.src('./public/stylesheets/sass/app.scss')
//        .pipe(sass().on('error', sass.logError))
//        .pipe(gulp.dest('./public/stylesheets/css'));
//});

gulp.task('less', function () {
    return  gulp.src('./public/stylesheets/less/app.less')
                .pipe(less())
                .pipe(gulp.dest('./public/stylesheets/css'));
});

gulp.task('babel', function() {
    gulp.src('./public/scripts/es6/app.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['babel-preset-es2015'] }))
        .pipe(sourcemaps.write('../js'))
        .pipe(gulp.dest('./public/scripts/js'));
});

gulp.task('watch', function() {
    gulp.watch('./public/scripts/es6/**/*.js', ['babel']);
    gulp.watch('./public/stylesheets/less/**/*.less', ['less']);
    //gulp.watch('./public/stylesheets/sass/**/*.scss', ['sass']);
});