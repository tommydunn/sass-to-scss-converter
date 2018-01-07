const gulp = require("gulp"),
replace = require('gulp-replace'),
converter = require('sass-convert'),
sass = require('gulp-sass');

gulp.task('sass-custom', function () {
  return gulp.src('./custom-output/app-2.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./custom-output/css'));
});
