'use strict';

const toArray = require( '../utils/toArray' );

/**
 * @module
 * @public
 * @description get text of first el in the selection
 * @param {string} [set] if passed in, sets the text of the selection
 * @returns {string | Object} the textContext of the first el, or the parent Object
 */
const text = function( set ) {
	let txt = [];

	// get textContent of first node in selection
	if ( typeof set === 'undefined' ) {
		const nodes = toArray( this[0][0].childNodes );

		nodes.forEach( node => {
			if ( node.nodeType === 1 || node.nodeType === 3 ) {
				txt.push( node.textContent );
			}
		} );
	}
	// else set textContent of all nodes in selection
	else {
		this.each( el => {
			if ( el.nodeType === 1 || el.nodeType === 11 || el.nodeType === 9 ) {
				el.textContent = document.createTextNode( set ).textContent;
			}
		} );
	}

	// if just getting, we return the total txt
	// if setting, we set above and continue chaining
	return typeof set === 'undefined' ? txt.join( ' ' ) : this;
};

module.exports = text;
