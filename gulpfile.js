/* Variables */
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    bower = require('gulp-bower'),
    uglify = require('gulp-uglify');

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

/* Copy Images */
gulp.task('copy:images', function() {
    gulp.src('./assets/images/**/*')
        .pipe(gulp.dest('./dist/images'));
});

/* Copy Scripts */
gulp.task('copy:scripts', function() {
    gulp.src('./assets/images/**/*')
        .pipe(gulp.dest('./dist/images'));
});

// Gulp uglify task
gulp.task('uglify', function() {
    return gulp.src('./src/scripts/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

/* Watch */
gulp.task('watch', function () {
    gulp.watch('./src/sass/**/*.scss', ['styles']);
    gulp.watch(['./dist/*.html'], ['reload']);
});

/* Default */
gulp.task('default', ['connect', 'watch']);