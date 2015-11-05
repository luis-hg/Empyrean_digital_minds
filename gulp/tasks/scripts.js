'use strict';

var gulp = require('gulp-help')(require('gulp'));

var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');

var config = require('./../config.js');
var handleError = require('./../utils/handleError.js');

// Lint .js files


gulp.task('scripts', 'Compile ES6 to ES5',function () {
  return gulp.src(config.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .on('error', handleError)
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.scripts.dest));
});