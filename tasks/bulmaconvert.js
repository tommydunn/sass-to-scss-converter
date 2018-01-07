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


gulp.task('bulmaconvert', function () {
  return gulp.src(
    [
      'node_modules/bulma/*.+(sass|scss)',
      'node_modules/bulma/sass/**/*.+(sass|scss)'
    ], {
      base: './node_modules/bulma/'
    })
    .pipe(converter({
      from: 'sass',
      to: 'scss',
      rename: true
    }))
    // Rename file paths in source files
    .pipe(replace('.sass"', '.scss"'))
    .pipe(gulp.dest('./output'));
  });
