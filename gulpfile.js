'use strict';

require('babel/register')

var gulp = require('gulp')
var nodemon = require('gulp-nodemon')
var mocha = require('gulp-mocha')

// TODO: Add gulp-babel and ^^ support

// gulp.task('nodemon', () => {
//   nodemon({
//     script: 'DEBUG=cms:* babel-node app.js'
//   })
// })
// gulp.task('start', function () {
//   nodemon({
//     script: 'server.js'
//   , ext: 'js html'
//   , env: { 'NODE_ENV': 'development' }
//   })
// })

gulp.task('default', ['nodemon'])
