'use strict';
var path = require('path');
var gulp = require('gulp');
var excludeGitignore = require('gulp-exclude-gitignore');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var nsp = require('gulp-nsp');
var plumber = require('gulp-plumber');
var coveralls = require('gulp-coveralls');
var gulpTsConfig = require('gulp-tsconfig');


gulp.task('tsconfig', function() {
  var tsConfig = gulpTsConfig({
    tsOrder: [
      'src/**/*.ts',
      'src/*.ts'
    ],
    tsConfig: {
      "compilerOptions": {
        "target": "ES3",
        "sourceMap": true,
        "module": "commonjs"
      }
    }
  });


  return gulp.src(["src/**/*.ts","src/*.ts"])
    .pipe(tsConfig())
    .pipe(gulp.dest('.'));

  // --> result is a tsconfig.json file.
});

gulp.task('nsp', function (cb) {
  nsp({package: path.resolve('package.json')}, cb);
});

gulp.task('pre-test', function () {
  return gulp.src(['src/**/*.js','src/*.js'])
    .pipe(excludeGitignore())
    .pipe(istanbul({
      includeUntested: true
    }))
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], function (cb) {
  var mochaErr;

  gulp.src(['src/**/*.test.js','src/*.test.js'])
    .pipe(plumber())
    .pipe(mocha({reporter: 'spec'}))
    .on('error', function (err) {
      mochaErr = err;
    })
    .pipe(istanbul.writeReports())
    .on('end', function () {
      cb(mochaErr);
    });
});

gulp.task('watch', function () {
  gulp.watch(['src/**/*.ts','src/*.ts'], ['default']);
});

gulp.task('coveralls', ['test'], function () {
  if (!process.env.CI) {
    return;
  }

  gulp.src(path.join(__dirname, 'coverage/lcov.info'))
    .pipe(coveralls());
});

gulp.task('prepublish', ['nsp']);
gulp.task('default', ['tsconfig', 'test', 'coveralls']);
