'use strict';
const toArray = require( './toArray' );
let cache = {};


/**
 * @module
 * @public
 * @requires toArray
 * @description save the result of a dom query
 * 	            this is accessible app wide, so you don't have to constantly
 * 	            do dom lookups for each thing every time a function is called
 * 	            also gives you an array, which is more usable than a nodelist
 * @see https://eamann.com/tech/selector-caching-jquery/
 * @param {string} [sel] [the string we'll use to get dom nodes]
 * @param {parent} [obj] [where to search]
 * @param {bool} [bust] [if true, we ignore the cache and get it fresh]
 * @return {array} [our node list, as an array]
 */
const query = function( sel, parent = document, bust = false ) {
	if ( bust === 'bust' ||
		typeof cache[`${parent.nodeName}:${sel}`] === 'undefined' ) {
		console.log( 'bust cache' );
		cache[`${parent.nodeName}:${sel}`] = toArray( parent.querySelectorAll( sel ) );
	}

	// pretty much just so i can test the cache object better for now
	return {
		sCache: cache,
		sel: cache[`${parent.nodeName}:${sel}`]
	};
};

module.exports = query;
