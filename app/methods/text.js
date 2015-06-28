'use strict';


/**
 * @module
 * @public
 * @description get text of first el in the selection
 * @param {string} [set] if passed in, sets the text of the selection
 * @returns {string | Object} the textContext of the first el, or the parent Object
 */
const text = function( set ) {
	let txt = '';

	if ( typeof set === 'undefined' ) {
		this.each( el => txt += ` ${el.textContent}` );
	}

	this.each( el => {
		if ( el.nodeType === 1 || el.nodeType === 11 || el.nodeType === 9 ) {
			el.textContent = set;
		}
	} );

	// if just getting, we return the total txt
	// if setting, we set above and continue chaining
	return typeof set === 'undefined' ? txt : this;
};

module.exports = text;
