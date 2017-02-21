var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var spritesmith = require("gulp.spritesmith");
gulp.task('scss', function() {
    return sass('./scss/*.scss', {
            sourcemap: true,
            style: 'compressed'
        })
        .on('error', sass.logError)
        .pipe(sourcemaps.write('../scss-maps'))
        .pipe(gulp.dest('./css'));
});
