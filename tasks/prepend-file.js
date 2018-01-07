const gulp = require("gulp");
var foreach = require('gulp-foreach');
var concat = require('gulp-concat');
var addsrc = require('gulp-add-src');
var sass = require('gulp-sass');



gulp.task('prepend-file', function () {
  return gulp.src('output/sass/**/*.scss')
      // treats each file in gulp.src as a separate stream
    .pipe(foreach(function (stream, file) {
      return stream
         // append or prepend
       .pipe(addsrc.prepend('./output/bulma.scss'))
        //  you do have access to the 'file' parameter here if you need to rename
       .pipe(sass())
        .pipe(concat(path.basename(file.path)))
       // .pipe(concat('./hello.scss'))
       .pipe(gulp.dest('./dist'));
    }));
});
