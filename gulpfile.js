/* Variables */
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    bower = require('gulp-bower');

/* Bower */
gulp.task('bower', function() {
    return bower();
});

/* Webserver */
gulp.task('connect', function() {
    connect.server({
        root: 'dist/',
        livereload: true
    });
});

/* Livereload */
gulp.task('reload', function () {
    gulp.src('./dist/*.html')
        .pipe(connect.reload());
});

/* Compile SCSS into minified CSS */
gulp.task('styles', function () {
    return gulp.src('./src/stylesheet/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths : ['./bower_components/bootstrap-sass/assets/stylesheets']
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css'));
});

/* Copy */
gulp.task('copy', function() {
    gulp.src('./assets/images/**/*')
        .pipe(gulp.dest('./dist/images'));
});

/* Watch */
gulp.task('watch', function () {
    gulp.watch('./src/sass/**/*.scss', ['styles']);
    gulp.watch(['./dist/*.html'], ['reload']);
});

/* Default */
gulp.task('default', ['connect', 'watch']);