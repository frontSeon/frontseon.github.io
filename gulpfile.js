// Modules 호출
var gulp = require('gulp');
concat = require('gulp-concat'),
cleanCSS = require('gulp-clean-css'),
rename = require('gulp-rename'),
sass = require('gulp-sass')(require('node-sass')),
sourcemaps = require('gulp-sourcemaps'),

gulp.task('all', () => {
    return (
        gulp
            .src(['./css/*.css'])
            .pipe(sourcemaps.init())
            .pipe(concat('all.css'))
            .pipe(cleanCSS())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('css'))
    );
});