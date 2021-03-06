/* @flow */
'use strict'


/**
 * @module
 * @public
 * @description get text of first el in the selection
 * @param {string} [set] if passed in, sets the text of the selection
 * @returns {string | Object} the textContext of the first el, or the parent Object
 */
const text = function( set: string ): string | Object {
	// @TODO pre-hinting this array and using direct assignment vs push
	let txt: Array = []

	// get textContent of first node in selection
	if ( typeof set === 'undefined' ) {
		const nodes: Array = this.toArray( this.sel[0].childNodes )

		// we do it this way so we don't get run-on sentences
		nodes.forEach( node => {
			if ( node.nodeType === 1 || node.nodeType === 3 ) {
				txt.push( node.textContent )
			}
		} )
	}
	// else set textContent of all nodes in selection
	else {
		this.each( el => {
			const setTxt: string = document.createTextNode( set ).textContent
			el.textContent = setTxt
		} )
	}

	// if just getting, we return the total txt
	// if setting, we set above and continue chaining
	return typeof set === 'undefined' ? txt.join( ' ' ) : this
}

module.exports = text
