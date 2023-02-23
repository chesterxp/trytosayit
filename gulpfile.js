const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

 
gulp.task('min', async function () {
    gulp.src('src/**/*.css')
        .pipe(autoprefixer({
			cascade: false
		}))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('src'));
});

// function defaultTask(cb) {
//   // place code for your default task here
//   cb();
// }

// exports.default = defaultTask