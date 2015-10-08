var gulp = require('gulp');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');
var derequire = require('gulp-derequire');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', function() {
    // Single entry point to browserify
    var b = browserify({entries: 'index.js',standalone: 'gapi'}).transform(babelify);
    return b.bundle()
        .pipe(source('gapi.js'))
        .pipe(derequire())
        .pipe(gulp.dest('dist'))
        .pipe(rename('gapi.min.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('serve', ['default'], function () {
    connect.server();
});
