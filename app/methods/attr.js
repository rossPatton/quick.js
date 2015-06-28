'use strict';

/**
 * @module
 * @description appends dom nodes to the dom, and the end of each item in the selection
 * @param {string} [get] returns the matching attribute if there is one
 * @param {string} [set] sets an attribute on the selection
 * @returns {Object} [this | string] if getting, returns the attr, if setting, returns parent Object
 */
const attr = function( get, set ) {
	if ( set ) {
		this.each( el => el.setAttribute( get, set ) );
	}

	// if getting, return the attr
	// if setting, set attributes and continue chaining
	return !set ? this[0][0].getAttribute( get ) : this;
};

module.exports = attr;
