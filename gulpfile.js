var gulp = require('gulp')
var nodemon = require('gulp-nodemon')
var eslint = require('gulp-eslint')
var babel = require('gulp-babel')
var webpack = require('gulp-webpack')
var livereload = require('gulp-livereload')

gulp.task('start', () => {
  nodemon({
    script: 'dist/server.js',
    env: {'NODE_ENV': 'development', 'DEBUG': 'app:*,http:*'}
  })
})

gulp.task('server', () => {
  gulp.src('src/server/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'))
	gulp.src('src/server/**/*.ejs')
		.pipe(gulp.dest('dist'))
		.pipe(livereload())
})

gulp.task('client', () => {
	gulp.src('src/client/entry.js')
		.pipe(webpack({
			devtool: 'source-maps',
			output: {
				filename: 'bundle.js'
			},
			module: {
				loaders: [
					{
						test: /\.js$/,
						loader: 'babel',
						exclude: /node_modules/
					}, {
						test: /\.vue$/,
						loader: 'vue'
					}
				]
			}
		}))
		.pipe(gulp.dest('dist/public'))
		.pipe(livereload())
})

gulp.task('watch', () => {
	livereload.listen()
  gulp.watch('src/server/**/*.*', ['server'])
	gulp.watch('src/client/**/*.*', ['client'])
})

gulp.task('dev', ['start', 'watch'])
