/* @flow */
'use strict'


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
 * @return {array} [our node list, as an array]
 */
const query = function( sel: string ): Array<Object> {
	if ( typeof sel !== 'string' ) {
		throw new TypeError( 'query requires a string' )
	}

	const parent: Object = this.options.parent || document
	const key: string = `${parent.nodeName}:${sel}`
	const bust: boolean = this.options.bust || false
	const clear: boolean = this.options.clear || false

	// completely wipe the cache if clear prop passed in
	if ( clear === true ) {
		this.cache = {}
	}

	// if bust true, or selector not yet cached, query the dom
	// if !bust or selector already cached, we just return the cached selection
	if ( bust === true ||
		typeof this.cache[key] === 'undefined' ) {
		this.cache[key] = this.toArray( parent.querySelectorAll( sel ) )
	}

	// return the selection as an Array
	return this.cache[key]
}

module.exports = query
