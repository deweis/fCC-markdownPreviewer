'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

// Watch and Serve
gulp.task('serve', ['sass'], function () {
  browserSync.init({
    server: './',
  });

  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./*.html').on('change', browserSync.reload);
});

// Default
gulp.task('default', ['serve']);
