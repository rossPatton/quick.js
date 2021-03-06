/* @flow */
'use strict'


/**
 * @module
 * @public
 * @description get prop (first match) or set prop on all matching
 * @param {string} [get] get matching property of the first el in the selection
 * @param {string} [set] set property on the entire selection
 * @returns {string | Object} the value of property, or the parent Object
 */
const prop = function( get: string, set: string ): string | Object {
	// if set if string, we pass it as the value
	// else we just pass in the config object
	// ternary lets ppl pass in a value here, or a config object
	if ( set ) {
		this.each( el => el[get] = set )
	}

	// if getting, just return the prop (bracket notation needed: get is a str)
	// if setting, we set props above and continue chaining
	return !set ? this.sel[0][get] : this
}

module.exports = prop
