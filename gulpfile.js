'use strict'

let gulp = require('gulp')
let babel = require('babel/register')
let mocha = require('gulp-mocha')

gulp.task('test', () => {
  return gulp.src('test/**/*.js')
            .pipe(mocha({
              compilers: {js: babel}
            }))
})
