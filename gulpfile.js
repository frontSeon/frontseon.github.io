// Modules 호출
var gulp = require('gulp');
concat = require('gulp-concat'),
// 분리된 파일 합치는거

cleanCSS = require('gulp-clean-css'),
rename = require('gulp-rename'),
sass = require('gulp-sass')(require('node-sass')),
sourcemaps = require('gulp-sourcemaps'),
// 개발자코드에서 최종 CSS 말고 원래 파일위치 찍히게 해주는거

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