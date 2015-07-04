'use strict';


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
		const nodes = this.toArray( this.sel[0].childNodes );

		// we do it this way so we don't get run-on sentences
		nodes.forEach( node => {
			if ( node.nodeType === 1 || node.nodeType === 3 ) {
				txt.push( node.textContent );
			}
		} );
	}
	// else set textContent of all nodes in selection
	else {
		this.each( el => {
			const setTxt = document.createTextNode( set ).textContent;

			if ( el.nodeType === 1 || el.nodeType === 11 || el.nodeType === 9 ) {
				this.raf( function () {
					el.textContent = setTxt;
				} );
			}
		} );
	}

	// if just getting, we return the total txt
	// if setting, we set above and continue chaining
	return typeof set === 'undefined' ? txt.join( ' ' ) : this;
};

module.exports = text;
