var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('default', function() {
    gulp.src('main.js')
        .pipe(sourcemaps.init())
        .pipe(ngAnnotate())
        .pipe(babel())
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
    connect.server();
});
