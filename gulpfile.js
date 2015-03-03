var gulp = require('gulp');
var webserver = require('gulp-webserver');
 
gulp.task('dev', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: 'index.html'
    }));
});

gulp.task('default', ['dev']);