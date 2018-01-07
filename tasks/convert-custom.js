const gulp = require("gulp"),
replace = require('gulp-replace'),
converter = require('sass-convert'),
sass = require('gulp-sass');

// example uses bulma but works with any sass
// In your terminal
// 1. npm install -D sass-convert gulp bulma gulp-sass gulp-replace
// 2. gem install sass
// 3. gulp bulmaconvert
// 4. gulp sass


gulp.task('convert-custom', function () {
  return gulp.src(
    [
      'app-2/src/*.+(sass|scss)',
      'app-2/src/bulma/**/*.+(sass|scss)'
    ], {
      base: './app-2/src/'
    })
    .pipe(converter({
      from: 'sass',
      to: 'scss',
      rename: true
    }))
    // Rename file paths in source files
    .pipe(replace('.sass"', '.scss"'))
    .pipe(gulp.dest('./custom-output'));
  });
