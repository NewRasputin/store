var gulp = require('gulp')
var nodemon = require('gulp-nodemon')
var eslint = require('gulp-eslint')
var babel = require('gulp-babel')

gulp.task('start', () => {
  nodemon({
    script: 'dist/server.js',
    env: {'NODE_ENV': 'development', 'DEBUG': 'app:*,http:*'}
  })
})

gulp.task('server', () => {
  gulp.src('src/server/**/*.*')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'))
})

gulp.task('watch', () => {
  gulp.watch('src/server/**/*.*', ['server'])
})

gulp.task('dev', ['start', 'watch'])
