/* jshint node: true */
/**
 * Gulp Build File
 * https://github.com/gulpjs/gulp/
 */

'use strict';

// gulp / npm plugins used
let	babel     = require( 'babelify' );
let biffy     = require( 'browserify' );
let buff      = require( 'vinyl-buffer' );
let gulp      = require( 'gulp' );
let source    = require( 'vinyl-source-stream' );
let $ = require( 'gulp-load-plugins' )( {
	pattern: ['gulp-*', 'gulp.*'],
	replaceString: /^gulp(-|\.)/,
	camelize: true, // transforms hyphenated plugins names to camel case
	lazy: true, // lazy load plugins on demand
	rename: {
		'gulp-sourcemaps': 'maps'
	}
} );


/**
 * if prod flag is passed, skip some steps (all we need for now)
 * false if --prod flag is used (gulp stylus --prod for example)
 */
let dev = process.argv.indexOf( '--prod' ) === -1;


// err handler
let onError = function( err ) {
	$.util.beep();
	console.log( err );
};


// transform and minify app js
gulp.task( 'app', function() {
	let b = biffy( {
		debug: false
	} );

	b.transform( babel );
	b.add( 'app/app.js' );

	// start bundling
	return b.bundle()
		.on( 'error', function( err ) {
			onError( err );
			this.emit( 'end' );
		} )
		.pipe( source( 'app.min.js' ) )
		.pipe( buff() )
		.pipe( $.if( dev, $.maps.init() ) )
		// .pipe( $.if( !dev, $.uglify() ) )
		.pipe( $.uglify() )
		.pipe( $.maps.write( './' ) )
		.pipe( gulp.dest( 'dist/' ) );
} );


// lint app/ according to .eslintrc
gulp.task( 'eslint', $.shell.task( [
	'eslint app/'
] ) );


// watch our files, runs tasks as we work
gulp.task( 'watch', function() {
	gulp.watch( 'app/**/*.js', ['eslint', 'app'] );
} );


// gulp -> just runs the stuff we touch the most
gulp.task( 'default', [ 'eslint', 'app' ] );
