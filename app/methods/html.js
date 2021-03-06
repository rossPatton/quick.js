/* @flow */
'use strict'


/**
 * @module
 * @public
 * @requires toArray
 * @TODO DOMParser is cool but def not the most compatible way of doing this
 * @TODO i feel like the return values here are off (opposite of what they should be i think)
 * @description gets or sets (safely) html content of a dom node
 * @param {string} [set] the html to (safely) insert if passed in
 * @returns {Object | string} the html of the el, or the parent Object
 */
const html = function( set ) {
	if ( set ) {
		this.empty()

		this.each( el => {
			el.innerHTML = set
		} )
	}

	return !set ? this.sel[0].innerHTML : this
}

module.exports = html
