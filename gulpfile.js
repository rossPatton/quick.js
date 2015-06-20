/* jshint node: true */
/**
 * Gulp Build File
 * https://github.com/gulpjs/gulp/
 */

'use strict';

// gulp / npm plugins used
var	babel     = require('babelify');
var biffy     = require('browserify');
var buff      = require('vinyl-buffer');
var gulp      = require('gulp');
var source    = require('vinyl-source-stream');
var $ = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'gulp.*'],
	replaceString: /^gulp(-|\.)/,
	camelize: true, // transforms hyphenated plugins names to camel case
	lazy: true, // lazy load plugins on demand
	rename: {
		'gulp-sourcemaps': 'maps'
	}
});


/**
 * if prod flag is passed, skip some steps (all we need for now)
 * false if --prod flag is used (gulp stylus --prod for example)
 */
var dev = process.argv.indexOf('--prod') === -1;


// err handler
var onError = function( err ) {
	$.util.beep();
	console.log( err );
};


/**
 * create a file that will be minified and combined with our vendor code
 */
gulp.task('app', function() {
	var b = biffy({
		debug: false
	});

	b.transform( babel );
	b.add('app/app.js');

	// start bundling
	return b.bundle()
		.on('error', function( err ) {
			onError( err );
			this.emit('end');
		})
		.pipe( source('app.min.js') )
		.pipe( buff() )
		.pipe( $.if( dev, $.maps.init() ) )
		// .pipe( $.if( !dev, $.uglify() ) )
		.pipe( $.uglify() )
		.pipe( $.maps.write('./') )
		.pipe( gulp.dest('dist/') );
});


gulp.task('eslint', $.shell.task([
	'eslint app/'
]));


// watch our files, runs tasks as we work
gulp.task('watch', function() {
	gulp.watch( 'app/**/*.js', ['eslint', 'app'] );
});


// gulp -> just runs the stuff we touch the most
gulp.task( 'default', [ 'eslint', 'app' ] );
