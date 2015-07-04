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
// if ( typeof window !== 'undefined' ) {
// 	module.exports = window.requestAnimationFrame;
// }
// else {
// 	module.exports = function(cb) { return setTimeout( cb => cb(), 0 ).bind(this) }.bind(this);
// }

