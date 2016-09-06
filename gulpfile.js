/* Variables */
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    bower = require('gulp-bower');

/* Bower */
gulp.task('bower', function() {
    return bower();
});

/* Webserver */
gulp.task('connect', function() {
    connect.server({
        root: 'public/',
        livereload: true
    });
});

/* Livereload */
gulp.task('reload', function () {
    gulp.src('./public/*.html')
        .pipe(connect.reload());
});

/* Watch */
gulp.task('watch', function () {
    gulp.watch(['./public/*.html'], ['reload']);
});

/* Default */
gulp.task('default', ['connect', 'watch']);