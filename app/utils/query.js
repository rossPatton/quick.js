'use strict'

// @TODO cache bust is... BUSTED

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
 * @param {object} [options] [options object]
 * @return {array} [our node list, as an array]
 */
const query = function( sel ) {
	this.cache = this.cache ? this.cache : {}
	this.options.parent = this.options.parent || document
	this.options.bust = this.options.bust || false

	const key = `${this.options.parent.nodeName}:${sel}`

	if ( this.options.bust === true ||
		typeof this.cache[key] === 'undefined' ) {

		this.cache[key] = this.toArray(
			this.options.parent.querySelectorAll( sel )
		)
	}

	// pretty much just so i can test the cache object better for now
	return this.cache[key]
}

module.exports = query
