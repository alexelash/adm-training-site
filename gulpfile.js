const gulp = require('gulp');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');

gulp.task('css-min', () => {
  return gulp.src('assets/css/*.css')
    .pipe(cleanCSS({ 
        compatibility: 'ie8'
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('public'));
});

gulp.task('css:watch', () => {
    gulp.watch('assets/css/*.css', gulp.series('css-min'));
});

gulp.task('js-min', () => {
    return gulp.src('assets/javascript/*.js')
        .pipe(minify({
            ext: {
                src: '.js',
                min: '.min.js'
            },
            noSource: true
        }))
        .pipe(gulp.dest('public'))
});

gulp.task('js:watch', () => {
    gulp.watch('assets/javascript/*.js', gulp.series('js-min'));
});

gulp.task('watch', gulp.parallel('js:watch', 'css:watch'));
