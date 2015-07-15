'use strict';


/**
 * @module
 * @public
 * @requires toArray
 * @description just a shorthand for window.requestAnimationFrame
 *              if browser doesnt support raf, use a polyfill (not bundled with quick)
 *              if server side, just call the
 * @param {string} [sel] [the string we'll use to get dom nodes]
 * @param {parent} [obj] [where to search]
 * @param {bool} [bust] [if true, we ignore the cache and get it fresh]
 * @return {array} [our node list, as an array]
 */
if ( typeof window !== 'undefined' ) {
	// console.log( 'piggy back on raf' );
	module.exports = window.requestAnimationFrame
}
// if on server side dont bother with raf
else {
	// console.log( 'no raf' );
	module.exports = function( cb ) { return cb() }
}

